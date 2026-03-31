import { useState } from "react";
import { searchDocs } from "./api";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchDocs(query);
    setResults(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📄 OCR Document Search</h1>

      <input
        type="text"
        placeholder="Search documents..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((doc) => (
          <li key={doc.id}>
            <strong>{doc.file_name}</strong>
            <p>{doc.content.slice(0, 200)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}