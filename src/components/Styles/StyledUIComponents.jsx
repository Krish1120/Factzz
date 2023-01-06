import styled, { keyframes, css } from "styled-components";
import { Avatar, Divider, IconButton, Input } from "@mui/material";

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

export const MainWrapper = styled.div`
  position: relative;
`;

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

export const BottomNavbar = styled.div`
  position: ${({ position }) => (position ? position : "")};
  bottom: ${({ bottom }) => (bottom ? bottom : "")};
  padding: 1rem 2rem;
  min-width: 100vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "")};
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

export const NavbarLinks = styled.div`
  color: #ccc;
  font-size: 1rem;
  cursor: ${({ cursor }) => (cursor ? cursor : "default")};

  @media screen and (max-width: 470px) {
    margin-bottom: ${({ mb }) => (mb ? mb : "")};
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
`;

export const Image = styled.img`
  src: ${({ src }) => src};
  height: ${({ height }) => (height ? height : "50px")};
  width: ${({ width }) => (width ? width : "50px")};
  margin: 5px;
`;

export const CustomDivider = styled(Divider)`
  && {
    width: ${({ orientation }) => (orientation === "vertical" ? "" : "100%")};
    height: ${({ orientation }) => (orientation === "vertical" ? "1rem" : "")};
    border-color: ${({ color }) => (color ? color : "white")};
    margin: ${({ margin }) => (margin ? margin : "10px")};
  }
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

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bolder;
  color: black;
  cursor: ${({ cursor }) => (cursor ? cursor : "default")};
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
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

export const CustomInput = styled(Input).attrs((props) => ({
  disableUnderline: true,
}))`
  &::placeholder {
    color: grey;
  }
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

export const SearchInput = styled(CustomInput)`
  border: none;
  background-color: #eee;
  width: 25vw;
`;

export const CustomRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioContainer = styled.span`
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
      rgba(120, 35, 183, 1),
      rgba(58, 122, 237, 1)
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
    rgba(120, 35, 183, 1),
    rgba(58, 122, 237, 1)
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

export const DesktopSideNavContainer = styled(Container)`
  position: fixed;
  left: 0;
  width: 6vw;
  height: 100vh;
  padding: 0 1rem;
  margin-top: -10vh;
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
    rgba(120, 35, 183, 1),
    rgba(58, 122, 237, 1)
  );
  padding: 0.4rem 0.5rem;
  transition: all ease-in-out 0.3s;
`;

export const Avatarwrapper = styled(Container)`
  background: ${({ active }) =>
    active
      ? `linear-gradient(
    45deg,
    rgba(120, 35, 183, 1),
    rgba(58, 122, 237, 1)
  )`
      : ""};
  &:hover + span {
    opacity: 1;
  }
  &:hover {
    background-color: #ddd;
  }
  transition: all ease-in-out 0.3s;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const TopNavContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  height: 5vh;
  padding-left: 15vw;
  padding-top: 2rem;
`;

export const UserAvatarContainer = styled(IconButton).attrs((props) => ({
  size: "small",
}))`
  padding: 1px !important;
  background: linear-gradient(white, white) padding-box,
    ${({ bc }) =>
        bc
          ? "linear-gradient(45deg, rgba(120, 35, 183, 1), rgba(58, 122, 237, 1))"
          : "lightgrey"}
      border-box !important;
  border-radius: 50%;
  border: 3px solid transparent !important;
`;

export const UserAvatar = styled(Avatar)`
  height: 35px !important;
  width: 35px !important;
`;
