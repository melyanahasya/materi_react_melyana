import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function Data() {
  const [makanan, setMakanan] = useState([]); // State berfungsi untuk menyimpan data sementara

  const getAll = () => {
    axios // axios berfungsi untuk request data melalui http
      .get(`http://localhost:5000/minumans`) // mengambil data dari link tersebut
      .then((res) => {
        setMakanan(res.data);
      })
      .catch((error) => {
        alert("terjadi kesalahan" + error);
      });
  };

  const deleteUser = async (id) => {
    axios
      .delete("http://localhost:5000/minumans/" + id)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
    // getAll();
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanan.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.produk}</td>
              <td>{row.harga}</td>
              <td className="action">
                <a href={"/edit/" + row.id}>
                  <button
                    variant="warning"
                    style={{
                      backgroundColor: "#8EC3B0",
                      border: "none",
                      color: "white",
                    }}
                    className="mx-1"
                  >
                    edit
                  </button>
                </a>
             
                
                <button
                  variant="danger"
                  style={{
                    backgroundColor: "#FC3C3C",
                    border: "none",
                    color: "white",
                  }}
                  className="mx-1"
                 onClick={() => deleteUser(row.id)}
                >
                  hapus
                </button>

                <a href={"/detail/" + row.id}>
                  <button
                    variant="warning"
                    style={{
                      backgroundColor: "#B47B84",
                      border: "none",
                      color: "white",
                    }}
                    className="mx-1"
                  >
                    detail
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    
  );
}

export default Data;
