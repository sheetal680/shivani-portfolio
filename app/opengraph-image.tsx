import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shivani Sheetal Palivela — AI Engineer & Founder of Voxinta";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          color: "#f4f4f5",
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "40%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.15)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 56px",
            width: "62%",
            position: "relative",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#7c3aed",
                borderRadius: 10,
                width: 44,
                height: 44,
                color: "#fff",
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              S
            </div>
            <span style={{ color: "#d4d4d8" }}>Shivani Sheetal Palivela</span>
          </div>

          {/* Main text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#a78bfa",
              }}
            >
              AI Engineer · Data Scientist · Entrepreneur
            </span>
            <span
              style={{
                fontSize: 66,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "#f4f4f5",
              }}
            >
              Building AI-powered companies.
            </span>
          </div>

          {/* Footer */}
          <span style={{ color: "#71717a", fontSize: 18 }}>
            Co-Founder &amp; CEO of Voxinta · AI Voice Agents &amp; Chatbots
          </span>
        </div>

        {/* Right image panel */}
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            width: "38%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Shivani Sheetal Palivela"
            src={new URL(
              "/images/profes.jpeg",
              process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
            ).toString()}
            style={{
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 35%",
              width: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #09090b 0%, transparent 40%), linear-gradient(to top, #09090b 0%, transparent 30%)",
              display: "flex",
            }}
          />
          {/* Purple corner badge */}
          <div
            style={{
              position: "absolute",
              bottom: 36,
              right: 36,
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "#7c3aed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            🚀
          </div>
        </div>
      </div>
    ),
    size,
  );
}
