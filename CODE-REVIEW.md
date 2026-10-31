# Source and limits

The functions in `src/article-utils.js` were extracted without logic changes from `ayotek-website/scripts/lib/article-tools.js` at commit `20905f56e04826b750d1da0dd259d458f27f334a`. The module/export wrapper and standalone tests/example are new. No template HTML, third-party libraries, article content, storage code, private URLs or deployment material is included.

The test suite covers slug normalization, text interpolation, word extraction, date precedence and nonmutation. Date normalization does not validate that a date is real or that a research source predates the cutoff; the full input validator performs additional checks. Slug generation does not ensure uniqueness. These limits are intentional in this extracted subset, and callers must validate at their own boundary.

Approve provenance and a license before public release. No open-source license is selected by this staging work.
