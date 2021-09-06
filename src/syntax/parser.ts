import { definitionSyntax } from 'css-tree';

export default function parse(syntax: string) {
  return definitionSyntax.parse(syntax);
}
