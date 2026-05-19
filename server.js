const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let data = [
  {
    id: 1,
    kegiatan: "Rapat Koordinasi Nasional",
    tanggal: "2026-05-21",
    akun: "zoom1@instansi.go.id",
    petugas: "Admin Zoom"
  }
];

app.get("/api/events", (req, res) => {
  res.json(data);
});

app.post("/api/events", (req, res) => {
  const newItem = {
    id: Date.now(),
    ...req.body
  };

  data.push(newItem);
  res.json(newItem);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});