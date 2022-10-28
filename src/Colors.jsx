import React from 'react'

const Colors = ({ colorHex, colorName, color }) => {
  return (
    <>
      <div className="card">
        <p style={{ backgroundColor: color }}></p>
        <div class="container">
          <p>{colorHex}</p>
          <p style={{ fontSize: "0.9rem" }}>{colorName}</p>
        </div>
      </div>
    </>
  )
}

export default Colors