import React from "react";
import {
  BackgroundOverlay,
  BottomNavbar,
  Container,
  CustomDivider,
  FormContainer,
  FormWrapper,
  Image,
  ImageAvatar,
  NavbarLinks,
  Text,
  Title,
} from "../Styles/StyledUIComponents";
import globe from "../../assets/images/globe.png";
import { Divider } from "@mui/material";

const Footer = ({ position, bottom }) => {
  return (
    <BottomNavbar position={position} bottom={bottom}>
      <CustomDivider />
      <Container
        direction="row"
        justify="space-between"
        width="100%"
        wrap="wrap"
      >
        <Container>
          <NavbarLinks mb="8px">Factzz © Copyright 2022</NavbarLinks>
        </Container>
        <Container direction="row" Mjustify="space-around" Mwidth="100%">
          <Container direction="row">
            <ImageAvatar src={globe} height="16px" width="16px" br="50%" />
            <NavbarLinks cursor="pointer">English</NavbarLinks>
          </Container>
          <CustomDivider orientation="vertical" flexItem />
          <NavbarLinks cursor="pointer">Help</NavbarLinks>
          <CustomDivider orientation="vertical" flexItem />
          <NavbarLinks cursor="pointer">About</NavbarLinks>
          <CustomDivider orientation="vertical" flexItem />
          <NavbarLinks cursor="pointer">Contact</NavbarLinks>
        </Container>
        <Container direction="row" Mjustify="space-around" Mwidth="75%">
          <NavbarLinks cursor="pointer">Privacy Policy</NavbarLinks>
          <CustomDivider orientation="vertical" flexItem />
          <NavbarLinks cursor="pointer">Terms of Use</NavbarLinks>
        </Container>
      </Container>
    </BottomNavbar>
  );
};

export default Footer;
