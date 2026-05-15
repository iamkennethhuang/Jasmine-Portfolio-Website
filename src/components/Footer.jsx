import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#40292c',
        color: '#f5ede8',
        py: 6,
        px: { xs: 3, md: 8 },
        textAlign: 'center',
      }}
    >
      <Box
        component="img" src={ASSETS.craftPaper} alt="" aria-hidden="true"
        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08, pointerEvents: 'none' }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component="img" src={ASSETS.heroImage} alt="Jasmine Lin"
          sx={{ height: 44, width: 'auto', objectFit: 'contain', mb: 2, opacity: 0.9 }}
        />
        <Typography variant="body2" sx={{ color: '#c9b0af', mb: 2, fontFamily: "'Josefin Sans', sans-serif", letterSpacing: '0.08em', fontSize: '0.8rem' }}>
          JASMINE LIN &mdash; ADV 131 FINAL PORTFOLIO
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 3, flexWrap: 'wrap' }}>
          {[
            { label: 'About', path: '/about' },
            { label: 'Work', path: '/work' },
            { label: 'Resume', path: '/resume' },
            { label: 'Contact', path: '/contact' },
          ].map((link) => (
            <Typography
              key={link.label}
              component={Link}
              to={link.path}
              variant="overline"
              sx={{
                color: '#c9b0af', textDecoration: 'none', fontSize: '0.72rem', letterSpacing: '0.12em',
                '&:hover': { color: '#f5ede8' },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: '#7a5c5e', fontFamily: "'Josefin Sans', sans-serif", fontSize: '0.75rem' }}>
          &copy; {new Date().getFullYear()} Jasmine Lin. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
