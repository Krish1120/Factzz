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
} from "../components/Styles/StyledUIComponents";
import backgroundImage from "../assets/images/bg.png";
import globe from "../assets/images/globe.png";
import logo from "../assets/images/logo.png";
import { Divider } from "@mui/material";
import LoginForm from "../components/forms/LoginForm";
import Footer from "../components/footer/Footer";

const Authentication = () => {
  return (
    <BackgroundOverlay imageUrl={backgroundImage}>
      <FormWrapper>
        <FormContainer>
          <Container>
            <Image src={logo} />
            <Title>Factzz</Title>
          </Container>
          <Container width="100%">
            <LoginForm />
          </Container>
          <Container width="80%">
            <CustomDivider margin="20px 10px" />
            <Text mb="10px">Don't have an account yet?</Text>
            <Text mb="10px" color="blue" cursor="pointer">
              Sign Up For Factzz
            </Text>
          </Container>
        </FormContainer>
      </FormWrapper>
      <Footer position="absolute" bottom="0" />
    </BackgroundOverlay>
  );
};

export default Authentication;
