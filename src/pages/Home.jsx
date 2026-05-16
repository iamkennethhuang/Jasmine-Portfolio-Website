import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';

// ─── design tokens ────────────────────────────────────────────────
const serif = 'Cormorant Garamond, serif';
const brown = '#40292c';
const mauve = '#ae8f8e';
const cream = '#f5ede8';

// Decorative background repeater
function CraftPaperBg({ opacity = 1, flipY = false }) {
  return (
    <Box
      component="img" src={ASSETS.craftPaper} alt="" aria-hidden="true"
      sx={{ position: 'absolute', top: 0, left: '-5%', width: '110%', height: '100%', objectFit: 'cover', opacity, pointerEvents: 'none', zIndex: 0, transform: flipY ? 'scaleY(-1)' : 'none' }}
    />
  );
}

export const workItems = [
  { title: 'An Expression of Self',  subtitle: 'Brand Asset Design',     img: ASSETS.expressionOfSelfBanner, path: '/expression-of-self',      showInGrid: false },
  { title: "L'Oréal Paris Campaign", subtitle: 'Brand Campaign Design', img: ASSETS.lorealInvitation,       path: '/loreal-paris-campaign',   showInGrid: true },
  { title: 'Vogue Cover Mockup',      subtitle: 'Editorial Design',       img: ASSETS.vogueCover,             path: '/work',                    showInGrid: true },
  { title: 'Stationery System',       subtitle: 'Brand Identity',          img: ASSETS.businessCard,           path: '/work',                    showInGrid: true },
  { title: '2-Page Layout',           subtitle: 'Publication Design',      img: ASSETS.twoPageLayout,          path: '/work',                    showInGrid: true },
  { title: 'Whiskas Campaign',        subtitle: 'Advertising Design',      img: ASSETS.whiskas,                path: '/whiskas-campaign',        showInGrid: true },
  { title: 'Billboard Mockup',        subtitle: 'Outdoor Advertising',     img: ASSETS.billboard,              path: '/work',                    showInGrid: true },
];

