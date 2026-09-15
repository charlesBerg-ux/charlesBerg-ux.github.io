# Parked work

Things that were built, then taken out of the live site. They are here rather than
commented out inside the stylesheet and the pages, because leaving them in place
made it hard to tell what was actually running. Nothing in this file is served to
anyone.

Each entry says what it was, why it came out, and what restoring it needs. The
full history is in git if you want the surrounding context.


## Stylesheet

These came out of `css/styles.css`. None of them matched any element on any page.

### Hero dot-grid background

A measured dot field behind the hero. Removed on 8 July 2026 for a flat-ground look.

```css
/* Dot-grid measured field behind the hero — subtle, engineered.
   PARKED 2026-07-08: hero background patterns removed for a flat-ground iteration.
   Un-comment this block (and .hero::after below) to restore.
.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--hair) 1px, transparent 1.4px);
    background-size: 24px 24px;
    -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0.5), transparent 70%);
    mask-image: linear-gradient(180deg, rgba(0,0,0,0.5), transparent 70%);
    pointer-events: none;
    z-index: 0;
}
*/
```

### Hero column guides

Faint vertical rules making the 12-column grid visible behind the hero. Removed on 8 July 2026 with the dot grid.

```css
/* Delta 1 — hero: faint vertical column guides so the grid is literally visible.
   PARKED 2026-07-08: removed for the flat-ground iteration. Un-comment to restore.
.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background-image: repeating-linear-gradient(
        to right,
        transparent, transparent calc((100% - 11px) / 12 - 1px),
        var(--hair) calc((100% - 11px) / 12 - 1px), var(--hair) calc((100% - 11px) / 12)
    );
    -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0.28), transparent 62%);
    mask-image: linear-gradient(180deg, rgba(0,0,0,0.28), transparent 62%);
}
*/
```

### Hero sign-off line

The line that read "I'm Charles Berg. Solo, senior practice. I read every message myself." Parked on 9 July 2026 because it read out of place in the hero.

```css
.hero-sign {
    margin-top: var(--s6);
    padding-top: var(--s4);
    border-top: 1px solid var(--hair);
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--muted);
}
.hero-sign b { color: var(--ink); font-weight: 600; }
```

### Hero instrument panel, styles

The dark right-hand card showing the Google Home light states. Parked on 8 July 2026 to focus the hero elsewhere. Pairs with the markup below.

```css
/* Hero two-column: copy on the left, a systems "instrument panel" anchoring the
   right column so the grid is used across its full width (not left-set with an
   empty right). Stacks to one column on mobile. Desktop 7/5 split in @900.
   PARKED 2026-07-08 (PRD-v2.4 §9): the hero <aside> is commented out in
   index.html, so these rules are currently DORMANT (match no elements). Kept in
   place so restoring the panel is just un-commenting the HTML. */
.hero-grid { display: grid; grid-template-columns: 1fr; gap: var(--s6); }
.hero-main { min-width: 0; }
.hero-aside {
    min-width: 0;
    align-self: start;
    background: var(--dark);
    border: 1px solid var(--dark-2);
    border-radius: var(--radius);
    padding: var(--s5);
}
.hero-aside .ha-label { font-family: var(--mono); font-size: 0.6875rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--accent-lite); }
.hero-aside .ha-lead { color: #fff; font-size: 1.0625rem; line-height: 1.35; margin-top: var(--s2); max-width: 26ch; }
.hero-aside .ha-diagram { margin-top: var(--s5); display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--dark-2); border: 1px solid var(--dark-2); border-radius: var(--radius); overflow: hidden; }
.hero-aside .ha-state { background: var(--dark); padding: var(--s4); display: flex; flex-direction: column; gap: var(--s2); }
.hero-aside .ha-dot { width: 22px; height: 22px; border-radius: 50%; border: 1px solid #3a4149; }
.hero-aside .ha-name { font-family: var(--mono); font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; }
.hero-aside .ha-desc { font-size: 0.8125rem; color: var(--on-dark-muted); line-height: 1.4; }
.hero-aside .ha-note { margin-top: var(--s4); font-family: var(--mono); font-size: 0.75rem; }
.hero-aside .ha-note a { color: var(--accent-lite); }
.hero-aside .ha-note a:hover { color: #fff; }
```

