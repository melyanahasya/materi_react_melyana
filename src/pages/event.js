import React from 'react'

function event() {

    const handleClick = () => {
        alert("Berhasil!!!");
    };

  return (
    <div>
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default event

