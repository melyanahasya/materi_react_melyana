import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Api() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    const getAll = () => {
      axios
        .get("http://fakestoreapi.com/minumans")
        .then((response) => {
          setProduk(response.produk);
        })
        .catch((error) => {
          alert("terjadi kesalahan sir" + error);
        });
    };
    getAll();
  }, []);

  return <div style={{ pading: "50px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            {/* <th>Aksi</th> */}
          </tr>
        </thead>
        <tbody>
          {produk.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.produk}</td>
              <td>{row.harga}</td>
              {/* <td className="action">
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
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
  </div>;
}

export default Api;
