import {
  Link,
  Drawer,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Avatar,
  IconButton,
  InputAdornment,
  Typography,
  ListItem,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TopNavWrapper,
  TopNavContainer,
  TopNavRightContentSection,
  Title,
  CustomDivider,
  Container,
  Text,
  SearchInput,
  Avatarwrapper,
  ImageAvatar,
  UserAvatarContainer,
  UserAvatar,
  LabelHelper,
  CustomMenuItem,
  Breadcrumb,
} from "../Styles/StyledUIComponents";
import logo from "../../assets/images/logo.png";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import AddPostIcon from "../../assets/images/AddPostIcon.png";
import NotificationIcon from "../../assets/images/NotificationIcon.png";
import NotificationDarkIcon from "../../assets/images/NotificationDarkIcon.png";
import Img1 from "../../assets/images/Img1.png";
import DownArrowIcon from "../../assets/images/DownArrowIcon.png";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import ProfileIcon from "../../assets/images/ProfileIcon.png";
import StoriesIcon from "../../assets/images/StoriesIcon.png";
import ListsIcon from "../../assets/images/ListsIcon.png";
import LiveVideosIcon from "../../assets/images/LiveVideosIcon.png";
import VideoCallsIcon from "../../assets/images/VideoCallsIcon.png";
import AudioCallsIcon from "../../assets/images/AudioCallsIcon.png";
import ReferralsIcon from "../../assets/images/ReferralsIcon.png";
import YourCardsIcon from "../../assets/images/YourCardsIcon.png";
import AddBankIcon from "../../assets/images/AddBankIcon.png";
import WalletIcon from "../../assets/images/WalletIcon.png";
import HelpCenterIcon from "../../assets/images/HelpCenterIcon.png";
import SettingsIcon from "../../assets/images/SettingsIcon.png";
import CircleIcon from "@mui/icons-material/Circle";
import EcommerceBlack from "../../assets/images/EcommerceBlack.png";
import BookmarkBlack from "../../assets/images/BookmarkBlack.png";
import DashboardBlack from "../../assets/images/DashboardBlack.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { setThemeMode } from "../../redux/ThemeModeReducer";
import { isMobile } from "react-device-detect";
import { Inbox, Mail } from "@mui/icons-material";

const TopNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rotateDirection, setRotateDirection] = useState("");
  const [drawerShow, setDrawerShow] = useState(false);
  const open = Boolean(anchorEl);
  const { screen } = useSelector((state) => state.activePages.activePage);
  const { mode } = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IconStyles = {
    fontSize: "2rem",
    color: mode === "light" ? "lightgrey" : "#404573",
    marginLeft: mode === "light" ? "-8px" : "",
    width: mode === "light" ? "1.2em" : "1em",
    "@media (max-width: 576px)": {
      fontSize: mode === "light" ? "1.5rem" : "1.3rem",
    },
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerShow(open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setRotateDirection("forward");
  };
  const handleClose = () => {
    setAnchorEl(null);
    setRotateDirection("backward");
  };

  const changeThemeHandler = () => {
    if (mode === "light") {
      dispatch(setThemeMode("dark"));
    } else {
      dispatch(setThemeMode("light"));
    }
  };
  return (
    <TopNavWrapper>
      <TopNavContainer
        direction="row"
        justify="space-between"
        width="95%"
        Mwidth="100%"
      >
        <Container direction="row">
          <Breadcrumb aria-label="breadcrumb">
            {isMobile ? (
              <ImageAvatar
                height="28px!important"
                width="28px!important"
                src={logo}
              />
            ) : (
              <Title>Factzz</Title>
            )}
            <Text color="grey">{screen}</Text>
          </Breadcrumb>
        </Container>
        <SearchInput
          type="text"
          placeholder="Search..."
          themecolor={mode === "light" ? "#95AEC7" : "#707070"}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon
                sx={{
                  color: mode === "light" ? "#95AEC7" : "#707070",
                }}
              />
            </InputAdornment>
          }
        />
        <TopNavRightContentSection>
          {isMobile ? (
            <SearchIcon
              sx={{
                color: mode === "light" ? "#95AEC7" : "#707070",
                fontSize: "1.6rem",
              }}
            />
          ) : null}
          <ImageAvatar
            height="30px"
            width="30px"
            Mdisplay="none"
            src={AddPostIcon}
          />
          <ImageAvatar
            height="30px"
            width="25px"
            Mheight="25px"
            Mwidth="22px"
            src={mode === "light" ? NotificationIcon : NotificationDarkIcon}
          />
          <Container direction="row" onClick={handleClick}>
            <ImageAvatar
              cursor="pointer"
              height="8px"
              width="15px"
              Mdisplay="none"
              src={DownArrowIcon}
              r={rotateDirection}
            />
            <UserAvatarContainer>
              <UserAvatar onClick={toggleDrawer(true)} src={Img1} />
            </UserAvatarContainer>
          </Container>
          {isMobile ? (
            <Drawer
              anchor={"right"}
              open={drawerShow}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: "65vw", padding: 1 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar src={ProfileIcon} />
                  </ListItemIcon>
                  Profile
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar src={StoriesIcon} />
                  </ListItemIcon>
                  Stories
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar height="15px!important" src={ListsIcon} />
                  </ListItemIcon>
                  Lists
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar height="22px!important" src={EcommerceBlack} />
                  </ListItemIcon>
                  Ecommerce
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar
                      height="20px!important"
                      width="15px!important"
                      src={BookmarkBlack}
                    />
                  </ListItemIcon>
                  Bookmarks
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar src={DashboardBlack} />
                  </ListItemIcon>
                  Dashboard
                </CustomMenuItem>
                <Divider />
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar height="16px!important" src={LiveVideosIcon} />
                  </ListItemIcon>
                  Live Videos
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar height="16px!important" src={VideoCallsIcon} />
                  </ListItemIcon>
                  Video Calls
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar src={AudioCallsIcon} />
                  </ListItemIcon>
                  Audio Calls
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar src={ReferralsIcon} />
                  </ListItemIcon>
                  Referrals
                </CustomMenuItem>
                <Divider />
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar height="16px!important" src={YourCardsIcon} />
                  </ListItemIcon>
                  Your Cards
                  <LabelHelper>(to subscribe)</LabelHelper>
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar src={AddBankIcon} />
                  </ListItemIcon>
                  Add Bank
                  <LabelHelper>(to earn)</LabelHelper>
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar height="18px!important" src={WalletIcon} />
                  </ListItemIcon>
                  Wallet
                  <LabelHelper>(your earnings)</LabelHelper>
                </CustomMenuItem>
                <Divider />
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar src={HelpCenterIcon} />
                  </ListItemIcon>
                  Help Center
                </CustomMenuItem>
                <CustomMenuItem>
                  <ListItemIcon>
                    <ImageAvatar src={SettingsIcon} />
                  </ListItemIcon>
                  Settings
                </CustomMenuItem>
                <CustomMenuItem sx={{ padding: 0, minHeight: "30px" }}>
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    <LogoutIcon
                      sx={{
                        color: "black",
                        fontSize: "20px",
                      }}
                    />
                  </ListItemIcon>
                  Logout
                </CustomMenuItem>
              </Box>
            </Drawer>
          ) : (
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "hidden",
                  border: "1px solid grey",
                  borderRadius: "10px",
                  mt: 1.5,
                  pl: 1,
                  pr: 1,
                  "& .MuiListItemIcon-root": {
                    mr: 2,
                    my: 0.5,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={ProfileIcon} />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={StoriesIcon} />
                </ListItemIcon>
                Stories
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar height="20px" src={ListsIcon} />
                </ListItemIcon>
                Lists
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar height="20px" src={LiveVideosIcon} />
                </ListItemIcon>
                Live Videos
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar height="20px" src={VideoCallsIcon} />
                </ListItemIcon>
                Video Calls
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={AudioCallsIcon} />
                </ListItemIcon>
                Audio Calls
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={ReferralsIcon} />
                </ListItemIcon>
                Referrals
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={YourCardsIcon} />
                </ListItemIcon>
                Your Cards
                <LabelHelper>(to subscribe)</LabelHelper>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={AddBankIcon} />
                </ListItemIcon>
                Add Bank
                <LabelHelper>(to earn)</LabelHelper>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={WalletIcon} />
                </ListItemIcon>
                Wallet
                <LabelHelper>(your earnings)</LabelHelper>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={HelpCenterIcon} />
                </ListItemIcon>
                Help Center
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ImageAvatar src={SettingsIcon} />
                </ListItemIcon>
                Settings
              </MenuItem>
            </Menu>
          )}
          <UserAvatarContainer
            Mheight="1.5rem"
            Mwidth="1.5rem"
            onClick={changeThemeHandler}
          >
            {mode === "light" ? (
              <NightlightRoundIcon sx={IconStyles} />
            ) : (
              <CircleIcon sx={IconStyles} />
            )}
          </UserAvatarContainer>
        </TopNavRightContentSection>
      </TopNavContainer>
      <CustomDivider style={{ width: "95%" }} />
    </TopNavWrapper>
  );
};

export default TopNav;
