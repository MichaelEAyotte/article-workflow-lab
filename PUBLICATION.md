# Publication scope and release checks

Owner-approved public release, reviewed October 31, 2026. Michael E. Ayotte authorized MIT licensing, promotion of the reviewed branch to `main`, and public publication of this selected repository. This document records the release scope; the repository visibility setting determines whether it is publicly accessible.

## Source and licensing

The eight selected functions match private article-tools review commit `a534100d7d299ea5f057bbdb35c18272e4f76d0e`. Original extraction provenance is commit `20905f56e04826b750d1da0dd259d458f27f334a`, followed by the documented block-element word-boundary correction. The utility module was added by Michael E. Ayotte after the website template import. No conflicting notice was found in its file history. Wrappers, tests and fictional examples were prepared with AI assistance. This is not an HTML sanitizer or the full publishing service.

The [MIT License](LICENSE), copyright 2026 Michael E. Ayotte, applies to the selected source, tests, fictional examples and original documentation in this repository. Preserve its copyright and permission notice in copies or substantial portions. [Source provenance and limitations](CODE-REVIEW.md) describe the extraction and rights review.

The source website has separate HTML Codex template and Owl Carousel licenses. No template HTML, vendor implementation or third-party asset is included here. This license does not cover that website, its templates/assets, client material or article content. Product names identify the original project or dependencies and do not imply endorsement.

## Validation scope

The release checks run `npm test` (**6 passing tests**) and `npm run demo` successfully on Node 24. No npm runtime or development dependencies are declared. Keep the package's `private` flag: public GitHub visibility does not publish an npm package.

The GitHub Actions workflow runs standalone tests and the example on `main` and the review branch. It has read-only repository permission, pinned actions, disabled persisted checkout credentials, no production secrets and no deployment step. Actionlint and local Markdown-link checks are part of the release verification. Hosted runner and runtime updates remain external dependencies.

The fetched reachable history and final release changes are checked with Gitleaks and private-address, credential and sensitive-content patterns, alongside Git integrity checks. No finding was identified in the reviewed candidate history. No operational screenshot, binary archive, account payload, private endpoint or client record is bundled. These checks reduce risk; they do not prove every possible sensitive detail is absent.

## Publication verification

Before promotion, compare the remote heads with the reviewed candidate and require successful test-only CI. After public publication, verify the default README, MIT license, anonymous clone, tests and example. The private production system and its deployments remain outside these checks.
