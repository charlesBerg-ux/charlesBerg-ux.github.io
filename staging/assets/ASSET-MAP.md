# Asset map — sanitized names

Copied from github.com/charlesBerg-ux/charlesBerg-ux.github.io (assets2025 + monarch),
renamed to web-friendly names (lowercase, hyphens, no spaces/special chars).
Three large source GIFs are gitignored (kept on disk for regeneration, not committed):
`magnifier/maggifsmaller2.gif`, `simpleview/simpleview.gif`, and `mag-happypath.gif`. The site
ships the converted `.mp4` (+ `.poster.jpg`) for each instead — see `js/video.js`.
(`magnifier/lshappypath.gif` was removed 2026-08-05: a byte-identical duplicate of
`mag-happypath.gif`, referenced by nothing and shipped nowhere.)

| sanitized path | original |
|---|---|
| `guidedstep/hero.png` | `GuidedStep/!hero.png` |
| `guidedstep/00.png` | `GuidedStep/00.png` |
| `guidedstep/01.png` | `GuidedStep/01.png` |
| `guidedstep/30.png` | `GuidedStep/30.png` |
| `guidedstep/uxrpic.jpg` | `GuidedStep/UXRPic.jpg` |
| `guidedstep/uxrpic2.jpg` | `GuidedStep/UXRPic2.jpg` |
| `guidedstep/settingsmain.png` | `GuidedStep/settingsMain.png` |
| `magnifier/hero.png` | `Magnifier/!Hero.png` |
| `magnifier/2nd-instance-1.png` | `Magnifier/2nd instance 1.png` |
| `magnifier/2nd-instance.png` | `Magnifier/2nd instance.png` |
| `magnifier/brightness.png` | `Magnifier/Brightness.png` |
| `magnifier/capture-view-1.png` | `Magnifier/Capture view-1.png` |
| `magnifier/capture-view.png` | `Magnifier/Capture view.png` |
| `magnifier/contrast.png` | `Magnifier/Contrast.png` |
| `magnifier/default.png` | `Magnifier/Default.png` |
| `magnifier/filter-selected.png` | `Magnifier/Filter selected.png` |
| `magnifier/filters.png` | `Magnifier/Filters.png` |
| `magnifier/live-view.png` | `Magnifier/Live View.png` |
| `magnifier/loading.png` | `Magnifier/Loading.png` |
| `magnifier/prompt-populating.png` | `Magnifier/Prompt populating.png` |
| `magnifier/prompt.png` | `Magnifier/Prompt.png` |
| `magnifier/rejectedconcept0.png` | `Magnifier/RejectedConcept0.png` |
| `magnifier/rejectedconcept1.png` | `Magnifier/RejectedConcept1.png` |
| `magnifier/result.png` | `Magnifier/Result.png` |
| `magnifier/extrememag.png` | `Magnifier/extremeMag.png` |
| `magnifier/maggifsmaller2.gif` | `Magnifier/maggifsmaller2.gif` |
| `magnifier/v1.png` | `Magnifier/v1.png` |
| `monarch/current-conditions.pdf` | `Monarch/current-conditions.pdf` |
| `monarch/current-plus-4-hours.pdf` | `Monarch/current-plus-4-hours.pdf` |
| `monarch/menu-chooser.pdf` | `Monarch/menu-chooser.pdf` |
| `resumes/charlesbergresume.pdf` | `Resumes/CharlesBergResume.pdf` |
| `resumes/charlesbergresume-feb2025g.pdf` | `Resumes/CharlesBergResume_feb2025g.pdf` |
| `resumes/charlesbergresume-nov2025.pdf` | `Resumes/CharlesBergResume_nov2025.pdf` |
| `resumes/charlesbergresume-oct2025.pdf` | `Resumes/CharlesBergResume_oct2025.pdf` |
| `simpleview/screen0.png` | `SimpleView/!screen0.png` |
| `simpleview/screen-1-2x2-1filled.png` | `SimpleView/**Screen -1 2x2 1filled.png` |
| `simpleview/100.png` | `SimpleView/100.png` |
| `simpleview/101.png` | `SimpleView/101.png` |
| `simpleview/203.png` | `SimpleView/203.png` |
| `simpleview/screen-1-2x2-empty.png` | `SimpleView/Screen -1 2x2 empty.png` |
| `simpleview/simpleview.gif` | `SimpleView/SimpleView.gif` |
| `simpleview/userresearch.jpg` | `SimpleView/UserResearch.jpg` |
| `simpleview/after.png` | `SimpleView/after.png` |
| `simpleview/before.jpg` | `SimpleView/before.jpg` |
| `simpleview/screen0nb.png` | `SimpleView/screen0nb.png` |
| `simpleview/simpleviewsettings.png` | `SimpleView/simpleviewsettings.png` |

## Inclusion Impact membership logo — `inclusion-impact/`

Added 2026-09-08 for the "Member of Inclusion Impact" stamp in the site footer. These are not
Charles's own artwork: they belong to Inclusion Impact Accessibility (inclusionimpact.co), used
here to show membership.

| file | size | what it is |
|---|---|---|
| `inclusion-impact/inclusion-impact-logo.png` | 425 × 81 | The whole logo — icon plus the words "Inclusion Impact Accessibility". |
| `inclusion-impact/inclusion-impact-mark.png` | 78 × 55 | Only the three-people icon, cut out of the same file. |

Source: `https://inclusionimpact.co/wp-content/themes/inclusion-impact/assets/InclusionImpact-logo.png`
(446 × 91, downloaded 2026-09-08). This is sharper than the copy Charles was sent
(`Inclusion-Impact-Logo-Pollok-sm-sm.png`, 315 × 65), so it is the one used.

Two changes were made, and nothing else. The white box behind the logo was removed, so both files
are see-through PNGs that sit on any colour without a pale rectangle. Empty edges were cropped off,
so spacing is set by the page rather than by padding inside the picture. Their colours, shapes and
proportions are untouched — the logo was not redrawn.

Note for anyone placing these: the logo's figures are black and its type is mid-blue, and both
disappear against the near-black footer. On a dark background the full logo needs a light plate
behind it. See `footer-inclusion-impact.html` at the repo root for the three footer treatments.
