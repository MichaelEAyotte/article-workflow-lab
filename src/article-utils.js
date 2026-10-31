'use strict';
// Extracted utilities; see CODE-REVIEW.md.
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function stripTags(value) {
  return String(value).replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").trim();
}

function textFromHtml(value) {
  return stripTags(value)
    .replace(/&(?:amp|quot|apos|nbsp);|&#(?:39|8217|8220|8221);/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCountFromHtml(value) {
  const text = textFromHtml(value);
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function publicationDateFor(data) {
  return data.publicationDate || data.date || "";
}

function researchCutoffDateFor(data) {
  return data.researchCutoffDate || publicationDateFor(data);
}

function normalizeArticleDates(data) {
  const publicationDate = publicationDateFor(data);
  const researchCutoffDate = researchCutoffDateFor(data);
  return { ...data, publicationDate, researchCutoffDate, date: publicationDate };
}


module.exports={escapeHtml,stripTags,textFromHtml,wordCountFromHtml,slugify,publicationDateFor,researchCutoffDateFor,normalizeArticleDates};
