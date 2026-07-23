# Bergen All-Stars — Session Notes

Last updated: 2026-07-22

This is a working snapshot of where the codebase stands so any future session can pick up
without re-discovering decisions. Treat git history + this doc as the source of truth.

---

## Stack

- **Framework:** Next.js 15 App Router, TypeScript, Tailwind
- **Hosting:** Vercel, auto-deploys from `main` on `JohnKim0523/Bergen-All-Stars` (GitHub)
- **Custom domain:** `www.bergenallstars.com`
- **Pages live in `app/`:** `page.tsx` (home), `programs/`, `coaches/`, `board/`, `donate/`,
  `events/`, `donors/`, `contact/`, plus `layout.tsx`
- **Shared components:** `components/Navbar.tsx`, `components/Footer.tsx`,
  `components/HeroSlideshow.tsx`

## Conventions / hard rules

- **Don't fabricate bios or personal copy.** If only sparse facts are given, leave the bio
  empty (the type fields are optional). Never write "she brings dedication and heart" style
  fluff. See `feedback_no_fabricated_content.md` in memory.
- **Bank account/routing numbers stay off the public site.** Donate page links to email for
  ACH/wire details (decided 2026-04-29 for fraud safety).
- **`check.jpg` is gitignored.** It's a real signed bank check; never commit.
- **`info@bergenallstars.com`** is the org-wide public email; route all "general inquiries"
  there.
- **Image quality:** every Image component on `/coaches`, `/board`, `/programs`, `/events`
  uses `quality={100}` with proper `sizes` props so Next.js doesn't re-compress.
- **Source files:** several existing source images were compressed before reaching the repo
  (hyo-lee, min-jung-shim, hyeon-in-cho, sonya-choi). They look pixelated when displayed
  large; need to be re-uploaded from originals. Don't run images through "optimizers" —
  that's what compressed them in the first place.

## Page-by-page state

### `/` — Home
- Hero slideshow: 9 banners (`/images/banners/banner1..9.jpg`) — full set replaced with
  high-res photos on 2026-07-22 (banner10–12 removed)
- Per-image `position` overrides tuned for the new set: banner1 `center top`,
  banner2 `center 32%`, banner4 `center 70%`, banner7 `center 25%`

### `/programs`
- 4 programs: Swim Team, Equestrian, Bowling Team, Golf Team
- Each program card has a `contact` override (small 4.5rem circular profile photo +
  name + title + optional email + optional phone, all click-through links)
- Per-contact `imagePosition` to fine-tune face cropping in the circle:
  - Min Jung Shim: `center 35%`
  - Sook Lim: `100% top` (anchored hard-right)
  - Sonya Choi: `center 15%`
  - Hyo Lee: default `top`
- Contact type: `name`, `title`, optional `email`, optional `phone`, optional `image`,
  optional `imagePosition`
- Default coordinator (fallback for any program with no contact override) is Chris Kim,
  but no program currently uses the fallback

### `/coaches`
- **Coordinators section:** ONE coordinator only — Chuljin "Chris" Kim, with sourced bio,
  flipImage transform on his photo, rounded-corner image (no gradient frame on his card)
- **Coaches grid (4 coaches, all with sourced bios):**
  Sabrina McClure (Equestrian), Hyeon In Cho (Golf), Hyoun Kim (Swim), John Lee (Swim)
  — Yongkyu Cho removed 2026-07-22 per John
- **Visual hierarchy** (deliberate, per creator feedback that coaches are "the most
  important part"):
  - Coaches: 15rem × 18.5rem rectangular photos, gradient frame (red→navy), red top
    accent stripe, drop shadow, stars flanking the role label
  - Coordinator (Chris): 15rem × 18rem rounded-rectangle photo, NO gradient frame, NO
    border, just rounded corners (`borderRadius: 1rem`), gray-50 bg, `object-cover`
- Hyo Lee, Sook Lim, Sonya Choi, Min Jung Shim are NOT in the coaches grid — they only
  appear as program contacts on `/programs`

### `/board`
- Compact 3-column grid (was a tall horizontal-card list; shrunk per creator's request
  "we need to highlight the coaches the most")
- 5 members with small 4.5rem circular photos: Judy Shin, Eunjung Kim, Ji Sun Kim,
  Eunyoung Lee, Min Jung Shim
- Judy Shin labeled "Board Member" (not "Board President")
- Min Jung Shim's board photo references `/images/board/minjung-shim.jpg` (different
  from her coordinator/program-contact photo at `/images/coordinators/min-jung-shim.jpg`)
- Min Jung Shim is also the Swim Team contact on `/programs`

### `/donate`
- Three giving paths:
  1. **Zelle** — QR code image (`/public/images/zelle-qr.png`, 605×466). The QR encodes
     recipient info; no email handle is displayed publicly anymore.
  2. **Mail a Check** — payable-to + mailing address (40 Stevenson Lane, Upper Saddle
     River, NJ 07458)
  3. **ACH / Wire** — "Email us for ACH / wire details" link (mailto with prefilled
     subject). Bank routing/account numbers are NOT on the public page — fraud risk
     decision on 2026-04-29.
- Email fallback at the bottom for general donation questions
- Footer also lists EIN: 0451042476

