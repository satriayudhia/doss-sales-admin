import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsFillInfoCircleFill, BsPencilSquare } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const CardListContent = () => {
  return (
    <div className="card-list-content mb-3">
      <div className="d-flex justify-content-between px-2 py-1 card-list-top">
        <div
          className="d-flex align-items-center"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <div className="d-flex align-items-center mx-2">
            <input id="new-order" type="checkbox" />
            <label
              htmlFor="new-order"
              className="ms-2 fw-bold"
              style={{ cursor: "pointer" }}
            >
              Pesanan Baru
            </label>
          </div>

          <div className="divider-vertical">|</div>

          <div className="mx-2 invoice-id-txt">XC00000000012341</div>

          <div className="divider-vertical">|</div>

          <div className="mx-2 d-flex align-items-center card-list-cust">
            <FaRegUser className="me-2" /> <span>Andrean Yap</span>
          </div>

          <div className="divider-vertical">|</div>

          <div className="mx-2 d-flex align-items-center card-list-cust">
            <BiTimeFive size={18} className="me-2" />{" "}
            <span>3 Nov 2021, 18:23 WIB</span>
          </div>
        </div>

        <div
          className="d-flex flex-wrap align-items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="card-list-limit-txt me-2">Batas Respons</div>
          <div className="card-list-limit-time">
            <BiTimeFive size={18} className="me-1" />
            <span>23 Jam</span>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="card-list-info mb-3">
          Kurir dan layanan pengiriman untuk pesanan ini tidak dapat diubah
        </div>

        <Row>
          <Col md={4}>
            <div className="d-flex card-list-product">
              <img
                src="https://main.mobile.doss.co.id/storage/uploads/2021/09/medium/GoPro%20Hero%2010%20GoPro%20Hero10%20Black%20(2).webp"
                alt="gopro"
              />
              <div className="ms-3">
                <div className="card-list-product-title">
                  GoPro Hero 10 GoPro Hero10 Black
                </div>
                <div className="card-list-product-sku">PROD0010374</div>
                <div className="card-list-product-price mt-1">1 x 400.000</div>
                <div className="d-flex align-items-center card-list-product-more mt-2">
                  <span className="me-2">Lihat 1 Produk Lainnya</span>{" "}
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="card-list-address-header">Alamat</div>
            <div className="card-list-address-content">
              Andrean (628982727882)
            </div>
            <div className="card-list-address-content">
              Toko Sumber Oli No. 114 A-B Dekat Rel Kereta Kota Pramubulih,
              Sumatera Selatan 31121
            </div>
          </Col>

          <Col md={4}>
            <div className="d-flex align-items-center">
              <div className="card-list-address-header me-2">Kurir</div>
              <div className="card-list-sesuai me-1">Harus Sesuai</div>
              <BsFillInfoCircleFill size={13} color="#6c727c" />
            </div>
            <div className="card-list-address-content mt-1">
              Reguler Package - SiCepat
            </div>

            <div className="d-flex align-items-center mt-3">
              <div className="card-list-address-header me-2">Kode booking</div>
              <div className="card-list-sesuai me-1">Wajib Dicantumkan</div>
              <BsFillInfoCircleFill size={13} color="#6c727c" />
            </div>
            <div className="card-list-address-content fst-italic mt-1">
              Terima pesanan terlebih dahulu
            </div>
          </Col>
        </Row>

        <div className="card-list-info-total mt-3">
          <div className="d-flex align-items-center card-list-total-left">
            <span className="me-1">Total Bayar</span>{" "}
            <BsFillInfoCircleFill size={13} />
          </div>
          <div className="card-list-total-right">Rp. 2.275.000</div>
        </div>
      </div>

      <div className="card-list-bottom px-3 py-2">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center card-list-ask-txt me-4">
            <AiOutlineWhatsApp size={20} />{" "}
            <span className="ms-2">Tanya Pembeli</span>
          </div>

          <div className="d-flex align-items-center card-list-ask-txt me-4">
            <IoDocumentTextOutline size={20} />{" "}
            <span className="ms-2">Status Pesanan</span>
          </div>

          <div className="d-flex align-items-center card-list-ask-txt">
            <BsPencilSquare size={20} />{" "}
            <div className="card-list-note ms-2">
              <input type="text" placeholder="Ketik catatan toko disini" />
              <div className="max-char">0/60</div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="card-list-ask-txt">Tolak pesanan</div>
          <Button
            variant="contained"
            className="card-list-accept-btn ms-2"
            disableElevation
          >
            Terima pesanan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardListContent;
