import { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, useScrollTrigger, Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '../assets';

const navLinks = [
  { label: 'ABOUT',   path: '/about' },
  { label: 'RESUME',  path: '/resume' },
  { label: 'WORK',    path: '/work' },
  { label: 'CONTACT', path: '/contact' },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(245,237,232,0.92)',
          backdropFilter: 'blur(6px)',
          borderBottom: '1px solid rgba(64,41,44,0.12)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 80 }, px: { xs: 2, md: 6 } }}>
          {/* Left nav links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navLinks.slice(0, 2).map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.path}
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  color: location.pathname === link.path ? '#ae8f8e' : '#40292c',
                  borderBottom: location.pathname === link.path ? '2px solid #ae8f8e' : '2px solid transparent',
                  borderRadius: 0,
                  '&:hover': { color: '#ae8f8e', backgroundColor: 'transparent' },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Center logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', position: { md: 'absolute' }, left: { md: '50%' }, transform: { md: 'translateX(-50%)' } }}
          >
            <Box
              component="img"
              src={ASSETS.heroImage}
              alt="Jasmine Lin Logo"
              sx={{ height: { xs: 40, md: 52 }, width: 'auto', objectFit: 'contain' }}
            />
          </Box>

          {/* Right nav links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navLinks.slice(2).map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.path}
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  color: location.pathname === link.path ? '#ae8f8e' : '#40292c',
                  borderBottom: location.pathname === link.path ? '2px solid #ae8f8e' : '2px solid transparent',
                  borderRadius: 0,
                  '&:hover': { color: '#ae8f8e', backgroundColor: 'transparent' },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#40292c', ml: 'auto' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Mobile drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 240, pt: 4, backgroundColor: '#f5ede8', height: '100%' }}>
            <List>
              {[{ label: 'HOME', path: '/' }, ...navLinks].map((link) => (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={link.path}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        letterSpacing: '0.12em',
                        color: '#40292c',
                        fontWeight: 400,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
}
