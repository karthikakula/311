// @flow
/* eslint no-console: 0 */

/*
This script pulls the generic template from boston.gov and extracts parts of
it to be included in the webapp.

In particular, it gets the contents of the <header> and <footer> elements,
the .main-navigation <div>, and any stylesheet <link> hrefs from <head>.

It does not copy the class names from these wrapper elements, and those are
duplicated in the _document.js component.
*/

import fs from 'fs-extra';
import path from 'path';
import cheerio from 'cheerio';
import 'isomorphic-fetch';

const TEMPLATE_URL = 'https://www.boston.gov/api/v1/layouts/generic';

(async function fetchTemplates() {
  const templatesPath = path.join(__dirname, '../templates');
  fs.mkdirsSync(templatesPath);

  const res = await fetch(TEMPLATE_URL);

  if (!res.ok) {
    throw new Error(`Response from boston.gov was not 200: ${res.status}`);
  }

  const templateHtml = await res.text();
  const $ = cheerio.load(templateHtml);

  ['header', 'footer'].forEach((tag) => {
    const html = $(tag).html();
    if (!html) {
      throw new Error(`<${tag}> not found in html: ${templateHtml}`);
    }
    fs.writeFileSync(path.join(templatesPath, `${tag}.html`), html);
  });

  const navigationHtml = $('.main-navigation').html();
  fs.writeFileSync(path.join(templatesPath, 'navigation.html'), navigationHtml);

  const stylesheetHrefs = $('link[rel=stylesheet]').map((i, el) => $(el).attr('href')).toArray();
  fs.writeFileSync(path.join(templatesPath, 'stylesheets.json'), JSON.stringify(stylesheetHrefs, null, 2));
}())
  .catch((e) => {
    console.error('ERROR GETTING TEMPLATES', e);
    process.exit(1);
  });