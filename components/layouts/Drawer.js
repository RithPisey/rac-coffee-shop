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
import { useSelector, useDispatch } from "react-redux";
import { setIsZoom } from "../../store/global/globalSlice";

export default function MiniDrawer({ children, font }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { t } = useTranslation();
  const { pathname, locale, locales, push, asPath } = useRouter();
  const isFullScreen = useSelector((state) => state.global.isZoom);
  const dispatch = useDispatch();
  const keywords = {
    home: "home",
    dashboard: "dashboard",
    products: "products",
    createProduct: "create-product",
    category: "category",
    brands: "brands",
    sale: "sale",
    invoice: "invoice",
    pos: "pos",
    createNewUser: "create-new-user",
    viewUser: "view-user",
    settings: "settings",
    logout: "logout",
    main: "main",
    product: "product",
    sales: "sales",
    userManagement: "user-management",
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
    push(asPath, undefined, { locale: l });
    handleLanguageMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = (event) => {
    setMobileMoreAnchorEl(null);
  };

  const handleFullScreen = (e) => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
      dispatch(setIsZoom(true));
    } else {
      document.exitFullscreen();
      dispatch(setIsZoom(false));
    }
  };

  function ListContainer() {
    return (
      <Box>
        <DrawerHeader sx={{ marginBottom: "10px" }}></DrawerHeader>
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography className={font} fontWeight={600}>
              {t(keywords.main)}
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip
              title={open ? null : t(keywords.home)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>{t(keywords.home)}</Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip
              title={open ? null : t(keywords.dashboard)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>
                    {t(keywords.dashboard)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography className={font} fontWeight={600}>
              {t(keywords.products)}
            </Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.product)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>
                    {t(keywords.product)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.createProduct)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>
                    {t(keywords.createProduct)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.category)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>
                    {t(keywords.category)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.brands)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>{t(keywords.brands)}</Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography className={font} fontWeight={600}>
              {t(keywords.sales)}
            </Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.sale)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>{t(keywords.sale)}</Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.invoice)}
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

                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>
                    {t(keywords.invoice)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.pos)}
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
                  <Storefront />
                </ListItemIcon>

                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>{t(keywords.pos)}</Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography className={font} fontWeight={600}>
              {t(keywords.userManagement)}
            </Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.createNewUser)}
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

                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>
                    {t(keywords.createNewUser)}
                  </Typography>
                </ListItemText>
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>
                    {t(keywords.viewUser)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem sx={{ display: !open ? "none" : "block" }}>
            <Typography className={font} fontWeight={600}>
              {t(keywords.settings)}
            </Typography>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.settings)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>
                    {t(keywords.settings)}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : t(keywords.logout)}
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
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  <Typography className={font}>{t(keywords.logout)}</Typography>
                </ListItemText>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
      </Box>
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
        <Typography className={font} margin={"0 20px"}>
          ភាសាខ្មែរ
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleLanguageChange("en")}>
        <Flag width={19} code="GB-ENG" />{" "}
        <Typography className={font} margin={"0 20px"}>
          English
        </Typography>
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
              <ChevronLeftIcon />
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
                className={font}
                color={ApplicationColor.third}
                fontSize={25}
                fontWeight={700}
              >
                LOGO
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
                {isFullScreen ? <FullscreenExit /> : <Fullscreen />}
              </IconButton>
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
          <Box sx={{ overflow: "auto", height: "90vh" }}>{children}</Box>
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
