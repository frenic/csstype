import * as fs from 'fs';
import * as jsdom from 'jsdom';
import * as path from 'path';
import * as request from 'request';
import * as Turndown from 'turndown';
import { error, warn } from './logger';

const pathToCache = path.join(__dirname, '../data/urls.json');

const urlData: Record<string, string> = require(pathToCache);

const turndown = new Turndown();

// change anchors to plain text so we don't end up with a bunch of relative urls
turndown.addRule('anchor', {
  filter: 'a',
  replacement: (content: string) => content,
});

async function scrapeSummary(url: string): Promise<string | undefined> {
  try {
    const htmlContents: string = await new Promise((resolve, reject) => {
      request(url, (e, response, body) => {
        if (e) {
          reject(e);
        } else if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(`Response status code ${response.statusCode}`);
        } else {
          resolve(body);
        }
      });
    });

    const { window } = new jsdom.JSDOM(htmlContents);
    const summaryElement = window.document.querySelector('main :not(.notecard) > p:not(:empty)');
    window.close();

    if (summaryElement) {
      return turndown.turndown(summaryElement.innerHTML);
    }

    throw new Error('Element was not found');
  } catch (e) {
    warn(`Could not fetch summary for '${url}': ${e}`);
  }
}

function saveToFile(): void {
  try {
    const sortedUrlData = Object.keys(urlData)
      .sort()
      .reduce<Record<string, string>>((data, url) => {
        data[url] = urlData[url];
        return data;
      }, {});

    const fileContents = JSON.stringify(sortedUrlData, undefined, 2);
    fs.writeFileSync(pathToCache, fileContents, { encoding: 'utf-8' });
  } catch (ex) {
    error(ex.toString());
  }
}

export async function getSummary(url: string): Promise<string | undefined> {
  let summaryData: string | undefined = urlData[url];

  if (url && !summaryData) {
    console.log('Fetching summary for ' + url);
    summaryData = await scrapeSummary(url);
    if (summaryData) {
      urlData[url] = summaryData;
      saveToFile();
    }
  }

  return summaryData;
}