### Hero instrument panel, desktop split

The 7/5 two-column hero this panel needs above 900px.

```css
/* Hero: Swiss 7/5 two-column — copy left, systems panel right. (Parked; dormant — see note above.) */
    .hero-grid { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: var(--s7); align-items: start; }
```

### Work index comment

The old wording, back when the page had a range strip under the main grid.

```css
/* Range strip — "also shipped", coming case studies. */
/* Work index (Option D): 4-up specialty grid + a quieter range pair below a
   divider. Placeholder thumbs stand in for photos not shot yet. */
.work-grid
```

### Work range strip, styles

A quieter two-up lane under the main work grid, for work outside the accessibility specialty.

```css
.work-range { display: grid; grid-template-columns: 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); max-width: 760px; margin-inline: auto; }
.work-range .case-thumb { aspect-ratio: 21 / 9; }
```

### Work range divider

The small centred label that separated the main grid from the range lane.

```css
.range-divider { text-align: center; font-family: var(--mono); font-size: 0.6875rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin: var(--s8) 0 var(--s5); }
```

### Work range strip, desktop columns

Included a commented-out four-column variant for when a fifth or sixth study lands.

```css
@media (min-width: 620px) { .work-grid { grid-template-columns: repeat(2, 1fr); } .work-range { grid-template-columns: repeat(2, 1fr); } }
/* @media (min-width: 620px) { .work-grid, .work-range { grid-template-columns: repeat(2, 1fr); } }
   @media (min-width: 980px) { .work-grid { grid-template-columns: repeat(4, 1fr); } } */
```

### Contact direct-details list

The mono email/phone list on the contact band, replaced by the two-button action panel.

```css
.contact-direct { margin-top: var(--s5); font-family: var(--mono); font-size: 0.8125rem; color: var(--on-dark-muted); display: grid; gap: var(--s2); }
.contact-direct a { color: var(--accent-lite); }
.contact-direct a:hover { color: #fff; }
.contact-direct .cd-key { color: var(--on-dark-muted); }
```

### Contact form

A full labelled contact form with a honeypot field and a status line. Replaced at v1 launch by a mailto button and a booking link.

```css
/* Form — labelled fields, honest structure, no glow. */
.form-field { margin-bottom: var(--s4); }
.form-field label { display: block; font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.03em; color: var(--on-dark-muted); margin-bottom: var(--s2); text-transform: uppercase; }
.form-field .req { color: var(--accent-lite); text-transform: none; letter-spacing: 0; }
.form-field input,
.form-field select,
.form-field textarea {
    width: 100%;
    background: var(--panel);
    color: var(--ink);
    border: 1px solid var(--field-border);
    border-radius: var(--radius);
    padding: 0.7rem 0.8rem;
    font-family: var(--sans);
    font-size: 1rem;
    min-height: 44px;
}
.form-field textarea { min-height: 120px; resize: vertical; }
.form-field input:focus-visible,
.form-field select:focus-visible,
.form-field textarea:focus-visible { outline-color: var(--accent-lite); }
.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
.form-status { font-family: var(--mono); font-size: 0.8125rem; color: var(--accent-lite); min-height: 1.2em; margin-bottom: var(--s3); }
.form-actions { margin-top: var(--s2); }
```

### Spec table bold value

Styling for bold text inside a spec-table value. No spec table currently uses one.

```css
.spec-val b { font-weight: 600; }
```

### Small figure cap

Capped tall phone screenshots at 340px. Superseded by .fig-col2, which snaps them to the grid instead.

```css
/* Constrain tall phone-screenshot figures so they don't span the full column. */
.fig-sm img { max-width: min(340px, 100%); }
```

### Services table of contents

A boxed index at the top of the Services page. Superseded by the sticky .svc-switch, which is the live one. Keeping both in the stylesheet made it unclear which was in use.

