import React, { useState } from "react";

const sampleData = [
  {
    id: 1,
    kegiatan: "Rapat Koordinasi Nasional",
    tanggal: "2026-05-21",
    akun: "zoom1@instansi.go.id",
    petugas: "Admin Zoom"
  },
  {
    id: 2,
    kegiatan: "Webinar Pendidikan",
    tanggal: "2026-05-23",
    akun: "zoom2@instansi.go.id",
    petugas: "Operator Webinar"
  }
];

export default function App() {
  const [data, setData] = useState(sampleData);

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Zoom Dashboard</h2>
        <ul>
          <li>Dashboard</li>
          <li>Peminjaman</li>
          <li>Pendampingan</li>
          <li>Kalender</li>
          <li>Laporan</li>
        </ul>
      </aside>

      <main className="content">
        <header>
          <h1>Sistem Peminjaman & Pendampingan Zoom</h1>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Total Permintaan</h3>
            <p>128</p>
          </div>
          <div className="card">
            <h3>Total Pendampingan</h3>
            <p>54</p>
          </div>
          <div className="card">
            <h3>Akun Aktif</h3>
            <p>12</p>
          </div>
        </section>

        <section className="table-section">
          <h2>Agenda Kegiatan</h2>
          <table>
            <thead>
              <tr>
                <th>Kegiatan</th>
                <th>Tanggal</th>
                <th>Akun Zoom</th>
                <th>Petugas</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.kegiatan}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.akun}</td>
                  <td>{item.petugas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}