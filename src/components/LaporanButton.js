import React from "react";
import { BsDownload } from "react-icons/bs";

const LaporanButton = () => {
  return (
    <div className="laporan-btn d-flex align-items-center">
      <BsDownload className="me-2" /> <span>Download Laporan Penjualan</span>
    </div>
  );
};

export default LaporanButton;
