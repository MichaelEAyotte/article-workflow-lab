# Source and limits

The functions in `src/article-utils.js` were initially extracted without logic changes from `ayotek-website/scripts/lib/article-tools.js` at commit `20905f56e04826b750d1da0dd259d458f27f334a`. The module/export wrapper and standalone tests/example are new. No template HTML, third-party libraries, article content, storage code, private URLs or deployment material is included.

The test suite covers slug normalization, text interpolation, word extraction, date precedence and nonmutation. Date normalization does not validate that a date is real or that a research source predates the cutoff; the full input validator performs additional checks. Slug generation does not ensure uniqueness. These limits are intentional in this extracted subset, and callers must validate at their own boundary.

The current owner-controlled, protectable selected material is offered under [PolyForm Noncommercial 1.0.0](LICENSE), with the [required notice and scope](NOTICE). The package remains marked private to prevent accidental npm publication. Previously published MIT permissions remain in effect as described in [publication history](PUBLICATION.md).

The prelaunch review subsequently corrected block-element word boundaries in `stripTags`, with matching changes staged in the private source project. Added tests distinguish block separation from inline formatting. These functions remain text utilities, not HTML sanitizers.

## Authorship and evidence boundary

The source functions derive from the private project cited above. The original utility module was added in commit `6960a7b731f84cd7451971e0e088b14a8d7cbe97`, attributed to Michael E. Ayotte, after the website template was imported. It was absent from that template import. Its file history contains no third-party copyright or license notice. All eight selected function blocks match private review commit `a534100d7d299ea5f057bbdb35c18272e4f76d0e`, including the documented word-boundary correction. The owner authorized the original MIT publication of this owner-controlled original code after that scoped provenance review. That historical authorization and the permissions already granted are preserved; the current licensing change does not revoke them.

The source website separately contains an HTML Codex template license and an Owl Carousel license. Those template/vendor implementations, assets and notices are outside this extraction; this repository does not relicense them or the production website. No client content or article drafts are included.

Extraction, wrappers, fictional examples, additional tests and prelaunch fixes were prepared with AI assistance. This is not a claim that every original source line was written without AI assistance. See [publication scope](PUBLICATION.md).
