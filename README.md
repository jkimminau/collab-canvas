# collab-canvas

A real-time collaborative whiteboard for sketching, diagramming, and visual brainstorming. Built to demonstrate end-to-end ownership of a multiplayer frontend system — CRDTs, presence, optimistic UI, and offline-tolerant sync.

## Status

Pre-development. Scope and architecture defined; implementation in progress.

## Why this exists

Real-time multiplayer is one of the harder corners of frontend work. This project is a deliberate exercise in shipping it end-to-end: CRDT-based document state, sub-100ms multiplayer cursors, conflict-free offline edits, and a canvas renderer that holds 60fps under load.

## Planned stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | Fast iteration, clean Vercel deploy |
| Realtime | Y.js + y-websocket | Mature CRDT ecosystem, documented patterns |
| Canvas | HTML5 Canvas (custom renderer) | Performance over SVG at this density |
| Server | Bun + WebSockets | Native WS, faster cold starts than Node |
| Persistence | Postgres (Neon) | Document snapshots + metadata |
| Presence | Redis pub/sub | Cursor/selection broadcast across WS instances |
| Auth | Clerk | Sufficient for a portfolio scope |
| Deploy | Vercel (web) + Fly.io (WS) | Standard split |

## Planned features

- Pen, shape, text, and image primitives
- Real-time sync via Y.js (works offline, merges on reconnect)
- Live cursors, selections, and user presence
- Room-based access with shareable links
- Multi-user undo/redo (Y.UndoManager)
- Export to PNG/SVG

## Roadmap

- [ ] Solo canvas with persistence
- [ ] Y.js sync over WebSocket
- [ ] Presence layer (cursors, selections)
- [ ] Room sharing + permissions
- [ ] Mobile/touch support
- [ ] Polish (motion, keyboard shortcuts)

---

By [Jamison Kimminau](https://github.com/jkimminau).
