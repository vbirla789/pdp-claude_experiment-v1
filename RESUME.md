# PDP Redesign — Resume Guide

## Status
- ✅ Next.js 16 + React 19 + Tailwind 4 + TS scaffolded (App Router, Turbopack)
- ✅ Design tokens extracted from Figma → `app/globals.css`
- ⏳ PDP components not built yet
- ⏳ Image assets not exported

## Figma source
- File key: `xPr9Ln37JGSBGvNtrsyD0y`
- Root node: `12357:153332`
- URL: https://www.figma.com/design/xPr9Ln37JGSBGvNtrsyD0y/PDP-Redesign?node-id=12357-153332

## Run locally
```bash
cd ~/Documents/pdp-redesign
npm run dev
```
Open http://localhost:3000

## Resume prompt for next Claude Code session
Open a new session in `~/Documents/pdp-redesign` and paste:

> Resume the PDP build. Tokens are in `app/globals.css`. Figma file `xPr9Ln37JGSBGvNtrsyD0y`, root `12357:153332`. The root is too big for one `get_design_context` call — use `get_metadata` first to get child node IDs, then fetch sections one at a time. Build in this order: status/nav → hero → product card → in-this-combo → delivery → free gifts → sticky CTA. For each section: fetch design context, write component to `app/components/`, pull asset URLs into `public/assets/`, run dev server, screenshot + diff against Figma, fix drift before moving on. Read `AGENTS.md` and Next 16 docs in `node_modules/next/dist/docs/` first.

## Tips
- Add **Figtree** font via `next/font/google` in `app/layout.tsx`
- One section per turn (Figma API times out on large nodes)
- Don't refetch tokens — already in `globals.css`
