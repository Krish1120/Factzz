import React from "react";
import { Modal } from "@mui/material";
import {
  BackDrop,
  Container,
  PostDonateContainer,
  Title3,
  Text2,
  Image,
  Text6,
  Text7,
  RadioContainer,
  CustomRadioInput,
  RadioBackground,
  PaymentMethodsCard,
  ImageAvatar,
  PaymentCardBackground,
  PaymentCardsContainer,
  Text3,
  PaymentDetailsSection,
  PaymentDetailsInput,
  PaymentDetailsMessageInput,
  PrefixedAmounts,
  Text8,
  SubmitButton,
} from "../Styles/StyledUIComponents";
import PostDonateWalletWhite from "../../assets/images/PostDonateWalletWhite.png";
import PostDonateWalletDark from "../../assets/images/PostDonateWalletDark.png";
import Paypal from "../../assets/images/Paypal.png";
import CardsWhite from "../../assets/images/CardsWhite.png";
import CardsDark from "../../assets/images/CardsDark.png";
import AddCardWhite from "../../assets/images/AddCardWhite.png";
import AddCardDark from "../../assets/images/AddCardDark.png";
import CancelWhite from "../../assets/images/CancelWhite.png";
import CancelDark from "../../assets/images/CancelDark.png";
import VisacardLogo from "../../assets/images/VisacardLogo.png";
import MastercardLogo from "../../assets/images/MastercardLogo.png";

const PostDonateModal = ({ donateModal, handleDonateModalClose, mode }) => {
  return (
    <Modal
      open={donateModal}
      onClose={handleDonateModalClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Container direction="row" width="100%" height="100%">
        <BackDrop onClick={handleDonateModalClose} />
        <PostDonateContainer style={{ boxShadow: "none" }}>
          <Container width="60%" height="100%">
            <Container
              height="15%"
              width="100%"
              align="flex-start"
              justify="space-around"
            >
              <Title3>Payment Method</Title3>
              <Text2>
                Leave a tip using your account balance or use some of your
                registred credit card.
              </Text2>
            </Container>
            <PaymentMethodsCard>
              <Container width="100%" direction="row" justify="space-between">
                <Container direction="row">
                  <ImageAvatar
                    src={
                      mode === "light"
                        ? PostDonateWalletWhite
                        : PostDonateWalletDark
                    }
                    width="30px"
                  />
                  <Text7>Wallet</Text7>
                </Container>
                <Container direction="row">
                  <Text7 as="label" htmlFor="wallet">
                    $1200
                  </Text7>
                  <RadioContainer
                    style={{ position: "sticky", boxShadow: "none" }}
                  >
                    <CustomRadioInput type="radio" id="wallet" value="wallet" />
                    <RadioBackground className="checkmark" />
                  </RadioContainer>
                </Container>
              </Container>
            </PaymentMethodsCard>
            <PaymentMethodsCard>
              <Container width="100%" direction="row" justify="space-between">
                <Container direction="row">
                  <ImageAvatar src={Paypal} />
                  <Text7>Paypal Account</Text7>
                </Container>
                <Container direction="row">
                  <Text7 as="label" htmlFor="paypal"></Text7>
                  <RadioContainer
                    style={{ position: "sticky", boxShadow: "none" }}
                  >
                    <CustomRadioInput type="radio" id="paypal" value="paypal" />
                    <RadioBackground className="checkmark" />
                  </RadioContainer>
                </Container>
              </Container>
            </PaymentMethodsCard>
            <PaymentMethodsCard>
              <Container width="100%">
                <Container direction="row" width="100%" justify="flex-start">
                  <ImageAvatar
                    width="30px"
                    src={mode === "light" ? CardsWhite : CardsDark}
                  />
                  <Text7>Credit Cards</Text7>
                </Container>
                <PaymentCardsContainer>
                  <PaymentCardBackground>
                    <Container
                      width="100%"
                      direction="row"
                      justify="space-between"
                      m="50px 0 0 0"
                    >
                      <Text3>5523</Text3>
                      <Text3>••••</Text3>
                      <Text3>••••</Text3>
                      <Text3>4521</Text3>
                    </Container>
                    <Container
                      width="100%"
                      direction="row"
                      justify="space-between"
                      m="25px 0 0 0"
                    >
                      <Text3>Master Card</Text3>
                      <ImageAvatar height="16px" src={MastercardLogo} />
                    </Container>
                  </PaymentCardBackground>
                  <PaymentCardBackground>
                    <Container
                      width="100%"
                      direction="row"
                      justify="space-between"
                      m="50px 0 0 0"
                    >
                      <Text3>5523</Text3>
                      <Text3>••••</Text3>
                      <Text3>••••</Text3>
                      <Text3>4521</Text3>
                    </Container>
                    <Container
                      width="100%"
                      direction="row"
                      justify="space-between"
                      m="25px 0 0 0"
                    >
                      <Text3>Visa Card</Text3>
                      <ImageAvatar height="10px" src={VisacardLogo} />
                    </Container>
                  </PaymentCardBackground>
                  <PaymentCardBackground>
                    <Container
                      width="100%"
                      direction="row"
                      justify="space-between"
                      m="50px 0 0 0"
                    >
                      <Text3>5523</Text3>
                      <Text3>••••</Text3>
                      <Text3>••••</Text3>
                      <Text3>4521</Text3>
                    </Container>
                    <Container
                      width="100%"
                      direction="row"
                      justify="space-between"
                      m="25px 0 0 0"
                    >
                      <Text3>Master Card</Text3>
                      <ImageAvatar height="16px" src={MastercardLogo} />
                    </Container>
                  </PaymentCardBackground>
                </PaymentCardsContainer>
                <Container direction="row" width="100%" justify="flex-start">
                  <ImageAvatar
                    src={mode === "light" ? AddCardWhite : AddCardDark}
                  />
                  <Text2>Add Credit Card</Text2>
                </Container>
              </Container>
            </PaymentMethodsCard>
          </Container>
          <Container width="35%" height="100%">
            <PaymentDetailsSection>
              <Container height="20%" width="100%" direction="row">
                <Container
                  height="100%"
                  width="100%"
                  align="flex-start"
                  justify="space-around"
                >
                  <Title3>Payment Details</Title3>
                  <Text2>
                    Choose or type an amount and let a message to the creator
                  </Text2>
                </Container>
                <ImageAvatar
                  onClick={handleDonateModalClose}
                  style={{ alignSelf: "flex-start" }}
                  src={mode === "light" ? CancelWhite : CancelDark}
                />
              </Container>
              <PaymentDetailsInput themecolor="#b452fa" placeholder="$0" />
              <Container direction="row" width="100%" justify="space-between">
                <PrefixedAmounts>
                  <Text8>$10</Text8>
                </PrefixedAmounts>
                <PrefixedAmounts>
                  <Text8>$20</Text8>
                </PrefixedAmounts>
                <PrefixedAmounts>
                  <Text8>$50</Text8>
                </PrefixedAmounts>
                <PrefixedAmounts>
                  <Text8>$100</Text8>
                </PrefixedAmounts>
              </Container>
              <PaymentDetailsMessageInput
                themecolor={mode === "light" ? "#95AEC7" : "#707070"}
                multiline
                rows={5}
                placeholder="Message"
              />
              <SubmitButton style={{ width: "100%" }}>Send Tip</SubmitButton>
            </PaymentDetailsSection>
          </Container>
        </PostDonateContainer>
      </Container>
    </Modal>
  );
};

export default PostDonateModal;
