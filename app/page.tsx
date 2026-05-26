const accent = "#6366f1";

const features = [
  "Real-time CRDT sync",
  "Live multiplayer cursors",
  "Offline-tolerant editing",
  "Export to PNG / SVG",
];

export default function Home() {
  return (
    <main style={{ "--accent": accent } as React.CSSProperties}>
      <span className="pill">
        <span className="dot" /> In development
      </span>
      <h1>collab-canvas</h1>
      <p className="tagline">
        A real-time collaborative whiteboard — CRDT sync, live multiplayer
        cursors, and offline-tolerant editing that merges on reconnect.
      </p>
      <ul className="features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <footer>
        <span>By Jamison Kimminau</span>
        <a href="https://github.com/jkimminau/collab-canvas">View on GitHub →</a>
      </footer>
    </main>
  );
}
