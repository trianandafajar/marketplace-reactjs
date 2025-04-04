import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/provinces")
      .then(response => {
        setProvinces(response.data.data); // sesuaikan dengan struktur respons Laravel kamu
        setLoading(false);
      })
      .catch(error => {
        console.error("Gagal mengambil data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Daftar Provinsi</h1>
        {loading ? (
          <p>Memuat data...</p>
        ) : (
          <ul>
            {provinces.map((province) => (
              <li key={province.id}>{province.name}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
