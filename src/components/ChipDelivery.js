import React from "react";
import Chip from "@mui/material/Chip";

const ChipDelivery = () => {
  return (
    <div className="d-flex chip-container mb-2 pb-2">
      <Chip
        label="Proses Gudang"
        variant="outlined"
        className="chip-list"
        onClick={() => console.log("click")}
      />

      <Chip
        label="Menunggu Dikirim"
        variant="outlined"
        className="chip-list"
        onClick={() => console.log("click")}
      />
    </div>
  );
};

export default ChipDelivery;
