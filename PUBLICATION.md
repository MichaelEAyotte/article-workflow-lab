# Publication scope, licensing and release checks

## Current licensing scope

The current owner-controlled, protectable selected source, tests, fictional examples and original documentation are offered under the official, unmodified [PolyForm Noncommercial License 1.0.0](LICENSE). This is source-available software, not OSI-approved open-source software. The license's permitted purposes and conditions govern this offer; this document does not alter its text. Retain the [required notice](NOTICE).

Commercial use outside the purposes permitted by the official license requires separate written permission from [Michael E. Ayotte](https://github.com/MichaelEAyotte). Public visibility alone grants no additional permission. See [contribution terms](CONTRIBUTING.md) for contributor-owned material and the separate written rights needed before commercial licensing.

## Historical MIT publication

Michael E. Ayotte authorized the original MIT licensing, promotion to `main`, and public publication reviewed October 31, 2026. The published commit was `37515456449ec182728ca194ab1570aa61b827a8`; its [original MIT License](https://github.com/MichaelEAyotte/article-workflow-lab/blob/37515456449ec182728ca194ab1570aa61b827a8/LICENSE) and complete commit history remain preserved.

Permissions already granted under MIT continue, including commercial use and redistribution subject to that license's conditions. The same unchanged code remains available from those historical MIT commits. The current offer does not retroactively revoke MIT permissions, impose the new terms on those copies, or create exclusive commercial rights over previously MIT-licensed copies. Preserve the MIT copyright and permission notice when relying on that historical license.

## Source provenance and exclusions

The eight selected functions match private article-tools review commit `a534100d7d299ea5f057bbdb35c18272e4f76d0e`. Original extraction provenance is commit `20905f56e04826b750d1da0dd259d458f27f334a`, followed by the documented block-element word-boundary correction. The utility module was added by Michael E. Ayotte after the website template import. No conflicting notice was found in its file history. Wrappers, tests and fictional examples were prepared with AI assistance. This is not an HTML sanitizer or the full publishing service. [Source provenance and limitations](CODE-REVIEW.md) describe the bounded extraction and rights review.

The source website has separate HTML Codex template and Owl Carousel licenses. No template HTML, vendor implementation or third-party asset is included here. This offer does not cover that website, its templates/assets, client material or article content, and does not relicense third-party material. Product names identify the original project or dependencies and do not imply endorsement. The [notice](NOTICE) identifies the original-material scope.

## Validation scope

The original release checks ran `npm test` (**6 passing tests**) and `npm run demo` successfully on Node 24. No npm runtime or development dependencies are declared. Keep the package's `private` flag: public GitHub visibility does not publish an npm package. This licensing update changes no source logic, tests, examples or workflow.

The GitHub Actions workflow runs standalone tests and the example on `main` and the review branch. It has read-only repository permission, pinned actions, disabled persisted checkout credentials, no production secrets and no deployment step. Actionlint and local Markdown-link checks formed part of the original release verification. Hosted runner and runtime updates remain external dependencies.

The originally fetched reachable history and release changes were checked with Gitleaks and private-address, credential and sensitive-content patterns, alongside Git integrity checks. No finding was identified in that reviewed candidate history. No operational screenshot, binary archive, account payload, private endpoint or client record is bundled. These checks reduce risk; they do not prove every possible sensitive detail is absent.

## Licensing-update verification

Before publication of this update, verify the exact current main and its ancestry, compare `LICENSE` byte-for-byte with the official text, preserve all executable and workflow bytes, run the standalone tests and example, and check documentation links and licensing metadata. After publication, verify the default license, required notice, README, package metadata and preserved historical MIT link. Repository visibility, private production systems and their deployments remain outside this change.
