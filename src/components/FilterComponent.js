import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { Cascader, DatePicker } from "antd";

const options = [
  {
    value: "Tipe Pesanan",
    label: "Tipe Pesanan",
    children: [
      {
        value: "Ambil di Toko",
        label: "Ambil di Toko",
      },
      {
        value: "Pengiriman via Kurir",
        label: "Pengiriman via Kurir",
      },
    ],
  },
  {
    value: "Kurir",
    label: "Kurir",
    children: [
      {
        value: "SiCepat",
        label: "SiCepat",
      },
      {
        value: "Lainnya",
        label: "Lainnya",
      },
    ],
  },
  {
    value: "Label",
    label: "Label",
    children: [
      {
        value: "Belum Dicetak",
        label: "Belum Dicetak",
      },
      {
        value: "Sudah Dicetak",
        label: "Sudah Dicetak",
      },
    ],
  },
];

const optionsSort = [
  {
    value: "Paling Baru",
    label: "Paling Baru",
  },
  {
    value: "Paling Lama",
    label: "Paling Lama",
  },
];

const FilterComponent = () => {
  const { RangePicker } = DatePicker;
  function onChange(value) {
    console.log(value);
  }

  // Just show the latest item.
  function displayRender(label) {
    return label[label.length - 1];
  }

  return (
    <div className="d-flex">
      <InputGroup className="me-3" style={{ height: "40px", flex: 2 }}>
        <FormControl
          placeholder="Cari nama pembeli, produk, nomor resi, atau invoice"
          style={{
            fontSize: "12px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        />
        <InputGroup.Text
          style={{
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <BiSearch size={20} />
        </InputGroup.Text>
      </InputGroup>

      <Cascader
        placeholder="Pilih Filter"
        options={options}
        expandTrigger="hover"
        displayRender={displayRender}
        onChange={onChange}
        className="cascader-class me-3"
      />

      <Cascader
        placeholder="Urut Berdasarkan"
        options={optionsSort}
        displayRender={displayRender}
        onChange={onChange}
        className="cascader-class me-3"
      />

      <RangePicker onChange={onChange} className="cascader-class" />

      {/* <div className="rail-select me-3">
        <div className="select-side">
          <AiOutlineCalendar size={20} color="#0c135f" />
        </div>

        <FormControl as="select">
          <option value="">04 Aug 21 - 02 Nov 21</option>
        </FormControl>
      </div> */}
    </div>
  );
};

export default FilterComponent;
