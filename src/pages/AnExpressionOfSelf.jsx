import { Box, Typography, Grid, Divider } from '@mui/material';
import { ASSETS } from '../assets';

function CraftPaperBg({ opacity = 0.4 }) {
  return (
    <Box
      component="img" src={ASSETS.craftPaper} alt="" aria-hidden="true"
      sx={{ position: 'absolute', top: 0, left: '-5%', width: '110%', height: '100%', objectFit: 'cover', opacity, pointerEvents: 'none', zIndex: 0 }}
    />
  );
}

function SectionLabel({ children }) {
  return (
    <Typography variant="overline" sx={{ display: 'block', fontSize: '0.75rem', color: '#ae8f8e', mb: 1 }}>
      {children}
    </Typography>
  );
}

export default function AnExpressionOfSelf() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* ── HERO ── */}
      <Box sx={{ position: 'relative', height: { xs: 340, md: 560 }, overflow: 'hidden' }}>
        <Box
          component="img" src={ASSETS.expressionOfSelfBanner} alt="An Expression of Self"
          sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(64,41,44,0.15) 0%, rgba(64,41,44,0.6) 100%)' }} />
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 4, md: 10 } }}>
          <Typography variant="overline" sx={{ color: '#e8d5c4', fontSize: '0.75rem' }}>BRAND ASSET DESIGN</Typography>
          <Typography variant="h1" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '3.8rem' }, lineHeight: 1.1 }}>
            AN EXPRESSION OF SELF
          </Typography>
          <Typography variant="body2" sx={{ color: '#e8d5c4', mt: 1, fontStyle: 'italic', fontSize: '1.1rem' }}>
            — Brand Asset Design —
          </Typography>
        </Box>
      </Box>

      {/* ── PROJECT DESCRIPTION ── */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 }, backgroundColor: '#f5ede8' }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 900, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <SectionLabel>THE PROJECT</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, mb: 4 }}>
            MY VALUE, IDENTITY, PERSONALITY
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 3 }}>
            A personal branding project inspired by who I am, how I communicate, and the way I connect with people.
            I designed a custom logo and brand asset system that reflects my personality, values, and creative journey
            through thoughtful visual storytelling.
          </Typography>
          <Divider sx={{ my: 4, borderColor: '#ae8f8e' }} />

          {/* Overview image */}
          <Box
            component="img" src={ASSETS.expressionOverview} alt="Project Overview"
            sx={{ width: '100%', borderRadius: 1, boxShadow: '0 4px 24px rgba(64,41,44,0.12)', mb: 6 }}
          />

          {/* Sketch */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box component="img" src={ASSETS.expressionSketch} alt="Sketch process"
                sx={{ width: '100%', borderRadius: 1, boxShadow: '0 4px 20px rgba(64,41,44,0.1)' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionLabel>BACKGROUND</SectionLabel>
              <Typography variant="body1">
                My story begins in Taiwan, where my love for communication first started. From first grade through
                middle school, I participated in speech contests that were never just about reading a script — but
                about telling a story. To truly engage an audience, you had to express emotion through your voice,
                facial expressions, and presence. But the real question was always: how do you express emotion
                without faking it?
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ── VALUE / PERSONALITY / PURPOSE ── */}
      <Box sx={{ backgroundColor: '#faf5f0', py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 }, position: 'relative', overflow: 'hidden' }}>
        <CraftPaperBg opacity={0.25} />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1100, mx: 'auto' }}>
          <Typography variant="h2" sx={{ textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.8rem' }, mb: 8 }}>
            The Answer Was Simple: <em>You Feel It!</em>
          </Typography>
          <Grid container spacing={5}>
            {[
              {
                label: 'Value',
                text: "My values lie in connection, authenticity, and adaptability. I believe deeply in genuine communication and meaningful human connection — whether through storytelling, branding, or everyday interactions. Growing up in Taiwan and later moving to the United States allowed me to blend Eastern and Western perspectives, helping me connect naturally with people from diverse backgrounds.",
              },
              {
                label: 'Personality',
                text: "At my core, I am extroverted, playful, and expressive. I bring warmth, energy, and empathy into the way I interact with others, and I genuinely enjoy creating spaces where people feel welcomed, understood, and connected.",
              },
              {
                label: 'Purpose',
                text: "My dream is to one day open my own yoga studio, Elysium — a space centered around creativity, community, and peace. I hope to shape the studio's branding, visual identity, and atmosphere using the creative skills I've developed through advertising and design. My purpose is simple: to make people feel understood, and to create experiences that leave a positive impact.",
              },
            ].map(({ label, text }) => (
              <Grid item xs={12} md={4} key={label}>
                <SectionLabel>{label.toUpperCase()}</SectionLabel>
                <Typography variant="h4" sx={{ mb: 2 }}>{label}</Typography>
                <Typography variant="body1">{text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ── BRAND ASSET PACK ── */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 }, backgroundColor: '#f5ede8' }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 8 } }}>
          <SectionLabel>BRAND ASSET PACK</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>Logo & Identity</Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mb: 6 }}>
            Based on who I am and how I show up in the world, I created a brand asset pack that feels true to me.
            The logo features a serif J with jasmine flowers, representing both my name and the softness, honesty,
            and gentle strength I bring into my interactions.
          </Typography>

          {/* Logo overview */}
          <Box component="img" src={ASSETS.logoOverview} alt="Logo Overview"
            sx={{ width: '100%', maxWidth: 780, display: 'block', mx: 'auto', borderRadius: 1, boxShadow: '0 4px 20px rgba(64,41,44,0.12)', mb: 8 }}
          />

          {/* Stationery */}
          <SectionLabel>STATIONERY SYSTEM</SectionLabel>
          <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>Stationery System</Typography>
          <Box component="img" src={ASSETS.stationery} alt="Stationery System"
            sx={{ width: '100%', borderRadius: 1, boxShadow: '0 4px 20px rgba(64,41,44,0.1)', mb: 8 }}
          />

          {/* Coffee Cups */}
          <SectionLabel>COFFEE CUPS</SectionLabel>
          <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>Coffee Cups</Typography>
          <Box component="img" src={ASSETS.coffeeCup} alt="Coffee Cup Label"
            sx={{ width: '100%', borderRadius: 1, boxShadow: '0 4px 20px rgba(64,41,44,0.1)', mb: 8 }}
          />

          {/* Clothing */}
          <SectionLabel>CLOTHING</SectionLabel>
          <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>Clothing</Typography>
          <Grid container spacing={3}>
            {[
              { src: ASSETS.sweatshirt, alt: 'Light Sweatshirt Front' },
              { src: ASSETS.sweatshirtBack, alt: 'Light Sweatshirt Back' },
              { src: ASSETS.darkSweatshirtFront, alt: 'Dark Sweatshirt Front' },
              { src: ASSETS.darkSweatshirtBack, alt: 'Dark Sweatshirt Back' },
            ].map(({ src, alt }) => (
              <Grid item xs={6} md={3} key={alt}>
                <Box component="img" src={src} alt={alt}
                  sx={{ width: '100%', borderRadius: 1, boxShadow: '0 4px 16px rgba(64,41,44,0.1)' }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