```css
/* Services table of contents — a schematic index. */
.svc-toc { margin-top: var(--s6); border: 1px solid var(--rule); border-radius: var(--radius); }
.svc-toc a { display: grid; grid-template-columns: auto 1fr auto; gap: var(--s4); align-items: baseline; padding: var(--s3) var(--s4); text-decoration: none; color: var(--ink); border-top: 1px solid var(--hair); min-height: 44px; }
.svc-toc a:first-child { border-top: 0; }
.svc-toc a:hover { background: var(--panel-2); }
.svc-toc .t-num { font-family: var(--mono); font-size: 0.75rem; color: var(--accent); }
.svc-toc .t-name { font-weight: 600; font-size: 0.9375rem; }
.svc-toc .t-lead { font-family: var(--mono); font-size: 0.625rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--muted); }
```

### Systems callout, styles

A dark panel explaining systems design. Parked on 13 July 2026: the phone-scale image swam in the wide panel. Pairs with the markup below.

```css
/* systems callout — the Google Home light-pattern system, made legible */
.systems {
    margin-top: var(--s6);
    background: var(--dark);
    color: var(--on-dark);
    border-radius: var(--radius);
    padding: var(--s6) var(--s5);
}
.systems .label { color: var(--accent-lite); }
.systems h3 { color: #fff; font-size: 1.25rem; margin-top: var(--s2); max-width: 26ch; }
.systems p { color: var(--on-dark-muted); margin-top: var(--s4); max-width: 60ch; }
.systems .sys-diagram { margin-top: var(--s5); display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--dark-2); border: 1px solid var(--dark-2); border-radius: var(--radius); overflow: hidden; }
.systems .sys-state { background: var(--dark); padding: var(--s4); display: flex; flex-direction: column; gap: var(--s2); }
.systems .sys-dot { width: 26px; height: 26px; border-radius: 50%; border: 1px solid #3a4149; }
.systems .sys-name { font-family: var(--mono); font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; }
.systems .sys-desc { font-size: 0.8125rem; color: var(--on-dark-muted); }
.systems .sys-figure { margin: var(--s5) 0 0; max-width: min(300px, 100%); }
.systems .sys-figure img { display: block; width: 100%; height: auto; border: 1px solid var(--dark-2); border-radius: var(--radius); }
.systems .sys-figure figcaption { margin-top: var(--s2); font-family: var(--mono); font-size: 0.75rem; color: var(--on-dark-muted); }
```

### Systems callout, desktop columns

Four-across diagram above 900px.

```css
.systems .sys-diagram { grid-template-columns: repeat(4, 1fr); }
```

### Bold statement block, styles

The one oversized dark statement panel, for the co-design stance. Parked on 8 July 2026: it did not translate into the layout needed. Pairs with the markup below.

```css
/* Delta 2 — the ONE sanctioned bold statement block (full-bleed, oversized).
   Two plain sentences for the co-design stance. Dark charcoal field, white
   text = 16:1 (AAA). Restraint is the brand: this is the only oversized moment. */
/* The one bold statement — a dark panel opening the Co-design section.
   PARKED 2026-07-08 (PRD-v2.4 §9): currently commented out in services.html
   because it did not translate into the layout we need. These rules (plus the
   .svc-main .statement full-width break-out and the switcher solid-bg further
   down) are kept DORMANT so restoring is just un-commenting the HTML. */
.statement {
    background: var(--dark);
    color: var(--on-dark);
    border-radius: var(--radius);
    padding: clamp(1.75rem, 4.5vw, 3rem);
    margin-block: var(--s3) var(--s6);
}
.statement-text {
    font-family: var(--sans);
    font-weight: 600;
    color: #fff;
    font-size: clamp(1.9rem, 5vw, 3.25rem);
    line-height: 1.04;
    letter-spacing: -0.03em;
    max-width: 16ch;
}
.statement-note {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--on-dark-muted);
    margin-top: var(--s4);
}
.statement-note a { color: var(--accent-lite); }
.statement-note a:hover { color: #fff; }
```

### Bold statement, desktop break-out

Let the panel break out to the right over the switcher column.

```css
/* (Parked) If the bold statement is restored, it breaks out to the RIGHT to
       span the full content width over the switcher column, text staying at the
       content's left edge. */
    .svc-main .statement {
        margin-right: calc(-232px - var(--gutter));
    }
```

## Markup

These were commented-out blocks inside the pages. Each page now carries a one-line pointer where the block was.

### Hero instrument panel, markup

