import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      style={{
        marginBottom: "1.5rem",
        background: "#eee",
        border: "none",
        borderRadius: "6px",
        padding: "0.4rem 1.1rem",
        fontWeight: 500,
        cursor: "pointer",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
      aria-label="Go back"
    >
      <span style={{ fontSize: "1.2em" }} aria-hidden>
        ←
      </span>
      <span>Back</span>
    </button>
  );
}
