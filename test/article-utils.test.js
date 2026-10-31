const test=require('node:test'), assert=require('node:assert/strict');
const u=require('../src/article-utils');
test('slug handles accents, punctuation and repeated whitespace',()=>{assert.equal(u.slugify('  Café & Review!  '),'cafe-and-review');});
test('HTML escaping protects text interpolation',()=>{assert.equal(u.escapeHtml('<a x="v">&\''), '&lt;a x=&quot;v&quot;&gt;&amp;\u0026#39;'.replace('\\u0026','&'));});
test('word count handles empty and nested text without claiming sanitization',()=>{assert.equal(u.wordCountFromHtml(''),0); assert.equal(u.wordCountFromHtml('<h2>Two words</h2> <p>Three more words</p>'),5);});
test('publication date overrides legacy date while cutoff remains separate',()=>{
 const input={date:'2020-01-01',publicationDate:'2026-10-31',researchCutoffDate:'2026-10-30'};
 const result=u.normalizeArticleDates(input); assert.equal(result.date,'2026-10-31');
 assert.equal(result.researchCutoffDate,'2026-10-30'); assert.equal(input.date,'2020-01-01');
});