### `/events`
- All spring/summer 2026 events removed on 2026-07-22 (already passed). 3 upcoming
  events in date-ascending order:
  1. **2026 North Golf Regional** — Sept 12, 2026, Plainfield West 9, Edison NJ
     (`fall-north-regional-golf-event.jpg`)
  2. **Fall Games – Golf** — Oct 24, 2026, Mountain View Golf Course, Ewing NJ
     (`fall-golf-event.jpg` — source photo was cropped 80px from top to center the
     athletes; zip left off address because sonj.org shows a typo "8627")
  3. **Fall Games – Equestrian** — Oct 24, 2026, Remote Competition / Virtual
     (`fall-equestrain-event.jpg` — note misspelled filename, matches what's on disk)
  All three link to their sonj.org event pages. Category label: golf regional =
  "Regional Competition", both Fall Games = "State Competition".
- Event type supports: `link`, `linkLabel`, `imageWidth`, `imageHeight`, `imagePositions`,
  `imageTransforms` (CSS transform per image, side layout — added 2026-07-22, currently
  unused), `cardMaxWidth`, `cropHeight`, `fullImage`. See `app/events/page.tsx`.
- Side-layout image container has `overflow-hidden` so transforms can't bleed over text.
- Old event photos (bocce-event, swim-event, walkathon, golf-event, summer-games-2026)
  remain in `public/images/events/` for reuse.
- Stacked single-image rendering branches:
  - With `cropHeight`: panoramic strip (`object-cover`, image edge-to-edge, vertical
    cropping per `imagePositions`)
  - Without `cropHeight`: image at natural aspect, full card width (`w-full h-auto`)
- Multi-image stacked: 5fr/7fr asymmetric grid, `object-cover`, 22rem tall

### `/donors`
- Silver ($1,000+) tier: added "Sung Yim and Shirley Yim" and "Jennifer Chiu" on
  2026-07-22 (Yims grouped as one entry, matching "Paul Kim and Clare Kim" style)

### `/contact`
- Email + address. Stable.

### Footer (every page)
- Address, `info@bergenallstars.com`, **Instagram link** (`@bergenallstarsteam` →
  `https://www.instagram.com/bergenallstarsteam`), EIN

## People — current canonical info

**Coordinator (single, on `/coaches`):**
- Chuljin "Chris" Kim — `info@bergenallstars.com` — sourced bio. Photo flipped horizontally
  via `flipImage: true` on his coordinator entry.

**Coaches (in `/coaches` grid, all with sourced bios):**
- Sabrina McClure — Equestrian
- Hyeon In Cho — Golf
- Hyoun Kim — Swim
- John Lee — Swim

**Program contacts (only on `/programs`):**
- Swim → **Min Jung Shim**, Assistant LTP Coordinator —
  `mjshim612@gmail.com`, `646-341-3732`
- Equestrian → **Sook Lim**, Coach — `sook@thelims.com`, `201-741-6967`
- Bowling → **Sonya Choi**, Coach — `sonyachoi@gmail.com`, `201-233-0952`
- Golf → **Hyo Lee**, Head Coach — `deb.lee115@gmail.com`, `(201) 394-2641`

**Board (on `/board`):**
- Judy Shin (Board Member, not President)
- Eunjung Kim, Ji Sun Kim, Eunyoung Lee, Min Jung Shim

## Donation specifics (memory only — NOT in repo)

- Bank: Hanmi Bank, account in name "Bergen All-Stars, A NJ Nonprofit Corporation"
- Public site shows Zelle QR + check-by-mail; routing/account is gated behind a mailto
- See `~/.claude/projects/...memory/project_donation_info.md` for the routing/account
  numbers if needed for a private donor inquiry

## Open follow-ups

1. **Re-upload original-quality source images** for the four pre-compressed coordinator/
   coach photos: `hyo-lee.jpg` (49 KB), `min-jung-shim.jpg` (64 KB),
   `hyeon-in-cho.jpg` (145 KB), `sonya-choi.jpg` (178 KB). Drop the originals into
   `public/images/coordinators/` (or `coaches/`) with the same filenames; don't run
   them through any "image optimizer" tool first.
2. **Walkathon flyer (`walkathon-event.png`)** is no longer referenced from the events
   page. The user said they'd delete the local file; once deleted, the next commit will
   include the deletion.
3. **Confirm Zelle QR is still valid** — if the org changes the registered email/phone at
   Hanmi Bank, the QR will need to be regenerated.
4. **Bios for additional coaches / coordinators** — none promised, but if real bios for
   Hyo Lee, Sook Lim, Sonya Choi, or Min Jung Shim appear, we can add them. **Never
   write fabricated bios.**

## Recent commits

```
2728153 Refine programs page contacts, hide bank info, polish photos
ff8d11d Add donation methods, real program contacts, events, and visual hierarchy
e37df66 Upgrade site metadata for SEO and brand display
4a7435f Add real coach/coordinator content, equestrian program, and events/donors pages
```

There are uncommitted changes in the working tree as of this snapshot (Sonya's email,
events page tuning, Chris's image styling). Run `git status` and commit when ready.

## Quick "where is this knob" reference

| What | Where |
| --- | --- |
| Banner slideshow data + per-image position | `components/HeroSlideshow.tsx` |
| Program data + contact images/positions | `app/programs/page.tsx` `programs[]` |
| Coordinator/Coach data + flipImage | `app/coaches/page.tsx` `coordinators[]` / `coaches[]` |
| Board members + per-photo `imagePosition` | `app/board/page.tsx` `boardMembers[]` |
| Event data + per-image crop knobs | `app/events/page.tsx` `events[]` |
| Footer Instagram link | `components/Footer.tsx` |
| Donate page (Zelle QR, check, ACH mailto) | `app/donate/page.tsx` |
| Image optimization defaults | `next.config.ts` |
