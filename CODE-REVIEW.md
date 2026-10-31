# Source and limits

The functions in `src/article-utils.js` were initially extracted without logic changes from `ayotek-website/scripts/lib/article-tools.js` at commit `20905f56e04826b750d1da0dd259d458f27f334a`. The module/export wrapper and standalone tests/example are new. No template HTML, third-party libraries, article content, storage code, private URLs or deployment material is included.

The test suite covers slug normalization, text interpolation, word extraction, date precedence and nonmutation. Date normalization does not validate that a date is real or that a research source predates the cutoff; the full input validator performs additional checks. Slug generation does not ensure uniqueness. These limits are intentional in this extracted subset, and callers must validate at their own boundary.

Approve provenance and a license before public release. No open-source license is selected by this staging work.

The prelaunch review subsequently corrected block-element word boundaries in `stripTags`, with matching changes staged in the private source project. Added tests distinguish block separation from inline formatting. These functions remain text utilities, not HTML sanitizers.

## Authorship and evidence boundary

The source functions derive from the private project cited above. Extraction, wrappers, examples, additional tests and prelaunch fixes were prepared with AI assistance. Commit metadata does not establish whether the original implementation was independently authored or AI-assisted; that distinction requires owner confirmation.
