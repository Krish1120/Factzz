import styled, { keyframes, css } from "styled-components";
import {
  Avatar,
  Breadcrumbs,
  Divider,
  IconButton,
  Input,
  MenuItem,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardDesign from "../../assets/images/CardDesign.png";

// Common Styled Components

export const MainWrapper = styled.div`
  position: relative;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 12vw;
  padding: 1rem;
  @media screen and (max-width: 576px) {
    margin-left: 0;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "fit-content")};
  margin: ${({ m }) => (m ? m : "")};
  display: ${({ display }) => (display ? display : "flex")};
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  flex-direction: ${({ direction }) => (direction ? direction : "column")};

  @media screen and (max-width: 576px) {
    flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
    justify-content: ${({ Mjustify }) => (Mjustify ? Mjustify : "center")};
    width: ${({ Mwidth }) => (Mwidth ? Mwidth : "")};
  }
`;

export const Image = styled.img`
  src: ${({ src }) => src};
  height: ${({ height }) => (height ? height : "50px")};
  width: ${({ width }) => (width ? width : "50px")};
  margin: ${({ m }) => (m ? m : "5px")};
`;

export const CustomDivider = styled(Divider)`
  && {
    width: ${({ orientation }) => (orientation === "vertical" ? "" : "100%")};
    height: ${({ orientation }) => (orientation === "vertical" ? "1rem" : "")};
    border-color: ${({ theme }) => theme.DividerColor};
    margin: ${({ margin }) => (margin ? margin : "15px")};
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const ImageAvatar = styled.img`
  src: ${({ src }) => src};
  cursor: ${({ cursor }) => (cursor ? cursor : "default")};
  height: ${({ height }) => (height ? height : "25px")};
  width: ${({ width }) => (width ? width : "25px")};
  border-radius: ${({ br }) => (br ? br : "")};
  margin: 0px 5px;
  animation: ${({ r }) => (r === "forward" ? rotateAnimation : "")};
  animation: ${({ r }) => (r === "backward" ? rotateAnimationReverse : "")};
  animation-fill-mode: forwards;
  transition: all ease-in-out 0.3s;
  @media screen and (max-width: 576px) {
    display: ${({ Mdisplay }) => (Mdisplay ? Mdisplay : "block")};
    height: ${({ Mheight }) => (Mheight ? Mheight : "20px")};
    width: ${({ Mwidth }) => (Mwidth ? Mwidth : "20px")};
  }
`;

export const Avatarwrapper = styled(Container)`
  background: ${({ active }) =>
    active
      ? `linear-gradient(
    45deg,
    rgba(58, 122, 237, 1),
    rgba(120, 35, 183, 1)
  )`
      : ""};
  &:hover + span {
    opacity: 1;
  }
  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
  }
  transition: all ease-in-out 0.3s;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const UserAvatarContainer = styled(IconButton)`
  margin: ${({ m }) => (m ? m : "")};
  position: relative;
  padding: 1px !important;
  background: ${({ theme, trending }) =>
      `linear-gradient(${
        trending
          ? "#252849,#252849"
          : `${theme.avatarPaddingColor}, ${theme.avatarPaddingColor}`
      }) padding-box`},
    ${({ bc, theme, trending }) =>
        bc
          ? `${
              trending
                ? "linear-gradient(#404573,#404573)"
                : "linear-gradient(45deg,rgba(58, 122, 237, 1),rgba(120, 35, 183, 1))"
            }`
          : `${
              trending
                ? "linear-gradient(#404573,#404573)"
                : theme.avatarBorderColor
            }`}
      border-box !important;
  border-radius: 50%;
  border: 3px solid transparent !important;
  @media screen and (max-width: 576px) {
    height: ${({ Mheight }) => (Mheight ? Mheight : "auto")};
    width: ${({ Mwidth }) => (Mwidth ? Mwidth : "auto")};
  }
`;

