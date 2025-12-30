import { ImageResponse } from "next/og";

// Configuration de l'image
export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Génération du Favicon
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: "#0a0a0b", // Notre Noir Anthracite
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "8px", // Bord arrondis (Squircle)
          border: "2px solid #00F7FF", // Bordure Cyan Électrique
          fontWeight: 900,
          fontFamily: "sans-serif",
        }}
      >
        N
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
