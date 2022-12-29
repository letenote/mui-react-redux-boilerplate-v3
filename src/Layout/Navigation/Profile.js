import React, { Fragment, lazy } from "react";
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
const ListItem = lazy(() => import('@mui/material/ListItem'));
const ListItemText = lazy(() => import('@mui/material/ListItemText'));
const ListItemAvatar = lazy(() => import('@mui/material/ListItemAvatar'));
const Badge = lazy(() => import('@mui/material/Badge'));
const Avatar = lazy(() => import('@mui/material/Avatar'));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Profile = ({ sidebarCollapse = false }) => {
  return (
    <Fragment>
      <ListItem sx={{ p: 0 }}>
        <ListItemAvatar>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar sx={{ bgcolor: red[900] }}>HP</Avatar>
          </StyledBadge>
        </ListItemAvatar>
        <ListItemText
          sx={{
            flexDirection: { xs: 'column', sm: !sidebarCollapse ? 'column' : 'row' },
            display: { xs: 'flex', sm: !sidebarCollapse ? 'flex' : 'none' }
          }}
          primary="Helmi Pratama"
          secondary={`V ${process.env.REACT_APP_VERSION || "-.-"}`}
        />
      </ListItem>
    </Fragment>
  )
}

export default Profile;