export const UserAvatar = styled(Avatar)`
  height: ${({ height }) => (height ? height : "35px !important")};
  width: ${({ width }) => (width ? width : "35px !important")};
  @media screen and (max-width: 576px) {
    height: ${({ Mheight }) => (Mheight ? Mheight : "40px")};
    width: ${({ Mwidth }) => (Mwidth ? Mwidth : "40px")};
  }
`;

export const UserAvatarHelper = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
  margin-top: 5px;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.text};
  cursor: ${({ cursor }) => (cursor ? cursor : "default")};
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const Title2 = styled.span`
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
`;

export const Title3 = styled.span`
  font-size: ${({ size }) => (size ? size : "1rem")};
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const Text = styled.span`
  display: block;
  position: relative;
  font-size: 1rem;
  color: ${({ color }) => (color ? color : "black")};
  cursor: ${({ cursor }) => (cursor ? cursor : "default")};
  margin: ${({ m }) => (m ? m : "")};
  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

export const Text2 = styled.span`
  font-size: ${({ size }) => (size ? size : "1.1rem")};
  color: ${({ theme }) => theme.Text2};
  margin-right: 10px;
`;

export const Text3 = styled.span`
  font-size: 0.85rem;
  color: white;
`;

export const Text4 = styled.span`
  font-size: 0.9rem;
  color: #2d2de3;
`;

export const Text5 = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.PostCountsText};
`;

export const Text6 = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
  margin-left: 5px;
`;
export const Text7 = styled(Text6)`
  font-size: 1rem;
  position: relative;
  margin-right: 10px;
`;

export const Text8 = styled.span`
  color: #7823b7;
`;

// Authentication Styled Components

export const BackgroundOverlay = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(37, 40, 73, 0.7),
      rgba(37, 40, 73, 0.7)
    ),
    url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FormContainer = styled(Container)`
  background-color: white;
  border-radius: 10px;
  height: auto;
  width: 30vw;
  padding: 2rem 0px;
  justify-content: space-around;

  @media screen and (max-width: 576px) {
    width: 80vw;
  }
`;

export const FormWrapper = styled(Container)`
  height: 100vh;
  align-items: flex-end;
  padding-right: 10vw;
  @media screen and (max-width: 576px) {
    padding: 0.9rem;
    height: 78.5vh;
    align-items: center;
  }
  @media screen and (max-width: 376px) {
    height: 73vh;
  }
`;

// Forms Styled Components

export const CustomInput = styled(Input).attrs((props) => ({
  disableUnderline: true,
}))`
  padding: 0.5rem;
  width: 85%;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 2px solid lightgrey;
  box-shadow: none;
  margin: 10px 0px;
  outline: none;

  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

export const CustomRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: 10;
`;

export const RadioContainer = styled.span`
  cursor: pointer;
  position: absolute;
  left: -2rem;
  top: -0.2rem;
  height: 1.5rem;
  width: 1.5rem;
  background-color: white;
  box-shadow: 0px 0px 5px grey;
  border-radius: 50%;
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  & input:checked ~ .checkmark {
    background: linear-gradient(
      45deg,
      rgba(58, 122, 237, 1),
      rgba(120, 35, 183, 1)
    );
  }
  @media screen and (max-width: 576px) {
    left: -1.5rem;
    height: 1.2rem;
    width: 1.2rem;
  }
`;

export const RadioBackground = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 1rem;
  width: 1rem;
  background-color: white;
  border-radius: 50%;
  @media screen and (max-width: 576px) {
    height: 0.8rem;
    width: 0.8rem;
  }
`;

export const SubmitButton = styled.button`
  color: white;
  padding: 0.7rem;
  width: 85%;
  font-size: 1.2rem;
  border-radius: 10px;
  margin: 10px 0px;
  background: linear-gradient(
    45deg,
    rgba(58, 122, 237, 1),
    rgba(120, 35, 183, 1)
  );
  border: none;
  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
    width: 90%;
  }
`;

export const ErrorMessages = styled.span`
  color: #ff4343;
  width: 80%;
