import { ImageResponse } from "next/og";

// Dimensions standard
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Génération de l'icône "NE"
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20, // Un peu plus petit pour faire tenir "NE"
          background: "#020617", // Fond Bleu Nuit
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00F7FF", // Lettres Cyan
          borderRadius: "20%",
          fontWeight: 900,
          letterSpacing: "-1px", // Lettres serrées pour le style
        }}
      >
        NE
      </div>
    ),
    { ...size }
  );
}
