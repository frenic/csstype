import * as fs from 'fs';
import * as jsdom from 'jsdom';
import * as path from 'path';
import syncRequest = require('sync-request');
import { error, warn } from './logger';

// tslint:disable-next-line:no-var-requires
const TurndownService = require('turndown');

const pathToCache = path.join(__dirname, 'data/urls.json');

// tslint:disable-next-line:no-var-requires
const urlData: Record<string, string> = require(pathToCache);

const turndownService = new TurndownService();

// change anchors to plain text so we don't end up with a bunch of relative urls
turndownService.addRule('anchor', {
  filter: 'a',
  replacement: (content: string) => content,
});

function scrapeSummary(url: string): string {
  try {
    const htmlContents = syncRequest.default('GET', url).getBody() as string;

    const { window } = new jsdom.JSDOM(htmlContents);
    const summaryElement = window.document.querySelector('#wikiArticle > p:not(:empty)');
    window.close();

    if (summaryElement) {
      return turndownService.turndown(summaryElement.innerHTML);
    }

    return '';
  } catch (ex) {
    warn(`Could not fetch summary for '${url}'`);
    return '';
  }
}

function saveToFile(): void {
  try {
    const fileContents = JSON.stringify(urlData, undefined, 2);
    fs.writeFileSync(pathToCache, fileContents, { encoding: 'utf-8' });
  } catch (ex) {
    error(ex.toString());
  }
}

export function getSummary(url: string): string {
  let summaryData = urlData[url];

  if (url && !summaryData) {
    console.log('Fetching summary for ' + url);
    urlData[url] = summaryData = scrapeSummary(url) || '';
    saveToFile();
  }

  return summaryData;
}
