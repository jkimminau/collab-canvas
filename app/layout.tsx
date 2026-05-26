import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "collab-canvas — Real-time collaborative whiteboard",
  description:
    "A real-time collaborative whiteboard with CRDT sync, live cursors, and offline-tolerant editing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