`;

// Footer Styled Components

export const BottomNavbar = styled.div`
  position: ${({ position }) => (position ? position : "")};
  bottom: ${({ bottom }) => (bottom ? bottom : "")};
  padding: 1rem 2rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    padding: 1rem;
  }
`;

export const NavbarLinks = styled.div`
  color: #aaa;
  font-size: 1rem;
  cursor: ${({ cursor }) => (cursor ? cursor : "default")};

  @media screen and (max-width: 470px) {
    margin-bottom: ${({ mb }) => (mb ? mb : "")};
  }
`;

// Desktop Side Navbar Styled Components

export const DesktopSideNavContainer = styled(Container)`
  position: fixed;
  left: 0;
  width: 6vw;
  height: 100vh;
  padding: 0 1rem;
  margin-top: -14vh;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const DesktopSideNavIcon = styled(Container)`
  flex-direction: row;
  position: relative;
`;

export const IconInfo = styled(Text)`
  position: absolute;
  left: 4vw;
  opacity: 0;
  border-radius: 5px;
  color: white;
  background: linear-gradient(
    45deg,
    rgba(58, 122, 237, 1),
    rgba(120, 35, 183, 1)
  );
  padding: 0.4rem 0.5rem;
  transition: all ease-in-out 0.3s;
`;

// Top Navbar Styled Components

