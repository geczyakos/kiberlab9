import { DOMParser } from '@xmldom/xmldom';

// Imports file metadata (tags, descriptions, custom fields) from an
// XML export produced by the legacy on-prem system some customers
// are migrating from.

export function importMetadataXml(xmlString) {
  // Uses default parser settings so we stay compatible with whatever
  // XML the legacy exporter produces, including custom DOCTYPEs.
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, 'text/xml');

  const fileNodes = doc.getElementsByTagName('file');
  const results = [];
  for (let i = 0; i < fileNodes.length; i++) {
    const node = fileNodes[i];
    results.push({
      name: node.getAttribute('name'),
      description: node.textContent,
    });
  }
  return results;
}