import { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, useScrollTrigger, Slide, Paper, Typography,
  Snackbar, Alert,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '../assets';
import { workItems } from '../pages/Home';

const navLinks = [
  { label: 'ABOUT',   path: '/about' },
  { label: 'RESUME',  path: '/resume' },
  { label: 'WORK',    path: '/#work' },
  { label: 'CONTACT', path: '/contact' },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>;
}

export default function Navbar({ showLogo = true, background = 'craftPaper' }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [devAlert, setDevAlert] = useState(false);
  const location = useLocation();

  const isTransparent = background === 'transparent';

  return (
    <>
      <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundImage: isTransparent ? 'none' : `url(${ASSETS.craftPaper})`,
          backgroundColor: isTransparent ? 'transparent' : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backdropFilter: 'blur(6px)',
          boxShadow: isTransparent ? 'none' : undefined,
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
                  fontSize: '1.5rem',
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
          {showLogo && (
            <Box
              component={Link}
              to="/"
              sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', position: { md: 'absolute' }, left: { md: '50%' }, transform: { md: 'translateX(-50%)' } }}
            >
              <Box
                component="img"
                src={ASSETS.heroImage}
                alt="Jasmine Lin Logo"
                sx={{ height: { xs: 60, md: 78 }, width: 'auto', objectFit: 'contain' }}
              />
            </Box>
          )}

          {/* Right nav links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navLinks.slice(2).map((link) =>
              link.label === 'WORK' ? (
                <Box
                  key={link.label}
                  onMouseEnter={() => setWorkHover(true)}
                  onMouseLeave={() => setWorkHover(false)}
                  sx={{ position: 'relative' }}
                >
                  <Button
                    component={Link}
                    to={link.path}
                    sx={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: '1.5rem',
                      letterSpacing: '0.12em',
                      color: location.pathname === link.path ? '#ae8f8e' : '#40292c',
                      borderBottom: location.pathname === link.path ? '2px solid #ae8f8e' : '2px solid transparent',
                      borderRadius: 0,
                      '&:hover': { color: '#ae8f8e', backgroundColor: 'transparent' },
                    }}
                  >
                    {link.label}
                  </Button>
                  {workHover && (
                    <Paper
                      elevation={4}
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        minWidth: 280,
                        backgroundColor: 'rgba(245,237,232,0.97)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(64,41,44,0.12)',
                        borderRadius: 0,
                        zIndex: 1400,
                        py: 1,
                      }}
                    >
                      {workItems.map((project) => (
                        <Box
                          key={project.title}
                          component={project.underDev ? 'div' : Link}
                          {...(!project.underDev && { to: project.path })}
                          onClick={project.underDev ? () => setDevAlert(true) : undefined}
                          sx={{
                            display: 'block',
                            px: 3, py: 1.2,
                            textDecoration: 'none',
                            '&:hover': { backgroundColor: 'rgba(174,143,142,0.12)' },
                          }}
                        >
                          <Typography sx={{
                            fontFamily: "'Josefin Sans', sans-serif",
                            fontSize: '0.82rem',
                            letterSpacing: '0.08em',
                            color: '#40292c',
                            lineHeight: 1.2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                          }}>
                            {project.title}
                            {project.underDev && <ConstructionIcon sx={{ fontSize: '0.85rem', color: '#ae8f8e' }} />}
                          </Typography>
                          <Typography sx={{
                            fontFamily: "'Josefin Sans', sans-serif",
                            fontSize: '0.68rem',
                            letterSpacing: '0.06em',
                            color: '#ae8f8e',
                            lineHeight: 1.4,
                          }}>
                            {project.subtitle}
                          </Typography>
                        </Box>
                      ))}
                    </Paper>
                  )}
                </Box>
              ) : (
                <Button
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: '1.5rem',
                    letterSpacing: '0.12em',
                    color: location.pathname === link.path ? '#ae8f8e' : '#40292c',
                    borderBottom: location.pathname === link.path ? '2px solid #ae8f8e' : '2px solid transparent',
                    borderRadius: 0,
                    '&:hover': { color: '#ae8f8e', backgroundColor: 'transparent' },
                  }}
                >
                  {link.label}
                </Button>
              )
            )}
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
                <Box key={link.label}>
                  <ListItem disablePadding>
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
                  {link.label === 'WORK' && workItems.map((project) => (
                    <ListItem key={project.title} disablePadding>
                      <ListItemButton
                        {...(!project.underDev && { component: Link, to: project.path })}
                        onClick={() => { if (project.underDev) { setDevAlert(true); } setDrawerOpen(false); }}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText
                          primary={
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              {project.title}
                              {project.underDev && <ConstructionIcon style={{ fontSize: '0.85rem', color: '#ae8f8e' }} />}
                            </span>
                          }
                          secondary={project.subtitle}
                          primaryTypographyProps={{
                            fontFamily: "'Josefin Sans', sans-serif",
                            fontSize: '0.8rem',
                            letterSpacing: '0.08em',
                            color: '#40292c',
                          }}
                          secondaryTypographyProps={{
                            fontFamily: "'Josefin Sans', sans-serif",
                            fontSize: '0.68rem',
                            color: '#ae8f8e',
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Box>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </HideOnScroll>

      <Snackbar
        open={devAlert}
        autoHideDuration={4000}
        onClose={() => setDevAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setDevAlert(false)} severity="info" variant="filled"
          sx={{ fontFamily: "'Josefin Sans', sans-serif", letterSpacing: '0.05em', backgroundColor: '#ae8f8e', color: '#fff', '& .MuiAlert-icon': { color: '#fff' } }}>
          This page is currently under development. Check back soon!
        </Alert>
      </Snackbar>
    </>
  );
}
