import { Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Divider, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { ASSETS } from '../assets';

export const projects = [
  {
    title: "An Expression of Self",
    subtitle: "Brand Asset Design",
    category: "BRANDING",
    img: ASSETS.expressionOfSelfBanner,
    path: '/expression-of-self',
    featured: true,
    description: "A personal branding project — custom logo, stationery, coffee cups, and clothing that reflect my identity.",
  },
  {
    title: "L'Oréal Paris Campaign",
    subtitle: "Brand Campaign Design",
    category: "ADVERTISING",
    img: ASSETS.lorealInvitation,
    path: '/loreal-paris-campaign',
    description: "Invitation design and campaign materials for a mock L'Oréal Paris brand experience.",
  },
  {
    title: "Vogue Cover Mockup",
    subtitle: "Editorial Design",
    category: "EDITORIAL",
    img: ASSETS.vogueCover,
    path: '/work',
    description: "Magazine cover concept and layout design inspired by Vogue's editorial aesthetic.",
  },
  {
    title: "Stationery System",
    subtitle: "Brand Identity",
    category: "BRANDING",
    img: ASSETS.businessCard,
    path: '/work',
    description: "Business card and stationery system built around a cohesive visual identity.",
  },
  {
    title: "2-Page Spread Layout",
    subtitle: "Publication Design",
    category: "EDITORIAL",
    img: ASSETS.twoPageLayout,
    path: '/work',
    description: "A print-ready two-page magazine spread with considered typography and image placement.",
  },
  {
    title: "Whiskas Campaign",
    subtitle: "Student Awards Entry",
    category: "ADVERTISING",
    img: ASSETS.whiskas,
    path: '/work',
    description: "Young Ones Student Awards entry — an advertising campaign concept for Whiskas.",
  },
  {
    title: "Billboard Mockup",
    subtitle: "Outdoor Advertising",
    category: "ADVERTISING",
    img: ASSETS.billboard,
    path: '/work',
    description: "Large-format outdoor advertising design mockup demonstrating spatial visual hierarchy.",
  },
];

function CraftPaperBg({ opacity = 0.35 }) {
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

export default function Work() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Header */}
      <Box
        sx={{
          position: 'relative', overflow: 'hidden',
          pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 8 },
          textAlign: 'center', backgroundColor: '#f5ede8',
        }}
      >
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ fontSize: '0.75rem', color: '#ae8f8e' }}>
            ADV 131 FINAL PORTFOLIO
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, mt: 1 }}>
            Selected Work
          </Typography>
          <Divider sx={{ width: 80, mx: 'auto', mt: 3, borderColor: '#ae8f8e' }} />
        </Box>
      </Box>

      {/* Featured project */}
      {projects.filter(p => p.featured).map((project) => (
        <Box
          key={project.title}
          component={Link}
          to={project.path}
          sx={{
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
            height: { xs: 300, md: 500 },
            textDecoration: 'none',
            '&:hover .feat-img': { transform: 'scale(1.03)' },
            '&:hover .feat-cta': { opacity: 1, transform: 'translateY(0)' },
          }}
        >
          <Box
            className="feat-img"
            component="img"
            src={project.img}
            alt={project.title}
            sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          />
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(64,41,44,0.75) 0%, transparent 55%)' }} />
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 4, md: 8 } }}>
            <Chip label={project.category} size="small" sx={{ backgroundColor: '#ae8f8e', color: '#fff', fontFamily: "'Josefin Sans', sans-serif", letterSpacing: '0.1em', mb: 1.5 }} />
            <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '1.8rem', md: '3.2rem' } }}>
              {project.title}
            </Typography>
            <Typography
              className="feat-cta"
              variant="body2"
              sx={{ color: '#e8d5c4', mt: 1, opacity: 0, transform: 'translateY(8px)', transition: 'opacity 0.3s, transform 0.3s' }}
            >
              View Project →
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Project grid */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 }, backgroundColor: '#faf5f0' }}>
        <CraftPaperBg opacity={0.25} />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1200, mx: 'auto' }}>
          <Grid container spacing={4}>
            {projects.filter(p => !p.featured).map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    '&:hover .work-img': { transform: 'scale(1.04)' },
                  }}
                >
                  <CardActionArea component={Link} to={project.path}>
                    <Box sx={{ overflow: 'hidden', aspectRatio: '3/2' }}>
                      <CardMedia
                        className="work-img"
                        component="img"
                        image={project.img}
                        alt={project.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      />
                    </Box>
                    <CardContent sx={{ px: 0, pt: 1.5, pb: '8px !important' }}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{ backgroundColor: 'transparent', border: '1px solid #ae8f8e', color: '#ae8f8e', fontFamily: "'Josefin Sans', sans-serif", letterSpacing: '0.1em', mb: 1, height: 22, fontSize: '0.65rem' }}
                      />
                      <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>{project.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#6b4c4f', mt: 0.5, fontSize: '0.9rem' }}>
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
