import React from "react";

const NoTransaction = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <img
        src="https://doss.co.id/_next/static/images/no-cart-37ba3d11f0a9622a12a10ff6df8d8d66.png"
        alt="no transaction"
        className="no-img"
      />

      <div className="no-txt mt-3">Belum ada pesanan nih</div>
      <div className="no-sub-txt">
        Tetap semangat, rejeki nggak akan pergi <br /> asal kamu pantang
        menyerah.
      </div>
    </div>
  );
};

export default NoTransaction;
