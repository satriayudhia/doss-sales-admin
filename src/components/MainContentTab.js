import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import LaporanButton from "./LaporanButton";
import FilterComponent from "./FilterComponent";
import ChipComponent from "./ChipComponent";
import ChipDelivery from "./ChipDelivery";
import ChipComplaint from "./ChipComplaint";
import { TabPanel, a11yProps } from "./TabPanel";
import CheckboxChooseAll from "./CheckboxChooseAll";
import CardListContent from "./CardListContent";
import CardListDelivery from "./CardListDelivery";
import CardListOnDelivery from "./CardListOnDelivery";
import NoTransaction from "./NoTransaction";

const MainContentTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="mt-4 ms-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="main-tab-header mb-2">Daftar Pesanan</div>
        <LaporanButton />
      </div>

      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: "0px 4px 20px 0 rgba(215, 217, 226, 0.46)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="Semua Pesanan"
            {...a11yProps(0)}
            className="main-single-tab"
          />
          <Tab
            label="Pesanan Baru"
            {...a11yProps(1)}
            className="main-single-tab"
          />
          <Tab
            label="Siap Dikirim"
            {...a11yProps(2)}
            className="main-single-tab"
          />
          <Tab
            label="Dalam Pengiriman"
            {...a11yProps(3)}
            className="main-single-tab"
          />
          <Tab
            label="Dikomplain"
            {...a11yProps(4)}
            className="main-single-tab"
          />
          <Tab
            label="Pesanan Selesai"
            {...a11yProps(5)}
            className="main-single-tab"
          />
          <Tab
            label="Dibatalkan"
            {...a11yProps(6)}
            className="main-single-tab"
          />
        </Tabs>

        <TabPanel value={value} index={0} className="main-tab-panel">
          <FilterComponent />
        </TabPanel>
        <TabPanel value={value} index={1} className="main-tab-panel">
          <ChipComponent />
          <FilterComponent />
        </TabPanel>
        <TabPanel value={value} index={2} className="main-tab-panel">
          <ChipDelivery />
          <FilterComponent />
        </TabPanel>
        <TabPanel value={value} index={3} className="main-tab-panel">
          <FilterComponent />
        </TabPanel>
        <TabPanel value={value} index={4} className="main-tab-panel">
          <ChipComplaint />
          <FilterComponent />
        </TabPanel>
        <TabPanel value={value} index={5} className="main-tab-panel">
          <FilterComponent />
        </TabPanel>
        <TabPanel value={value} index={6} className="main-tab-panel">
          <FilterComponent />
        </TabPanel>
      </Box>

      {value < 4 && <CheckboxChooseAll />}

      <div>
        {value === 0 && (
          <>
            <CardListContent />
            <CardListDelivery />
            <CardListOnDelivery />
          </>
        )}
        {value === 1 && <CardListContent />}
        {value === 2 && <CardListDelivery />}
        {value === 3 && <CardListOnDelivery />}
        {value === 4 && <NoTransaction />}
      </div>
    </Container>
  );
};

export default MainContentTab;
