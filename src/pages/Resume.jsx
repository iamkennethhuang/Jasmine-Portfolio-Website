import { Box, Typography, Divider, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { ASSETS } from '../assets';

function CraftPaperBg({ opacity = 0.4 }) {
  return (
    <Box
      component="img" src={ASSETS.craftPaper} alt="" aria-hidden="true"
      sx={{ position: 'absolute', top: 0, left: '-5%', width: '110%', height: '100%', objectFit: 'cover', opacity, pointerEvents: 'none', zIndex: 0 }}
    />
  );
}

const resumeSections = [
  {
    heading: 'Education',
    items: [
      { title: 'San Jose State University', detail: 'B.S. Advertising, Minor in Graphic Design · Expected May 2026' },
      { title: 'Relevant Coursework', detail: 'Brand Management, Publication Design, Advertising Campaigns, Typography, Interactive Media' },
    ],
  },
  {
    heading: 'Skills',
    items: [
      { title: 'Design Tools', detail: 'Adobe Photoshop, Illustrator, InDesign, Figma, Canva' },
      { title: 'Core Skills', detail: 'Brand Identity, Editorial Design, Campaign Conceptualization, Typography, Visual Storytelling' },
      { title: 'Soft Skills', detail: 'Communication, Adaptability, Collaboration, Creative Problem Solving, Bilingual (English / Mandarin)' },
    ],
  },
  {
    heading: 'Experience',
    items: [
      { title: 'Fashion Retail Sales Associate', detail: 'Various — United States · Developed client communication skills, visual merchandising, and brand representation.' },
      { title: 'Freelance Brand Design', detail: 'Self-Employed · Personal branding, logo design, and visual identity projects.' },
    ],
  },
  {
    heading: 'Honors & Awards',
    items: [
      { title: 'Young Ones Student Awards', detail: 'Entry — Whiskas Campaign Advertising Concept' },
      { title: 'ADV 131 Final Portfolio', detail: 'San Jose State University — Spring 2026' },
    ],
  },
];

export default function Resume() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Header */}
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 14, md: 18 }, pb: { xs: 6, md: 8 }, textAlign: 'center', backgroundColor: '#f5ede8' }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ fontSize: '0.75rem', color: '#ae8f8e' }}>CURRICULUM VITAE</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, mt: 1 }}>Resume</Typography>
          <Divider sx={{ width: 80, mx: 'auto', mt: 3, borderColor: '#ae8f8e' }} />
        </Box>
      </Box>

      {/* Name card */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 6, md: 10 }, backgroundColor: '#faf5f0' }}>
        <CraftPaperBg opacity={0.25} />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 900, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Box
                component="img" src={ASSETS.profilePhoto} alt="Jasmine Lin"
                sx={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 20px rgba(64,41,44,0.18)' }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' } }}>Jasmine Lin</Typography>
              <Typography variant="body1" sx={{ color: '#ae8f8e', fontStyle: 'italic', mb: 1 }}>Yi Chen Lin</Typography>
              <Typography variant="body1">
                Creative designer with a passion for brand identity, editorial layout, and meaningful visual communication.
                Bilingual (English / Mandarin). Based in the San Francisco Bay Area.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Resume sections */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 8 }, backgroundColor: '#f5ede8', position: 'relative', overflow: 'hidden' }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 900, mx: 'auto' }}>
          {resumeSections.map((section, i) => (
            <Box key={section.heading} sx={{ mb: 8 }}>
              <Typography variant="overline" sx={{ fontSize: '0.75rem', color: '#ae8f8e' }}>
                {section.heading.toUpperCase()}
              </Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 3 }}>
                {section.heading}
              </Typography>
              <Divider sx={{ borderColor: '#ae8f8e', mb: 3 }} />
              <List disablePadding>
                {section.items.map((item) => (
                  <ListItem
                    key={item.title}
                    disablePadding
                    sx={{ mb: 2, display: 'block' }}
                  >
                    <Paper
                      elevation={0}
                      sx={{ backgroundColor: 'rgba(250,245,240,0.8)', p: 3, borderLeft: '3px solid #ae8f8e', borderRadius: 0 }}
                    >
                      <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 0.5 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#6b4c4f', lineHeight: 1.8 }}>{item.detail}</Typography>
                    </Paper>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