From `index.html`. Goes back inside the hero .wrap. Restoring it also means wrapping the h1, lede, product-line and CTAs in <div class="hero-grid"><div class="hero-main">…</div> and re-adding the CSS above.

```html
<!-- PARKED (PRD-v2.4 §9, 2026-07-08): hero "systems instrument panel." A dark
                 right-column card rendering the Google Home light-pattern states, so the
                 systems-designer pitch appears in the first screen. Parked at Charles's
                 request to focus elsewhere; a good idea for future exploration.
                 TO RESTORE: wrap the h1/lede/product-line/hero-ctas above in
                 <div class="hero-grid"><div class="hero-main"> … </div>, then re-enable the
                 <aside> below as the grid's second child. The .hero-grid / .hero-aside CSS
                 is kept (dormant) in css/styles.css.
            <aside class="hero-aside" aria-label="Featured system: the Google Home light-pattern language">
                <p class="ha-label">Systems design / Google Home</p>
                <p class="ha-lead">One light-behavior language across 25M+ devices.</p>
                <div class="ha-diagram">
                    <div class="ha-state">
                        <span class="ha-dot" style="background:#2E5AAC;" aria-hidden="true"></span>
                        <span class="ha-name">Listening</span>
                        <span class="ha-desc">Steady, attentive.</span>
                    </div>
                    <div class="ha-state">
                        <span class="ha-dot" style="background:#8FB4EE;" aria-hidden="true"></span>
                        <span class="ha-name">Thinking</span>
                        <span class="ha-desc">A measured pulse.</span>
                    </div>
                    <div class="ha-state">
                        <span class="ha-dot" style="background:#1F7A4D;" aria-hidden="true"></span>
                        <span class="ha-name">Confirmed</span>
                        <span class="ha-desc">A brief settle.</span>
                    </div>
                    <div class="ha-state">
                        <span class="ha-dot" style="background:#3a4149;" aria-hidden="true"></span>
                        <span class="ha-name">Muted</span>
                        <span class="ha-desc">Dimmed and still.</span>
                    </div>
                </div>
                <p class="ha-note"><a href="services.html#ux-design">How the system works &rarr;</a></p>
            </aside>
            -->
```

### Systems callout, markup

From `services.html`. Goes back inside the #ux-design section, before the "Read the Magnifier case study" link. It holds two alternatives, a Magnifier version and a Google Home version; pick one. The Magnifier version points at assets/mag-happypath.gif, which no longer exists; use assets/mag-happypath.mp4 with the video markup used on the Magnifier page.

```html
<!-- PARKED (2026-07-13): the entire "Systems design, defined" dark box is commented
                 out. The phone-scale gif "swam" in the wide panel and the layout needs a rethink;
                 revisit later (logged in PRD-v2.md §11 parking lot). Full markup is preserved below
                 as inert text — the inner comment delimiters were stripped so this single outer
                 comment stays valid. TO RESTORE: cut from <div class="systems on-dark"> to its
                 matching </div>, drop it back in un-commented, and pick ONE visual (the Magnifier
                 gif version that was live, or the Google Home dot-diagram back-pocket version).

            <div class="systems on-dark">
                <span class="label">Systems design, defined</span>

                MAGNIFIER VERSION (was live):
                <h3>Pixel Magnifier: one control model, built around how low-vision users hold the phone.</h3>
                <p>Systems design does not mean a component library. In Magnifier, every control &mdash; zoom, contrast, color filters, freeze-frame capture &mdash; lives in one thumb-reachable cluster at the bottom of the screen and behaves the same way every time. A low-vision user learns the model once and it holds across every mode. That consistency is the system: a coherent set of behaviors someone can trust without re-learning, which is exactly what accessibility depends on.</p>
                <figure class="sys-figure">
                    <img src="assets/mag-happypath.gif" alt="Screen recording of Pixel Magnifier in use: opening the app, framing text through the camera, and magnifying it with the controls clustered at the bottom of the screen" loading="lazy">
                    <figcaption>Pixel Magnifier, the happy path end to end.</figcaption>
                </figure>

                GOOGLE HOME VERSION (back pocket): to restore, swap the h3 + p above for the two
                below and replace the figure with the diagram.
                <h3>The Google Home light pattern system: one behavioral language across 25M+ devices.</h3>
                <p>Systems design does not mean a component library. On Google Home I designed the light patterns, the coordinated light behaviors that tell you what a device is doing. Listening, thinking, confirming, muted. The rule set has to read the same on a speaker, a display, and a thermostat, so a person learns the language once and it holds across the fleet. That is a system: a coherent set of behaviors, honest across every surface.</p>
                <div class="sys-diagram">
                    <div class="sys-state"><span class="sys-dot" style="background:#2E5AAC;" aria-hidden="true"></span><span class="sys-name">Listening</span><span class="sys-desc">Steady, attentive. The device is with you.</span></div>
                    <div class="sys-state"><span class="sys-dot" style="background:#8FB4EE;" aria-hidden="true"></span><span class="sys-name">Thinking</span><span class="sys-desc">A measured pulse while it works.</span></div>
                    <div class="sys-state"><span class="sys-dot" style="background:#1F7A4D;" aria-hidden="true"></span><span class="sys-name">Confirmed</span><span class="sys-desc">A brief settle. The action landed.</span></div>
                    <div class="sys-state"><span class="sys-dot" style="background:#3a4149;" aria-hidden="true"></span><span class="sys-name">Muted</span><span class="sys-desc">Dimmed and still. The mic is off.</span></div>
                </div>
            </div>
            -->
```

