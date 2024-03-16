import { Container } from "@mui/material";
import React from "react";
import DesktopMenu from "./component/DesktopMenu";
import MobileMenu from "./component/MobileMenu";
import CustomButton from "../CustomBtn";

const LockerMenu = (props) => {
  const menuList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Features",
      link: "#features",
    },
   
    {
      title: "Tokenomics",
      link: "/#tokenomics",
    },
    {
      title: "Roadmap",
      link: "/#roadmap",
    },
    {
      title: <CustomButton bgc="linear-gradient(to right, #76b900, #333333)" w="190px" b="1px solid #ffffffc8">Platform</CustomButton>,
      link: "https://re-du.gitbook.io/qubit/",
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
