import * as React from "react";
import { styled, useTheme, ThemeProvider, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/router";

import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  AddBox,
  Category,
  Dashboard,
  FmdGood,
  Fullscreen,
  FullscreenExit,
  Home,
  Inventory,
  Language,
  LocalOffer,
  Logout,
  PersonAdd,
  ProductionQuantityLimits,
  Receipt,
  RecentActors,
  Settings,
  ShoppingCart,
  Storefront,
} from "@mui/icons-material";
import Flag from "react-world-flags";
import { Paper, SwipeableDrawer } from "@mui/material";
import { ApplicationColor } from "../../constant/color";
import { useTranslation } from "next-i18next";
import { useId } from "react";
export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isFullScreen = React.useRef(false);
  // const isFullScreenMemo = React.useMemo(() => isFullScreen, [isFullScreen]);
  const { t } = useTranslation();
  const { pathname, locale, locales, push, asPath } = useRouter();
  const keywords = {
    home: "Home",
    dashboard: "Dashboard",
    product: "Product",
    createProduct: "Create Product",
    category: "Category",
    brands: "Brands",
    sale: "Sale",
    invoice: "Invoice",
    pos: "POS",
    createNewUser: "Create new user",
    viewUser: "View User",
    settings: "Settings",
    logout: "Logouts",
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
    handleLanguageSelectorClose();
  };

  const handleLanguageSelector = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageSelectorClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (l) => (event) => {
    console.log(l);
    push(asPath, undefined, { locale: l });
    handleLanguageMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = (event) => {
    setMobileMoreAnchorEl(null);
  };
  // const setFullScreen = (e) => {
  //   isFullScreen.current = !isFullScreen.current;
  //   document.documentElement.requestFullscreen();
  // };
  // const exitFullscreen = (e) => {
  //   isFullScreen.current = !isFullScreen.current;
  //   document.exitFullscreen();
  // };

  const handleFullScreen = (e) => {
    if (!isFullScreen.current) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    isFullScreen.current = !isFullScreen.current;
  };

  function ListContainer() {
    return (
      <>
        <DrawerHeader sx={{ marginBottom: "10px" }}></DrawerHeader>
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography fontWeight={600}>Main</Typography>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip
              title={open ? null : keywords.home}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  backgroundColor: ApplicationColor.third,
                  borderRadius: "0 25px 25px 0",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={t(keywords.home)}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip
              title={open ? null : keywords.dashboard}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  borderRadius: "0 25px 25px 0",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Dashboard />
                </ListItemIcon>
                <ListItemText
                  primary={t(keywords.dashboard)}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography fontWeight={600}>Products</Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.product}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Inventory />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.product}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.createProduct}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AddBox />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.createProduct}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.category}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  borderRadius: "0 25px 25px 0",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Category />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.category}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.brands}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LocalOffer />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.brands}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography fontWeight={600}>Sales</Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.sale}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ShoppingCart />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.sale}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.invoice}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Receipt />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.invoice}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : keywords.pos} placement="right" arrow>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Storefront />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.pos}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography fontWeight={600}>User Management</Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.createNewUser}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    borderRadius: "0 25px 25px 0",
                  }}
                >
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.createNewUser}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.viewUser}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <RecentActors />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.viewUser}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography fontWeight={600}>Settings</Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.settings}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Settings />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.settings}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : keywords.logout}
              placement="right"
              arrow
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Logout />
                </ListItemIcon>
                <ListItemText
                  primary={keywords.logout}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
      </>
    );
  }

  const renderLanguageMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={"lang_menu_id"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleLanguageMenuClose}
    >
      <MenuItem onClick={handleLanguageChange("kh")}>
        <Flag width={19} code="kh" />{" "}
        <Typography margin={"0 20px"}>ភាសាខ្មែរ</Typography>
      </MenuItem>
      <MenuItem onClick={handleLanguageChange("en")}>
        <Flag width={19} code="GB-ENG" />{" "}
        <Typography margin={"0 20px"}>English</Typography>
      </MenuItem>
    </Menu>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={"mobile_menu_id"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={() => {}}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{ backgroundColor: ApplicationColor.primary }}
          position="fixed"
          open={open}
        >
          <Toolbar>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                marginRight: 2,
                ...(!open && { display: "none" }),
              }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 2,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <Typography
                color={ApplicationColor.third}
                fontSize={25}
                fontWeight={700}
              >
                Coffee Shop
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Search sx={{ display: { xs: "none", md: "flex" } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-controls={"exitfullscreen_id"}
                aria-haspopup="true"
                onClick={() => handleFullScreen()}
              >
                {isFullScreen.current ? <FullscreenExit /> : <Fullscreen />}
              </IconButton>
              {/* {isFullScreen.current ? (
                <IconButton
                  size="large"
                  aria-controls={"exitfullscreen_id"}
                  aria-haspopup="true"
                  onClick={() => exitFullscreen()}
                >
                  <FullscreenExit />
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  aria-controls={"fullscreen_id"}
                  aria-haspopup="true"
                  onClick={() => setFullScreen()}
                >
                  <Fullscreen />
                </IconButton>
              )} */}
              <IconButton
                size="large"
                aria-controls={"lang_id"}
                aria-haspopup="true"
                onClick={handleLanguageSelector}
              >
                <Language />
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={"menu_id"}
                aria-haspopup="true"
                onClick={() => {}}
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={"mobile_menu_id"}
                aria-haspopup="true"
                onClick={() => {}}
                color="secondary"
              >
                <SearchIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={"mobile_menu_id"}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderLanguageMenu}
        {renderMobileMenu}
        <DrawerResponsive theme={theme}>
          <Drawer variant="permanent" open={open}>
            <ListContainer />
          </Drawer>
        </DrawerResponsive>
        <DrawerSwiperResponsive theme={theme}>
          <SwipeableDrawer
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
            open={open}
            anchor="left"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Box sx={{ width: drawerWidth }}>
              <ListContainer open={open} />
            </Box>
          </SwipeableDrawer>
        </DrawerSwiperResponsive>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </>
  );
}

// Default
const DrawerResponsive = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
const DrawerSwiperResponsive = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, CusTheme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: ApplicationColor.secondary,
  boxShadow: "none",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ".MuiDrawer-paper": { borderWidth: 0 },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  border: "1px solid #e0e0e0",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  top: "2px",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "GrayText",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// ###
