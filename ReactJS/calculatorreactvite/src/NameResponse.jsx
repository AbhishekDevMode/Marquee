import { useEffect, useState } from "react";

function NameResponse() {
  const [name, setName] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/auth/abhishek")
      .then(async (res) => {
        
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const contentType = res.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
          const data = await res.json();
          return data.message || data.name || data;
        }

        const text = await res.text();
        return text;
      })
      .then((data) => {
        setName(
          typeof data === "string"
            ? data
            : data.message || data.name || "No response",
        );
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load response");
      });
  }, []);

  return (
    <div style={{ marginTop: "20px", color: "#fff", textAlign: "center" }}>
      <h3>Response from backend</h3>
      {error ? <p>{error}</p> : <p>{name}</p>}
    </div>
  );
}

export default NameResponse;
