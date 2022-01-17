import React from "react";
import Chip from "@mui/material/Chip";

const ChipComponent = () => {
  return (
    <div className="d-flex chip-container mb-2 pb-2">
      <Chip
        label="Pembayaran Pending"
        variant="outlined"
        className="chip-list"
        onClick={() => console.log("click")}
      />

      <Chip
        label="Menunggu Pembayaran"
        variant="outlined"
        className="chip-list"
        onClick={() => console.log("click")}
      />

      <Chip
        label="Menunggu Approval Finance"
        variant="outlined"
        className="chip-list"
        onClick={() => console.log("click")}
      />
    </div>
  );
};

export default ChipComponent;
