import React from "react";

function intro(props) {
  return <div>
    <p> <strong>Nama Saya :</strong> {props.nama}</p>
    <p> <strong>Sekolah : </strong>{props.sekolah}</p>
    <p> <strong>Kelas :</strong> {props.kelas}</p>


    
  </div>;
}

export default intro;