// Menu Animations //
const rotate180 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;
const rotate0 = keyframes`
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const rotateAnimation = (props) =>
  css`
    ${rotate180} 0.3s linear;
  `;

const rotateAnimationReverse = (props) =>
  css`
    ${rotate0} 0.3s linear;
  `;

export const TopNavWrapper = styled(Container)`
  padding-left: 10vw;
  padding-top: 1rem;
  @media screen and (max-width: 576px) {
    padding: 0.5rem 0;
    border-bottom: ${({ theme }) => `1px solid ${theme.cardBorderColor}`};
    border-radius: 0 0 20px 20px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 20;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

export const TopNavContainer = styled(Container)`
  direction: row;
  justify-content: space-between;
  width: 95%;
`;

export const TopNavRightContentSection = styled(Container)`
  width: 20%;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 576px) {
    width: 42%;
  }
`;

export const SearchInput = styled(CustomInput)`
  border: none;
  background-color: ${({ theme }) => theme.inputBackground};
  width: 30vw;
  padding: 0.25rem 1rem;
  & input {
    color: ${({ themecolor }) => themecolor};
  }
  & input::placeholder {
    color: ${({ themecolor }) => themecolor};
  }
  @media screen and (max-width: 576px) {
    display: none !important;
  }
`;

export const LabelHelper = styled.span`
  font-size: 0.7rem;
  margin-left: 5px;
  font-weight: lighter;
  color: grey;
`;

export const CustomMenuItem = styled(MenuItem)`
  padding: 10px !important;
`;

export const Breadcrumb = styled(Breadcrumbs)`
  font-size: 1.3rem;
  color: ${({ theme }) => `${theme.cardBorderColor}!important`};
  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;

// Homepage Styled Components

export const HomePagePostsContainer = styled(Container)`
  width: 60%;
  justify-content: flex-start;
  @media screen and (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Card = styled(Container)`
  justify-content: flex-start;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 85%;
  padding: 1rem;
  border: ${({ theme }) => `1px solid ${theme.cardBorderColor}`};
  border-radius: 15px;
  height: fit-content;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 576px) {
    width: ${({ Mview }) => `100%`};
    padding: ${({ Mview }) => `0 0 1rem 0`};
    border: ${({ Mview }) => `none`};
    border-radius: ${({ Mview }) => `0`};
    margin-top: ${({ Mview }) => `4rem`};
  }
`;

export const TrendingContainer = styled(Container)`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 60vh;
  min-width: 80%;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.TrendingContainerColor};
`;

export const TrendingCard = styled.div`
  width: 100%;
  height: 35%;
  margin: 8px 0px;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PostCard = styled(Container)`
  width: 100%;
  min-height: 72vh;
  padding: 1rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.PostBackground};
  border-radius: 15px;
  box-shadow: ${({ theme }) =>
    theme.PostBackground === "white" ? "0px 0px 5px #ddd" : ""};
  margin-top: 2rem;
  z-index: 10;
  @media screen and (max-width: 576px) {
    box-shadow: none;
    border-radius: 0;
    border-top: ${({ theme }) => `1px solid ${theme.cardBorderColor}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.cardBorderColor}`};
    min-height: 46vh;
    margin: 0;
    padding: 1.5rem 1rem;
  }
`;

export const PostImage = styled.img`
  src: ${({ src }) => src};
  height: 100%;
  width: 100%;
  padding: 0.2rem;
`;

export const MyCarousel = styled(Carousel)`
  & .carousel .carousel-status {
    right: 15px;
    background: linear-gradient(
      0deg,
      rgba(37, 40, 73, 0.7),
      rgba(37, 40, 73, 0.7)
    );
    border-radius: 50px;
  }
`;

export const CommentSection = styled(TrendingContainer)`
  background-color: ${({ theme }) => theme.CommentsContainer};
  height: 72vh;
  margin: 2rem 0 0 0;
  z-index: 10;
  position: relative;
  overflow-y: scroll;
`;

export const BackDrop = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const MessageInput = styled(CustomInput)`
  border: none;
  background-color: ${({ theme }) => theme.inputBackground};
  width: 100%;
  padding: 0.25rem 0 0.25rem 0.5rem;
  & input {
    color: ${({ themecolor }) => themecolor};
  }
  & input::placeholder {
    color: ${({ themecolor }) => themecolor};
  }
`;

export const CommentsPositionWrapper = styled(Container)`
  position: absolute;
  bottom: 30px;
  left: 50%;
`;

export const CommentsPositionContainer = styled(Container)`
  position: fixed;
  background-color: ${({ theme }) => theme.CommentsContainer};
  width: 20%;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
`;

export const Comment = styled(Container)`
  flex-direction: row;
  width: 100%;
  margin: 12px 0;
  justify-content: space-between;
`;

export const PostDonateContainer = styled(PostCard)`
  width: 70%;
  margin-top: 2%;
  flex-direction: row;
  padding: 2rem;
`;

export const PaymentMethodsCard = styled(Card)`
  padding: 0.8rem;
  border-radius: 10px;
  margin-top: 15px;
  width: 100%;
`;

export const PaymentCardsContainer = styled(Container)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  margin: 20px 0;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PaymentCardBackground = styled.div`
  height: 115px;
  min-width: 155px;
  padding: 0 1rem;
  margin-right: 10px;
  background: linear-gradient(0deg, rgba(20, 20, 20, 1), rgba(20, 20, 20, 1)),
    url(${CardDesign});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: color;
  border-radius: 10px;
`;

export const PaymentDetailsSection = styled(TrendingContainer)`
  background-color: ${({ theme }) => theme.TrendingContainerColor};
  height: 100%;
  z-index: 10;
  width: 100%;
  margin-bottom: 0;
  justify-content: space-between;
`;

export const PaymentDetailsInput = styled(CustomInput)`
  background-color: #f8eeff;
  border: 2px solid #7823b7;
  width: 100%;
  & input::placeholder {
    color: ${({ themecolor, theme }) => themecolor};
    opacity: 1;
  }
  & input {
    text-align: center;
    color: ${({ themecolor }) => themecolor};
  }
`;

export const PrefixedAmounts = styled(Container)`
  border: 2px solid #7823b7;
  background-color: #f8eeff;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  width: 10%;
`;

export const PaymentDetailsMessageInput = styled(SearchInput)`
  border: ${({ theme }) => `1px solid ${theme.avatarBorderColor}`};
  width: 100%;
  background-color: ${({ theme }) => theme.TrendingContainerColor};
  & textarea::placeholder {
    color: ${({ themecolor, theme }) => themecolor};
    opacity: 1;
  }
  & textarea {
    color: ${({ themecolor }) => themecolor};
  }
  padding: 1rem !important;
`;
