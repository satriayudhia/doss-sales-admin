import React from "react";
import Chip from "@mui/material/Chip";

const ChipComplaint = () => {
  return (
    <div className="d-flex chip-container mb-2 pb-2">
      <Chip
        label="Permintaan Refund"
        variant="outlined"
        className="chip-list"
        onClick={() => console.log("click")}
      />

      <Chip
        label="Sudah di Refund"
        variant="outlined"
        className="chip-list"
        onClick={() => console.log("click")}
      />
    </div>
  );
};

export default ChipComplaint;
