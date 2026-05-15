import { Box, Typography, Grid, Divider, Paper } from '@mui/material';
import { ASSETS } from '../assets';

function CraftPaperBg({ opacity = 0.45 }) {
  return (
    <Box
      component="img"
      src={ASSETS.craftPaper}
      alt=""
      aria-hidden="true"
      sx={{
        position: 'absolute', top: 0, left: '-5%',
        width: '110%', height: '100%',
        objectFit: 'cover', opacity, pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
}

const services = [
  { title: 'Brand Identity', desc: 'Logo design, visual systems, brand guidelines, and asset creation that reflect your unique story.' },
  { title: 'Print & Editorial', desc: 'Magazine layouts, invitations, stationery, and collateral designed with thoughtful typography.' },
  { title: 'Advertising Design', desc: 'Campaign concepts, billboard, digital, and packaging design for meaningful brand experiences.' },
];

export default function About() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* ── HERO PHOTO ── */}
      <Box
        sx={{
          position: 'relative',
          height: {xs: 500, md: 500},
          overflow: 'hidden',
          mt: 0,
        //   background: 'linear-gradient(to top right, #7C5A56 0%, #644743 100%)',
          backgroundColor: '#7C5A56', // #7C5A56, 765551, rgba(124,90,86,0) 100%
        }}
      >
        <Box
          component="img"
          src={ASSETS.aboutMePhoto}
          alt="Jasmine Lin"
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: 'auto',
          }}
        />
      </Box>

      {/* ── INTRO ── */}
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: 0, pb: { xs: 8, md: 12 } }}>
        <CraftPaperBg />
        <Box
          component="img" src={ASSETS.rose1} alt="" aria-hidden="true"
          sx={{ position: 'absolute', top: '10%', right: '-12%', width: '55%', opacity: 0.1, transform: 'rotate(161deg)', pointerEvents: 'none', zIndex: 0 }}
        />

        <Grid container spacing={6} sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 10 }, pt: 8, maxWidth: 1200, mx: 'auto' }}>
          {/* Profile photo */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Box
              component="img"
              src={ASSETS.profilePhoto}
              alt="Jasmine Lin profile"
              sx={{
                width: { xs: '60%', md: '100%' },
                maxWidth: 340,
                borderRadius: 2,
                boxShadow: '0 6px 30px rgba(64,41,44,0.18)',
              }}
            />
          </Grid>

          {/* Bio text */}
          <Grid item xs={12} md={8}>
            <Typography variant="overline" sx={{ fontSize: '0.75rem', color: '#ae8f8e', display: 'block', mb: 1 }}>
              ABOUT JASMINE
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, mb: 3 }}>
              Hello beautiful souls!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I&rsquo;m <strong>Jasmine Lin</strong>, aka Yi Chen Lin, a creative designer turning ideas into something
              meaningful and beautifully crafted.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              My creative journey started early, back in primary school. I loved making things by hand — from crocheted
              coasters to small accessories — and even created my own mini brand and catalog to sell to classmates.
              That was my first taste of design and entrepreneurship.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              My story begins in Taiwan, where my love for communication first started. From first grade through middle
              school, I participated in speech contests that were never just about reading a script — but about telling a
              story. To truly engage an audience, you had to express emotion through your voice, facial expressions,
              and presence.
            </Typography>
            <Typography variant="body1" fontStyle="italic" sx={{ fontSize: '1.35rem', color: '#ae8f8e' }}>
              &ldquo;The answer I discovered was simple: You Feel It!&rdquo;
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* ── EXTENDED BIO ── */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 6, md: 10 }, backgroundColor: '#faf5f0' }}>
        <CraftPaperBg opacity={0.3} />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 900, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={ASSETS.chineseChar2}
                alt="蓁織夢"
                sx={{ width: '100%', maxWidth: 320, borderRadius: 2, boxShadow: '0 4px 20px rgba(64,41,44,0.12)' }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Those experiences taught me how to react naturally, stay adaptable under pressure, and connect with
                people in an honest way. They also helped me realize that I&rsquo;m an extroverted person who genuinely
                enjoys performing, engaging, and communicating with others.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Years later, after moving to the United States, I continued developing these skills through
                client-facing roles in fashion retail. Working in sales wasn&rsquo;t just about selling — but about
                understanding people, communicating value, and representing a brand through the way you speak,
                present yourself, and connect with customers.
              </Typography>
              <Typography variant="body1">
                The experience refined my communication skills and deepened my understanding of people, shaping
                who I am and what I&rsquo;m good at today.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ── SERVICES ── */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 }, backgroundColor: '#ae8f8e' }}>
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1100, mx: 'auto', px: { xs: 3, md: 8 } }}>
          <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', mb: 1, fontSize: '0.75rem', color: '#f5ede8' }}>
            SERVICES
          </Typography>
          <Divider sx={{ width: 60, mx: 'auto', borderColor: '#f5ede8', mb: 6 }} />
          <Grid container spacing={4}>
            {services.map((s) => (
              <Grid item xs={12} md={4} key={s.title}>
                <Paper
                  elevation={0}
                  sx={{ backgroundColor: 'rgba(245,237,232,0.18)', p: 4, height: '100%', borderRadius: 0 }}
                >
                  <Typography variant="h5" sx={{ color: '#faf5f0', mb: 2 }}>{s.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#f5ede8', lineHeight: 1.9 }}>{s.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
