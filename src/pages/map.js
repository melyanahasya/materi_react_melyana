import React from "react";
import Table from "react-bootstrap/Table";

const makanans = [
  {
    nama: "Soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Mie Ayam",
    harga: 7000,
  },
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
];

//Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => total_harga + makanan.harga, 0);

const Map = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Daftar Makanan</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{width: "20px"}}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.harga}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />

      <h2>Daftar Makanan Dibawah Rp 10.000</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{width: "20px"}}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans.filter((makanan) => makanan.harga < 11000).map((makanan, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.harga}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <h3>Total Harga Semua Makanan: {total_bayar}</h3>
    </div>
  );
};

export default Map;
