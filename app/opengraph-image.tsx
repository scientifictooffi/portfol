import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f4f1ea",
          color: "#1a1918",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#65605a" }}>{profile.shortName}</div>
        <div style={{ fontSize: 46, lineHeight: 1.15, letterSpacing: -2, maxWidth: 1000 }}>{profile.headline}</div>
        <div style={{ fontSize: 26, color: "#65605a" }}>{profile.email}</div>
      </div>
    ),
    size
  );
}
