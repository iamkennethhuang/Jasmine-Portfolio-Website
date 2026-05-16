import { useState } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Divider, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';
import Navbar from '../components/Navbar';

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
  { title: 'An Expression of Self',  subtitle: 'Brand Asset Design',     img: ASSETS.expressionOfSelfBanner, path: '/expression-of-self',      showInGrid: false,  hoverTitle: '',                  hoverSubtitle: '' },
  { title: "L'Oréal Paris Campaign", subtitle: 'Brand Campaign Design', img: ASSETS.lorealInvitation,       path: '/loreal-paris-campaign',   showInGrid: true,   hoverTitle: "L'ORÉAL PARIS",     hoverSubtitle: "MOTHER'S DAY CAMPAIGN" },
  { title: 'Vogue Cover Mockup',      subtitle: 'Editorial Design',       img: ASSETS.vogueCover,             path: '/work',                    showInGrid: true,   hoverTitle: 'VOGUE',             hoverSubtitle: 'COVER DESIGN' },
  { title: 'Stationery System',       subtitle: 'Brand Identity',          img: ASSETS.businessCard,           path: '/work',                    showInGrid: true,   hoverTitle: 'SEPHORA',           hoverSubtitle: 'REBRAND' },
  { title: '2-Page Layout',           subtitle: 'Publication Design',      img: ASSETS.twoPageLayout,          path: '/work',                    showInGrid: true,   hoverTitle: 'VOGUE',             hoverSubtitle: 'LAYOUT DESIGN' },
  { title: 'Whiskas Campaign',        subtitle: 'Advertising Design',      img: ASSETS.whiskas,                path: '/whiskas-campaign',        showInGrid: true,   hoverTitle: 'WHISKAS',           hoverSubtitle: 'CAMPAIGN' },
  { title: 'Billboard Mockup',        subtitle: 'Outdoor Advertising',     img: ASSETS.billboard,              path: '/work',                    showInGrid: true,   hoverTitle: 'CHRISTIAN LOUBOUTIN', hoverSubtitle: 'CAMPAIGN' },
];

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [loadedItems, setLoadedItems] = useState({});

  return (
    <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar showLogo={false} />
      {/* ── HERO ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
        <Box sx={{ position: 'relative', zIndex: 2, width: { xs: '80%', sm: '50%', md: '36%' }, maxWidth: 520, mb: 5 }}>
          {!heroLoaded && (
            <Skeleton variant="rectangular" width="100%" sx={{ aspectRatio: '2/3', borderRadius: 2 }} />
          )}
          <Box
            component="img"
            src={ASSETS.heroImage}
            alt="Jasmine Lin"
            onLoad={() => setHeroLoaded(true)}
            sx={{
              display: heroLoaded ? 'block' : 'none',
              width: '100%'
            }}
          />
        </Box>

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
          height: { xs: 260, md: 720 },
          textDecoration: 'none',
          '&:hover .banner-overlay': { opacity: 1 },
          '&:hover .banner-text': { opacity: 1 },
        }}
      >
        <CraftPaperBg flipY={true} />
        {!bannerLoaded && (
          <Skeleton variant="rectangular" sx={{ position: 'absolute', inset: 0, zIndex: 4 }} />
        )}
        <Box
          component="img"
          src={ASSETS.expressionOfSelfBanner}
          alt="An Expression of Self"
          onLoad={() => setBannerLoaded(true)}
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        />
        <Box
          className="banner-overlay"
          sx={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(107,69,74,0.95)',
            opacity: 0,
            transition: 'opacity 0.4s ease',
            zIndex: 2,
          }}
        />
        <Box
          className="banner-text"
          sx={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.4s ease',
            zIndex: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Viaoda Libre', serif",
              fontWeight: 400,
              color: '#fff',
              fontSize: { xs: '1.6rem', md: '3.2rem', lg: '4rem' },
              letterSpacing: { xs: '0.2em', md: '0.08em' },
              textAlign: 'center',
              lineHeight: 1.2,
              px: 2,
            }}
          >
            AN EXPRESSION OF SELF
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Viaoda Libre', serif",
              fontWeight: 400,
              color: '#fff',
              fontSize: { xs: '0.9rem', md: '1.4rem', lg: '1.8rem' },
              letterSpacing: '0.22em',
              textAlign: 'center',
              mt: { xs: 1, md: 2 },
            }}
          >
            —BRAND ASSET DESIGN—
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
                    '&:hover .work-hover-overlay': { opacity: 1 },
                  }}
                >
                  <CardActionArea component={Link} to={item.path}>
                    <Box sx={{ overflow: 'hidden', aspectRatio: '3/2', position: 'relative' }}>
                      {!loadedItems[item.title] && (
                        <Skeleton variant="rectangular" sx={{ position: 'absolute', inset: 0, zIndex: 2 }} />
                      )}
                      <CardMedia
                        className="work-img"
                        component="img"
                        image={item.img}
                        alt={item.title}
                        onLoad={() => setLoadedItems(prev => ({ ...prev, [item.title]: true }))}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      />
                      <Box
                        className="work-hover-overlay"
                        sx={{
                          position: 'absolute', inset: 0,
                          backgroundColor: 'rgba(107,69,74,0.95)',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                          display: 'flex', flexDirection: 'column',
                          alignItems: 'center', justifyContent: 'center',
                          px: 2,
                        }}
                      >
                        <Typography sx={{
                          fontFamily: "'Viaoda Libre', serif",
                          fontWeight: 400,
                          color: '#fff',
                          fontSize: { xs: '1.2rem', md: '1.6rem', lg: '2rem' },
                          letterSpacing: '0.03em',
                          textAlign: 'center',
                          lineHeight: 1.2,
                        }}>
                          {item.hoverTitle}
                        </Typography>
                        <Typography sx={{
                          fontFamily: "'Viaoda Libre', serif",
                          fontWeight: 400,
                          color: '#fff',
                          fontSize: { xs: '0.6rem', md: '0.75rem', lg: '0.85rem' },
                          letterSpacing: '0.22em',
                          textAlign: 'center',
                          mt: 1,
                        }}>
                          — {item.hoverSubtitle} —
                        </Typography>
                      </Box>
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
