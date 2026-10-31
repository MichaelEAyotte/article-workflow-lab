const u=require('../src/article-utils');
console.log(JSON.stringify({slug:u.slugify('Review & Recovery'),words:u.wordCountFromHtml('<h2>Review first</h2><p>Publish after approval.</p>'),dates:u.normalizeArticleDates({publicationDate:'2026-10-31',researchCutoffDate:'2026-10-30'})},null,2));