export default function Home() {
  return (
    <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 12,
          pb: 8,
          overflow: 'hidden',
        }}
      >
        <CraftPaperBg />

        {/* Rose decorations */}
        <Box
          component="img"
          src={ASSETS.rose2}
          alt=""
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: '5%',
            right: '-8%',
            width: '55%',
            opacity: 0.13,
            transform: 'rotate(48deg)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={ASSETS.rose1}
          alt=""
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: '18%',
            left: '-15%',
            width: '60%',
            opacity: 0.1,
            transform: 'rotate(161deg)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Cursive Jasmine watermark */}
        <Box
          component="img"
          src={ASSETS.cursiveJasmine}
          alt=""
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: '28%',
            left: '50%',
            transform: 'translateX(-50%) rotate(-8deg)',
            width: '90%',
            opacity: 0.18,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Hero photo */}
        <Box
          component="img"
          src={ASSETS.heroImage}
          alt="Jasmine Lin"
          sx={{
            position: 'relative',
            zIndex: 2,
            width: { xs: '80%', sm: '50%', md: '36%' },
            maxWidth: 520,
            borderRadius: 2,
            boxShadow: '0 8px 40px rgba(64,41,44,0.18)',
            mb: 5,
          }}
        />

        {/* Intro text */}
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: 3, maxWidth: 700 }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Josefin Sans', sans-serif", letterSpacing: '0.08em', fontSize: '0.85rem', color: '#ae8f8e', mb: 1 }}
          >
            Hello beautiful souls!
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, mb: 2, lineHeight: 1.15 }}
          >
            I&rsquo;m Jasmine Lin,<br />
            <em>aka Yi Chen Lin</em>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#6b4c4f' }}>
            A creative designer turning ideas into something{' '}
            <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 600 }}>
              meaningful and beautifully crafted.
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* ── AN EXPRESSION OF SELF BANNER ── */}
      <Box
        component={Link}
        to="/expression-of-self"
        sx={{
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          height: { xs: 260, md: 420 },
          textDecoration: 'none',
          '&:hover .banner-overlay': { opacity: 0.55 },
          '&:hover .banner-cta': { opacity: 1, transform: 'translateY(0)' },
        }}
      >
        <Box
          component="img"
          src={ASSETS.expressionOfSelfBanner}
          alt="An Expression of Self"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          className="banner-overlay"
          sx={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(64,41,44,0.7) 0%, transparent 60%)',
            transition: 'opacity 0.4s',
          }}
        />
        <Box
          sx={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            p: { xs: 3, md: 6 },
          }}
        >
          <Typography variant="overline" sx={{ color: '#e8d5c4', fontSize: '0.75rem' }}>
            BRAND ASSET DESIGN
          </Typography>
          <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '3rem' } }}>
            An Expression of Self
          </Typography>
          <Typography
            className="banner-cta"
            variant="body2"
            sx={{
              color: '#e8d5c4',
              mt: 1,
              opacity: 0,
              transform: 'translateY(8px)',
              transition: 'opacity 0.3s, transform 0.3s',
            }}
          >
            View Project →
          </Typography>
        </Box>
      </Box>

      {/* ── WORK GRID ── */}
      <Box id="work" sx={{ position: 'relative', py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 } }}>
        <CraftPaperBg flipY={false} />
        <Box component="img" src={ASSETS.craftPaper} alt="" aria-hidden="true"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, pointerEvents: 'none' }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', mb: 1, fontSize: '0.75rem' }}>
            SELECTED WORK
          </Typography>
          <Divider sx={{ width: 60, mx: 'auto', borderColor: '#ae8f8e', mb: 6, borderWidth: 1 }} />
          <Grid container spacing={3}>
            {workItems.filter((item) => item.showInGrid).map((item) => (
              <Grid size={{ xs: 6, md: 4 }} key={item.title}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    '&:hover .work-img': { transform: 'scale(1.04)' },
                  }}
                >
                  <CardActionArea component={Link} to={item.path}>
                    <Box sx={{ overflow: 'hidden', aspectRatio: '3/2' }}>
                      <CardMedia
                        className="work-img"
                        component="img"
                        image={item.img}
                        alt={item.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      />
                    </Box>
                    <CardContent sx={{ px: 0, pt: 1.5, pb: '8px !important' }}>
                      <Typography variant="overline" sx={{ fontSize: '0.7rem', color: '#ae8f8e' }}>
                        {item.subtitle}
                      </Typography>
                      <Typography variant="h6" sx={{ fontSize: '1.1rem', mt: 0.3 }}>
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
        
    {/* ══ FOOTER ══ */}
    <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 6, md: 10 }}}>
    <CraftPaperBg flipY={true} />
    <Box sx={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between', alignItems: 'flex-start',
        gap: { xs: 4, sm: 0 }, px: { xs: 5, md: 8 }, py: { xs: 5, md: 6 },
    }}>
        <Box>
        <Typography sx={{ fontFamily: serif, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' }, color: brown, lineHeight: 1.5, letterSpacing: '0.04em' }}>
            PROJECT INQUIRIES
        </Typography>
        <Typography component="a" href="mailto:jasmineyjl@hotmail.com" sx={{
            fontFamily: serif, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' },
            color: brown, lineHeight: 1.5, display: 'block',
            textDecoration: 'none', '&:hover': { textDecoration: 'underline' },
        }}>
            jasmineyjl@hotmail.com
        </Typography>
        </Box>
        <Box>
        <Typography sx={{ fontFamily: serif, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' }, color: brown, lineHeight: 1.5, letterSpacing: '0.04em' }}>
            SOCIAL
        </Typography>
        <Typography sx={{ fontFamily: serif, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' }, color: brown, lineHeight: 1.5 }}>
            <Box component="a" href="https://www.instagram.com/whathebleep/" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Instagram
            </Box>&emsp;&emsp;<Box component="a" href="https://www.linkedin.com/in/jasmine-lin-944454207/" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            LinkedIn
            </Box>
        </Typography>
        </Box>
    </Box>
    </Box>
    </Box>
  );
}
