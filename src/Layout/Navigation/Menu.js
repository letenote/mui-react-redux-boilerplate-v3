import React, { lazy } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Theme } from 'Config/Theme';
const Divider = lazy(() => import('@mui/material/Divider'));
const List = lazy(() => import('@mui/material/List'));
const ListItem = lazy(() => import('@mui/material/ListItem'));
const ListItemButton = lazy(() => import('@mui/material/ListItemButton'));
const ListItemIcon = lazy(() => import('@mui/material/ListItemIcon'));
const ListItemText = lazy(() => import('@mui/material/ListItemText'));
const InboxIcon = lazy(() => import('@mui/icons-material/MoveToInbox'));
const MailIcon = lazy(() => import('@mui/icons-material/Mail'));
const DashboardIcon = lazy(() => import('@mui/icons-material/Dashboard'));
const BrokenImageIcon = lazy(() => import('@mui/icons-material/BrokenImage'));
const HolidayVillageIcon = lazy(() => import('@mui/icons-material/HolidayVillage'));
const MemoryIcon = lazy(() => import('@mui/icons-material/Memory'));
const LogoutIcon = lazy(() => import('@mui/icons-material/Logout'));
const SettingsIcon = lazy(() => import('@mui/icons-material/Settings'));
const NightlifeIcon = lazy(() => import('@mui/icons-material/Nightlife'));
const NfcIcon = lazy(() => import('@mui/icons-material/Nfc'));
const PlayCircleOutlineIcon = lazy(() => import('@mui/icons-material/PlayCircleOutline'));
const SportsEsportsIcon = lazy(() => import('@mui/icons-material/SportsEsports'));

const menus = [
  { name: "Home", label: "Home", href: "/", icon: <HolidayVillageIcon /> },
  { name: "Dashboard", label: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  { name: "Dashboard C", label: "Dashboard C", href: "/dashboard/child", icon: <MemoryIcon /> },
  { name: "Game", label: "Game", href: "/game", icon: <SportsEsportsIcon /> },
  { name: "404 Page", label: "404 Page", href: "/asal-asalan", icon: <BrokenImageIcon /> },
  { name: "Inbox", label: "Inbox", href: "/inbox", icon: <InboxIcon /> },
  { name: "Mail", label: "Mail", href: "/mail", icon: <MailIcon /> },
  { name: "Music", label: "Music", href: "/music", icon: <NightlifeIcon /> },
  { name: "NFC", label: "NFC", href: "/nfc", icon: <NfcIcon /> },
  { name: "Video", label: "Video", href: "/video", icon: <PlayCircleOutlineIcon /> },
  { name: "Setting", label: "Setting", href: "/setting", icon: <SettingsIcon /> },

  { name: "Logout", label: "Logout", href: "/login", icon: <LogoutIcon /> }
];

const activeLinkStyle = {
  color: Theme.palette.primary.main
}

const Menu = ({ sidebarCollapse = false, onClick = () => { } }) => {
  const { pathname } = useLocation();
  return (
    <List sx={{ mb: { xs: "15px", sm: "20px" } }}>
      {menus.map((menu, menuIndex) => {
        return (
          <ListItem key={menuIndex} disablePadding sx={{ display: 'block' }}>
            {menuIndex === (menus.length - 1) && <Divider />}
            <NavLink
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              to={menu.href}
              className={"link-reset"}
              name={menu.name}
              aria-label={menu.name}
              title={menu.name}
            >
              <ListItemButton
                onClick={onClick}
                name={menu.name} aria-label={menu.name} title={menu.name}
                sx={{
                  height: 48,
                  justifyContent: {
                    xs: 'initial',
                    sm: !sidebarCollapse ? 'initial' : 'center'
                  },
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: pathname === menu.href ? "primary.main" : "",
                    minWidth: 0,
                    mr: {
                      xs: 2,
                      sm: !sidebarCollapse ? 2 : 'auto'
                    },
                    justifyContent: 'center',
                  }}
                >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={menu.label}
                  sx={{
                    display: {
                      xs: 'block',
                      sm: !sidebarCollapse ? 'block' : 'none'
                    },
                    whiteSpace: 'nowrap'
                  }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        )
      })}
    </List>
  )
}

export default Menu;