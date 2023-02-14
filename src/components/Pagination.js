import React from "react";

import { InputNumber } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div className="pagination-container p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>Total Data: 10 Data</div>

        <div className="d-flex justify-content-end align-items-center gap-2">
          <div className="d-flex align-items-center gap-2">
            <div>Baris per halaman </div>

            <InputNumber
              min={1}
              max={20}
              defaultValue={10}
              onChange={onChange}
              style={{ width: "55px" }}
            />
          </div>
          <div>1 of 2</div>
          <IoIosArrowBack className="cursor-pointer" />
          <IoIosArrowForward className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
