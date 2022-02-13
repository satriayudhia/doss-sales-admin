import React from "react";
import { Container } from "react-bootstrap";

import MainContentCard from "./MainContentCard";

const MainContent = () => {
  return (
    <Container fluid className="mt-4 ms-4">
      <div className="main-title-header">Penting Hari Ini</div>
      <div className="main-title-subheader">
        Aktivitas yang perlu kamu pantau untuk jaga kepuasan pembeli
      </div>

      <div className="d-flex flex-wrap mt-2">
        <MainContentCard name="Pesanan baru" total={0} route="/order" />
        <MainContentCard name="Siap dikirim" total={0} route="/order" />
        <MainContentCard name="Pesanan dikomplain" total={0} route="/order" />
        <MainContentCard name="Chat baru" total={0} route="/order" />
        <MainContentCard name="Diskusi baru" total={0} route="/order" />
        <MainContentCard name="Ulasan baru" total={0} route="/order" />
      </div>
    </Container>
  );
};

export default MainContent;
