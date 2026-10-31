'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { wordCountFromHtml, textFromHtml } = require('../src/article-utils');
test('adjacent blocks and line breaks retain word boundaries', () => {
  assert.equal(wordCountFromHtml('<h2>First title</h2><p>Second sentence</p>'), 4);
  assert.equal(wordCountFromHtml('<p>one<br>two</p><div>three</div>'), 3);
  assert.equal(wordCountFromHtml('<table><tr><td>one</td><td>two</td></tr></table>'), 2);
});
test('inline formatting does not split a word', () => {
  assert.equal(textFromHtml('<p>inter<em>oper</em>ability</p>'), 'interoperability');
  assert.equal(wordCountFromHtml(''), 0);
});
