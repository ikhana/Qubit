import { Container } from "@mui/material";
import React from "react";
import DesktopMenu from "./component/DesktopMenu";
import MobileMenu from "./component/MobileMenu";
import CustomButton from "../CustomBtn";

const LockerMenu = (props) => {
  const menuList = [
    // You can pass 4 parameters for menu title, link, target and customClass
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Features",
      link: "#features",
    },
    {
      title: "Pricing",
      link: "/#pricing",
    },
    {
      title: "Tokenomics",
      link: "/#tokenomics",
    },
    {
      title: <CustomButton>Download</CustomButton>,
      link: "/download",
      p: "0 0px 0 20px"
    },
    {
      title: <CustomButton bgc="transparent" w="190px" b="1px solid #ffffffc8">Become A Provider</CustomButton>,
      link: "/whitelabel",
      p: "0 20px 0 5px"
    },
  ];
  return (
    <Container maxWidth="xl" data-aos="fade-down">
      <DesktopMenu menuList={menuList} />
      <MobileMenu menuList={menuList} />
    </Container>
  );
};

export default LockerMenu;