### Bold statement, markup

From `services.html`. Goes back at the top of the #co-design section.

```html
<!-- PARKED (PRD-v2.4 §9, 2026-07-08): the one bold statement, "Design
                 partners. Not test subjects." Good idea, but it did not translate
                 into the layout we need, so it is hidden for now. TO RESTORE:
                 un-comment the block below (it becomes this section's heading) and
                 remove the <h2> line above. Dormant CSS (.statement, the
                 .svc-main .statement full-width break-out, and the switcher
                 solid-bg) is kept in css/styles.css.
            <div class="statement">
                <h2 class="statement-text">Design partners.<br>Not test subjects.</h2>
                <p class="statement-note">The co-design stance. <a href="#how-co-design">How I run it &rarr;</a></p>
            </div>
            -->
```

### Original Work page lede

From `work.html`. The fuller promise, for when more studies are written up.

```html
<!-- LAUNCH NOTE (2026-07-13): original lede promised the fuller set — restore when
                 Monarch / Google Home / Nest Wifi case studies are built:
            <p class="lede">Six products, built with the people who use them. Three are written up here; three more case studies are on the way. Accessibility and older adults are the through-line, and the range shows the craft travels.</p>
            -->
```

### Monarch case-study card

From `work.html`. Restore when the Monarch study is written. monarch.html already exists.

```html
<!-- LAUNCH: hidden until built (2026-07-13). Restore this card when the Monarch
                     braille case study (monarch.html) is written up.
                <a class="case-card" href="monarch.html">
                    <span class="case-thumb ph"><span class="case-tag">Case study</span><span class="ph-label">Photo coming</span></span>
                    <span class="case-body">
                        <span class="case-name">Monarch braille</span>
                        <span class="case-metric">Braille / tactile</span>
                        <span class="case-desc">A refreshable braille and tactile-graphics device, designed with blind and low-vision readers.</span>
                        <span class="case-more">Case study coming</span>
                    </span>
                </a>
                -->
```

### Work range lane, markup

From `work.html`. Goes back under the main work grid. Needs the range-strip CSS above.

```html
<!-- LAUNCH: "The craft travels beyond accessibility" range lane. Google Home now lives in
                 the four-square grid above. Restore this lane (and reconsider grid vs. range once there
                 are more than four built studies) when nest-wifi.html is written up:
            <p class="range-divider">The craft travels beyond accessibility</p>
            <div class="work-range">
                <a class="case-card" href="nest-wifi.html">
                    <span class="case-thumb ph"><span class="ph-label">Photo coming</span></span>
                    <span class="case-body">
                        <span class="case-name">Nest Wifi</span>
                        <span class="case-metric">Journey design</span>
                        <span class="case-desc">User-journey simplification for a family Wi-Fi setup flow that had to work for everyone in the house.</span>
                        <span class="case-more">Case study coming</span>
                    </span>
                </a>
            </div>
            -->
```
