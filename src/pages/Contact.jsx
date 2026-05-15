import { useState } from 'react';
import {
  Box, Typography, Grid, TextField, Button, Divider, Alert, Snackbar,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ASSETS } from '../assets';

function CraftPaperBg({ opacity = 0.4 }) {
  return (
    <Box
      component="img" src={ASSETS.craftPaper} alt="" aria-hidden="true"
      sx={{ position: 'absolute', top: 0, left: '-5%', width: '110%', height: '100%', objectFit: 'cover', opacity, pointerEvents: 'none', zIndex: 0 }}
    />
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [snackOpen, setSnackOpen] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSnackOpen(true);
      setForm({ name: '', email: '', message: '' });
    }
  }

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Header */}
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 8 }, textAlign: 'center', backgroundColor: '#f5ede8' }}>
        <CraftPaperBg />
        <Box
          component="img" src={ASSETS.rose1} alt="" aria-hidden="true"
          sx={{ position: 'absolute', top: '10%', right: '-10%', width: '45%', opacity: 0.1, transform: 'rotate(161deg)', pointerEvents: 'none', zIndex: 0 }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ fontSize: '0.75rem', color: '#ae8f8e' }}>GET IN TOUCH</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, mt: 1 }}>Contact</Typography>
          <Divider sx={{ width: 80, mx: 'auto', mt: 3, borderColor: '#ae8f8e' }} />
        </Box>
      </Box>

      {/* Contact content */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 }, backgroundColor: '#faf5f0' }}>
        <CraftPaperBg opacity={0.25} />
        <Grid container spacing={8} sx={{ position: 'relative', zIndex: 1, maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 8 } }}>
          {/* Left: info */}
          <Grid item xs={12} md={5}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 3 }}>
              Let&rsquo;s Connect
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              I&rsquo;d love to hear from you — whether it&rsquo;s a project inquiry, collaboration, or just to say hello.
              Reach out and let&rsquo;s create something meaningful together.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <EmailOutlinedIcon sx={{ color: '#ae8f8e' }} />
              <Typography variant="body1">jasmine.lin@sjsu.edu</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <Button
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<InstagramIcon />}
                variant="outlined"
                sx={{
                  borderColor: '#ae8f8e', color: '#ae8f8e', borderRadius: 0,
                  fontFamily: "'Josefin Sans', sans-serif", letterSpacing: '0.1em',
                  '&:hover': { borderColor: '#40292c', color: '#40292c', backgroundColor: 'transparent' },
                }}
              >
                Instagram
              </Button>
              <Button
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedInIcon />}
                variant="outlined"
                sx={{
                  borderColor: '#ae8f8e', color: '#ae8f8e', borderRadius: 0,
                  fontFamily: "'Josefin Sans', sans-serif", letterSpacing: '0.1em',
                  '&:hover': { borderColor: '#40292c', color: '#40292c', backgroundColor: 'transparent' },
                }}
              >
                LinkedIn
              </Button>
            </Box>

            <Box component="img" src={ASSETS.chinaFlower} alt="Jasmine"
              sx={{ mt: 6, width: '100%', maxWidth: 300, borderRadius: 1, opacity: 0.85, boxShadow: '0 4px 16px rgba(64,41,44,0.1)' }}
            />
          </Grid>

          {/* Right: form */}
          <Grid item xs={12} md={7}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth label="Name" variant="outlined" margin="normal"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                error={Boolean(errors.name)}
                helperText={errors.name}
                sx={fieldSx}
              />
              <TextField
                fullWidth label="Email" variant="outlined" margin="normal" type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                error={Boolean(errors.email)}
                helperText={errors.email}
                sx={fieldSx}
              />
              <TextField
                fullWidth label="Message" variant="outlined" margin="normal" multiline rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                error={Boolean(errors.message)}
                helperText={errors.message}
                sx={fieldSx}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: '#40292c',
                  color: '#f5ede8',
                  borderRadius: 0,
                  fontFamily: "'Josefin Sans', sans-serif",
                  letterSpacing: '0.15em',
                  px: 5,
                  py: 1.5,
                  '&:hover': { backgroundColor: '#ae8f8e' },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Snackbar open={snackOpen} autoHideDuration={5000} onClose={() => setSnackOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%', fontFamily: "'Josefin Sans', sans-serif" }}>
          Message sent! I&rsquo;ll be in touch soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    fontFamily: "'Cormorant Garamond', serif",
    '& fieldset': { borderColor: '#c9b0af' },
    '&:hover fieldset': { borderColor: '#40292c' },
    '&.Mui-focused fieldset': { borderColor: '#ae8f8e' },
  },
  '& .MuiInputLabel-root': {
    fontFamily: "'Josefin Sans', sans-serif",
    letterSpacing: '0.08em',
    fontSize: '0.85rem',
    '&.Mui-focused': { color: '#ae8f8e' },
  },
};
