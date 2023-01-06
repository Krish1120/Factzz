import { Breadcrumbs, Link } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TopNavContainer,
  Title,
  CustomDivider,
  Container,
  Text,
  SearchInput,
  Avatarwrapper,
  ImageAvatar,
  UserAvatarContainer,
  UserAvatar,
} from "../Styles/StyledUIComponents";
import { IconButton, InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import AddPostIcon from "../../assets/images/AddPostIcon.png";
import NotificationIcon from "../../assets/images/NotificationIcon.png";
import Img1 from "../../assets/images/Img1.png";
import DownArrowIcon from "../../assets/images/DownArrowIcon.png";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";
import { setThemeMode } from "../../redux/ThemeModeReducer";

const TopNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rotateDirection, setRotateDirection] = useState("");
  const open = Boolean(anchorEl);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setRotateDirection("forward");
  };
  const handleClose = () => {
    setAnchorEl(null);
    setRotateDirection("backward");
  };

  console.log(theme);

  const changeThemeHandler = () => {
    if (theme === "light") {
      dispatch(setThemeMode("dark"));
    } else {
      dispatch(setThemeMode("light"));
    }
  };

  const { screen } = useSelector((state) => state.activePages.activePage);
  return (
    <TopNavContainer>
      <Container direction="row">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ fontSize: "1.3rem", color: "grey" }}
        >
          <Title>Factzz</Title>
          <Text color="grey">{screen}</Text>
        </Breadcrumbs>
      </Container>
      <SearchInput
        type="text"
        placeholder="Search..."
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "#bbb" }} />
          </InputAdornment>
        }
      />
      <Container direction="row">
        <ImageAvatar height="30px" width="30px" src={AddPostIcon} />
        <ImageAvatar height="30px" width="25px" src={NotificationIcon} />
        <Container direction="row" onClick={handleClick}>
          <ImageAvatar
            cursor="pointer"
            height="8px"
            width="15px"
            src={DownArrowIcon}
            r={rotateDirection}
          />
          <UserAvatarContainer>
            <UserAvatar src={Img1} />
          </UserAvatarContainer>
        </Container>
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
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        <UserAvatarContainer onClick={changeThemeHandler}>
          {theme === "light" ? (
            <NightlightRoundIcon fontSize="50px" />
          ) : (
            <CircleIcon />
          )}
        </UserAvatarContainer>
      </Container>
    </TopNavContainer>
  );
};

export default TopNav;
