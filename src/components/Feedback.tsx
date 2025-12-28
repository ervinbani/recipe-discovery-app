export function Spinner() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
    >
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export function ErrorMessage({ message }: { message: string }) {
  return (
    <div
      style={{
        color: "#c00",
        textAlign: "center",
        margin: "2rem 0",
        fontWeight: 600,
      }}
    >
      Errore: {message}
    </div>
  );
}
