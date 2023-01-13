import React, { useState } from "react";
import {
  Avatarwrapper,
  Container,
  CustomDivider,
  DesktopSideNavContainer,
  DesktopSideNavIcon,
  IconInfo,
  ImageAvatar,
} from "../Styles/StyledUIComponents";
import logo from "../../assets/images/logo.png";
import HomeIconWhite from "../../assets/images/HomeIconWhite.png";
import HomeIconBlack from "../../assets/images/HomeIconBlack.png";
import CompassWhite from "../../assets/images/CompassWhite.png";
import CompassBlack from "../../assets/images/CompassBlack.png";
import LiveVideoWhite from "../../assets/images/LiveVideoWhite.png";
import LiveVideoBlack from "../../assets/images/LiveVideoBlack.png";
import EcommerceWhite from "../../assets/images/EcommerceWhite.png";
import EcommerceBlack from "../../assets/images/EcommerceBlack.png";
import MessageWhite from "../../assets/images/MessageWhite.png";
import MessageBlack from "../../assets/images/MessageBlack.png";
import BookmarkWhite from "../../assets/images/BookmarkWhite.png";
import BookmarkBlack from "../../assets/images/BookmarkBlack.png";
import DashboardWhite from "../../assets/images/DashboardWhite.png";
import DashboardBlack from "../../assets/images/DashboardBlack.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../redux/ActivePageReducer";
import { useNavigate } from "react-router-dom";
import { setUserAuthentication } from "../../redux/UserReducer";

const DesktopSideNav = () => {
  const { index } = useSelector((state) => state.activePages.activePage);
  const { mode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <DesktopSideNavContainer justify="space-evenly">
      <ImageAvatar src={logo} />
      <CustomDivider />
      <DesktopSideNavIcon>
        <Avatarwrapper
          onClick={() => {
            dispatch(
              setActivePage({
                index: 0,
                screen: "Home",
              })
            );
          }}
          active={index === 0 ? true : false}
        >
          <ImageAvatar
            src={index === 0 || mode === "dark" ? HomeIconWhite : HomeIconBlack}
          />
        </Avatarwrapper>
        <IconInfo>Home</IconInfo>
      </DesktopSideNavIcon>
      <DesktopSideNavIcon>
        <Avatarwrapper
          onClick={() => {
            dispatch(
              setActivePage({
                index: 1,
                screen: "Explore",
              })
            );
          }}
          active={index === 1 ? true : false}
        >
          <ImageAvatar
            src={index === 1 || mode === "dark" ? CompassWhite : CompassBlack}
          />
        </Avatarwrapper>
        <IconInfo>Explore</IconInfo>
      </DesktopSideNavIcon>
      <DesktopSideNavIcon>
        <Avatarwrapper
          onClick={() => {
            dispatch(
              setActivePage({
                index: 2,
                screen: "Live",
              })
            );
          }}
          active={index === 2 ? true : false}
        >
          <ImageAvatar
            src={
              index === 2 || mode === "dark" ? LiveVideoWhite : LiveVideoBlack
            }
            width="20px"
          />
        </Avatarwrapper>
        <IconInfo>Live</IconInfo>
      </DesktopSideNavIcon>
      <DesktopSideNavIcon>
        <Avatarwrapper
          onClick={() => {
            dispatch(
              setActivePage({
                index: 3,
                screen: "Ecommerce",
              })
            );
          }}
          active={index === 3 ? true : false}
        >
          <ImageAvatar
            src={
              index === 3 || mode === "dark" ? EcommerceWhite : EcommerceBlack
            }
            width="20px"
          />
        </Avatarwrapper>
        <IconInfo>Ecommerce</IconInfo>
      </DesktopSideNavIcon>
      <DesktopSideNavIcon>
        <Avatarwrapper
          onClick={() => {
            dispatch(
              setActivePage({
                index: 4,
                screen: "Inbox",
              })
            );
          }}
          active={index === 4 ? true : false}
        >
          <ImageAvatar
            src={index === 4 || mode === "dark" ? MessageWhite : MessageBlack}
          />
        </Avatarwrapper>
        <IconInfo>Inbox</IconInfo>
      </DesktopSideNavIcon>
      <DesktopSideNavIcon>
        <Avatarwrapper
          onClick={() => {
            dispatch(
              setActivePage({
                index: 5,
                screen: "Bookmarks",
              })
            );
          }}
          active={index === 5 ? true : false}
        >
          <ImageAvatar
            src={index === 5 || mode === "dark" ? BookmarkWhite : BookmarkBlack}
            width="20px"
          />
        </Avatarwrapper>
        <IconInfo>Bookmarks</IconInfo>
      </DesktopSideNavIcon>
      <DesktopSideNavIcon>
        <Avatarwrapper
          onClick={() => {
            dispatch(
              setActivePage({
                index: 6,
                screen: "Dashboard",
              })
            );
          }}
          active={index === 6 ? true : false}
        >
          <ImageAvatar
            src={
              index === 6 || mode === "dark" ? DashboardWhite : DashboardBlack
            }
          />
        </Avatarwrapper>
        <IconInfo>Dashboard</IconInfo>
      </DesktopSideNavIcon>
      <CustomDivider />
      <DesktopSideNavIcon>
        <Avatarwrapper
          onClick={() => {
            dispatch(setUserAuthentication({ isAuthenticated: false }));
            navigate("/");
          }}
        >
          <LogoutIcon
            sx={{
              color: mode === "light" ? "black" : "white",
              fontSize: "25px",
            }}
          />
        </Avatarwrapper>
        <IconInfo>Logout</IconInfo>
      </DesktopSideNavIcon>
    </DesktopSideNavContainer>
  );
};

export default DesktopSideNav;
