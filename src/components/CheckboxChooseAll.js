import React from "react";

const CheckboxChooseAll = () => {
  return (
    <div className="my-3 ms-1 d-flex align-items-center">
      <input id="choose-all" type="checkbox" />
      <label
        htmlFor="choose-all"
        className="ms-2 fw-bold"
        style={{ cursor: "pointer" }}
      >
        Pilih Semua
      </label>
    </div>
  );
};

export default CheckboxChooseAll;
