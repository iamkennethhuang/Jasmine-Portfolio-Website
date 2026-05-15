import { Box, Typography } from '@mui/material';
import { ASSETS } from '../assets';

// ─── design tokens ────────────────────────────────────────────────
const serif = 'Cormorant Garamond, serif';
const brown = '#40292c';
const mauve = '#ae8f8e';
const cream = '#f5ede8';

// ─── shared sub-components ────────────────────────────────────────
function ItalicHeading({ children, align = 'left', sx: extra = {} }) {
  return (
    <Typography sx={{
      fontFamily: serif, fontWeight: 700, fontStyle: 'italic',
      fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '4.5rem' },
      color: brown, lineHeight: 1,
      textAlign: align,
      ...extra,
    }}>
      {children}
    </Typography>
  );
}

function BodyText({ children, sx: extra = {} }) {
  return (
    <Typography sx={{
      fontFamily: serif, fontWeight: 600,
      fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' },
      color: brown, lineHeight: 1.9,
      ...extra,
    }}>
      {children}
    </Typography>
  );
}

// ─── craft paper texture overlay ─────────────────────────────────
function CraftPaperBg({ opacity = 1, flipY = false }) {
  return (
    <Box
      component="img" src={ASSETS.craftPaper} alt="" aria-hidden="true"
      sx={{ position: 'absolute', top: 0, left: '-5%', width: '110%', height: '100%', objectFit: 'cover', opacity, pointerEvents: 'none', zIndex: 0, transform: flipY ? 'scaleY(-1)' : 'none' }}
    />
  );
}

// ─── page ─────────────────────────────────────────────────────────
export default function AnExpressionOfSelf() {
  return (
    <Box component="main" sx={{ position: 'relative', overflowX: 'hidden' }}>

      {/* ══ HEADLINE ══ */}
      <Box sx={{ position: 'relative', zIndex: 1, overflow: 'hidden', pt: { xs: 6, sm: 8, md: 12 }, pb: { xs: 5, md: 8 } }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 4, sm: 6, md: 8, lg: '8.75%' } }}>
          <Typography sx={{
            fontFamily: serif, fontWeight: 700,
            fontSize: { xs: '2.2rem', sm: '3rem', md: '4.5rem', lg: '5.5rem' },
            color: brown, lineHeight: 1, textAlign: 'center'
          }}>
            AN EXPRESSION OF SELF
          </Typography>
          <Typography sx={{
            fontFamily: serif, fontWeight: 400,
            fontSize: { xs: '0.9rem', sm: '1.05rem', md: '1.5rem', lg: '2rem' },
            color: brown, letterSpacing: { xs: '0.15em', md: '0.22em' },
            mt: { xs: 1.5, md: 2 },
            textAlign: 'center',
          }}>
            —BRAND ASSET DESIGN—
          </Typography>
        </Box>
      </Box>

      {/* ══ BANNER IMAGE ══ */}
      <Box sx={{ position: 'relative', width: '100%', height: { xs: 240, sm: 380, md: 560, lg: 700 }, overflow: 'hidden' }}>
        <CraftPaperBg opacity={1} flipY={true} />
        <Box component="img" src={ASSETS.expressionOverview} alt="An Expression of Self" sx={{
          position: 'relative', zIndex: 1,
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block',
        }} />
      </Box>

      {/* ══ DESCRIPTION + HEADING ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 8, md: 10 }, pb: { xs: 2, md: 3 } }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 900, mx: 'auto', px: { xs: 4, md: 6 } }}>
          <BodyText sx={{ fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.85rem' }, fontWeight: 700, lineHeight: 1.3, mb: { xs: 2, md: 3 } }}>
            A personal branding project inspired by who I am, how I communicate, and the way I connect with
            people. I designed a custom logo and brand asset system that reflects my personality, values, and
            creative journey through thoughtful visual storytelling.
          </BodyText>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 } }}>
        <CraftPaperBg flipY={true} />
        <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 4, sm: 6, md: 8, lg: '8.75%' } }}>
          <Typography sx={{
            fontFamily: serif, fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.8rem', md: '4rem', lg: '5.5rem' },
            color: brown, lineHeight: 1.05,
          }}>
            MY VALUE, IDENTITY, PERSONALITY
          </Typography>
        </Box>
      </Box>

      {/* ══ BACKSTORY ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 12 } }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 900, mx: 'auto', px: { xs: 4, md: 6 } }}>
          <ItalicHeading sx={{ mb: { xs: 3, md: 4 } }}>Backstory</ItalicHeading>
          <BodyText sx={{ mb: { xs: 5, md: 7 },  fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.85rem' }, fontWeight: 700, lineHeight: 1.1}}>
            My story begins in Taiwan, where my love for communication first started. From first grade through
            middle school, I participated in speech contests that were never just about reading a script, but about
            telling a story. To truly engage an audience, you had to express emotion through your voice, facial
            expressions, and presence. But the real question was always: how do you express emotion without faking it?
          </BodyText>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: { xs: '100%', md: '90%' }, aspectRatio: '16/9', flexShrink: 0 }}>
              <Box
                component="iframe"
                src="https://www.youtube.com/embed/oCL6ywXn1yw"
                title="Backstory video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                sx={{ width: '100%', height: '100%', border: 0, display: 'block' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══ YOU FEEL IT ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden',  }}>
        <CraftPaperBg flipY={true}/>
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 900, mx: 'auto', px: { xs: 4, md: 6 } }}>
          <BodyText sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: '1.3rem', md: '1.6rem', lg: '2rem' }, fontWeight: 700 }}>The answer I discovered was simple:</BodyText>
          <ItalicHeading align="center" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '5.5rem' }, py: { xs: 8, md: 12 } }}>
            You Feel It!
          </ItalicHeading>
          <BodyText sx={{ mb: { xs: 3, md: 4 } ,  fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.85rem' }, fontWeight: 700, lineHeight: 1.1}}>
            Those experiences taught me how to react naturally, stay adaptable under pressure, and connect with
            people in an honest way. They also helped me realize that I&rsquo;m an extroverted person who genuinely
            enjoys performing, engaging, and communicating with others.
          </BodyText>
          <BodyText sx={{ fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.85rem' }, fontWeight: 700, lineHeight: 1.1 }}>
            Years later, after moving to the United States, I continued developing these skills through client-facing
            roles in fashion retail. Working in sales wasn&rsquo;t just about selling, but about understanding people,
            communicating value, and representing a brand through the way you speak, present yourself, and connect with
            customers. The experience refined my communication skills and deepened my understanding of people, shaping
            who I am and what I&rsquo;m good at today.
          </BodyText>
        </Box>
      </Box>

      {/* ══ VALUE / PERSONALITY / PURPOSE ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 8, md: 14 } }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 904, mx: 'auto', px: { xs: 4, md: 6 } }}>
          {[
            {
              label: 'Value',
              text: 'My values lie in connection, authenticity, and adaptability. I believe deeply in genuine communication and meaningful human connection, whether through storytelling, branding, or everyday interactions. Growing up in Taiwan and later moving to the United States allowed me to blend Eastern and Western perspectives, helping me connect naturally with people from diverse backgrounds.',
            },
            {
              label: 'Personality',
              text: 'At my core, I am extroverted, playful, and expressive. I bring warmth, energy, and empathy into the way I interact with others, and I genuinely enjoy creating spaces where people feel welcomed, understood, and connected.',
            },
            {
              label: 'Purpose',
              text: "My dream is to one day open my own yoga studio, Elysium, a space centered around creativity, community, and peace. Beyond teaching yoga, I hope to shape the studio's branding, visual identity, and atmosphere using the creative skills I've developed through advertising and design. More than anything, I want to create a space where people feel inspired, cared for, and free to fully be themselves. My purpose is simple: to make people feel understood, and to create experiences that leave a positive impact, even beyond the moments we share.",
            },
          ].map(({ label, text }) => (
            <Box key={label}>
              <ItalicHeading sx={{ mb: { xs: 2, md: 3 } }}>{label}</ItalicHeading>
              <BodyText sx={{fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.85rem' }, fontWeight: 700, lineHeight: 1.1}}>{text}</BodyText>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ══ BRAND ASSET PACK ══ */}
      <Box sx={{ position: 'relative', overflow: 'visible', zIndex: 2 }}>
        <CraftPaperBg flipY={true} />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ px: { xs: 4, sm: 6, md: 8, lg: '8.75%' }}}>
            <Typography sx={{
              fontFamily: serif, fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.8rem', md: '4rem', lg: '5.5rem' },
              color: brown, lineHeight: 1.05,
            }}>
              BRAND ASSET PACK
            </Typography>
          </Box>
          {/* Logo (left, overflowing) + Description text (right) */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '55fr 45fr' }, alignItems: 'center' }}>
            <Box sx={{ position: 'relative', zIndex: 2, height: { xs: 320, sm: 480, md: 660, lg: 800 }, ml: { xs: 0, md: '-7%' }, transform: 'translateY(10%)' }}>
              <Box component="img" src={ASSETS.logoOverview} alt="Logo Overview" sx={{
                width: { xs: '100%', md: '114%' }, height: '100%', objectFit: 'cover', display: 'block', 
              }} />
            </Box>
            <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 4, md: 6, lg: 8 }, py: { xs: 5, md: 8 } }}>
              <BodyText sx={{ textAlign: 'justify', fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.85rem' }, fontWeight: 700, lineHeight: 1.1 }}>
                Based on who I am and how I show up in the world, I created a brand asset pack that feels true to
                me. The logo features a serif J with jasmine flowers, representing both my name and the softness,
                honesty, and gentle strength I bring into my interactions. I applied this identity across stationery,
                clothing, and coffee cups, with each piece reflecting a sense of warmth, authenticity, and
                personality. Together, these elements form a brand that feels like me, both inside and out.
              </BodyText>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══ STATIONERY SYSTEM ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 6, md: 8 }, pb: 15, backgroundColor: mauve, zIndex: 1 }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <ItalicHeading align="right" sx={{ px: { xs: 4, md: 6, lg: 8 }, mb: { xs: 3, md: 4 } }}>
            Stationery System
          </ItalicHeading>
          <Box sx={{ px: { xs: 0, md: '1.6%' } }}>
            <Box component="img" src={ASSETS.stationery} alt="Brand Stationery System" sx={{ width: '90%', display: 'block', ml: 'auto' }} />
          </Box>
        </Box>
      </Box>

      {/* ══ HOT CUP DESIGN ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 6, md: 8 }, pb: 15 }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <ItalicHeading align="right" sx={{ px: { xs: 4, md: 6, lg: 8 }, mb: { xs: 3, md: 4 } }}>
            Hot Cup Design
          </ItalicHeading>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '26fr 64fr' },
            gap: { xs: 2, md: '1%' },
            px: { xs: 0, md: '1.4%' },
            alignItems: 'start',
          }}>
            {/* Thumbnails stacked on left (hidden on mobile) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 1.5 }}>
              <Box component="img" src={ASSETS.hotCupThumb} alt="Hot cup thumbnail" sx={{ width: '97%', display: 'block' }} />
              <Box component="img" src={ASSETS.hotCupThumb} alt="Hot cup thumbnail 2" sx={{ width: '97%', display: 'block' }} />
            </Box>
            {/* Large photo */}
            <Box component="img" src={ASSETS.hotCoffeeCupPhoto} alt="Hot Coffee Cup Design" sx={{ width: '100%', display: 'block' }} />
          </Box>
        </Box>
      </Box>

      {/* ══ COLD CUP LABEL DESIGN ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 20 }, backgroundColor: mauve }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <ItalicHeading align="right" sx={{ px: { xs: 4, md: 6, lg: 8 }, mb: { xs: 3, md: 4 } }}>
            Cold Cup Label Design
          </ItalicHeading>
          {/* Layered image area */}
          <Box sx={{ position: 'relative', px: { xs: 2, md: 0 } }}>
            {/* Dark brand card — top left, in front */}
            <Box component="img" src={ASSETS.coldCupLabelPhoto} alt="Cold Cup Brand Card"
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute', zIndex: 2,
                left: '4.2%',
                top: '-10%',
                width: '23%',
              }}
            />
            {/* Main cups photo — centered */}
            <Box sx={{ mx: 'auto', width: { xs: '100%', md: '83%' } }}>
              <Box component="img" src={ASSETS.coffeeCup} alt="Cold Cup Label Design" 
              sx={{ width: '100%', display: 'block' }} />
            </Box>
            {/* Pink label — bottom right */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: { xs: 4, md: '4%' }, mt: { xs: 3, md: 4 } }}>
              <Box component="img" src={ASSETS.coldCupLabelDark} alt="Cold Cup Label" 
              sx={{ 
                width: { xs: '55%', sm: '40%', md: '31%' }, 
                display: 'block', 
                position: 'absolute', 
                zIndex: 2, 
                bottom: '-15%', 
                right: '3%' 
                }} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ══ LIGHT APPAREL DESIGN ══ */}
      <Box sx={{ position: 'relative', overflow: 'visible', backgroundColor: mauve, zIndex: 2 }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <ItalicHeading align="right" sx={{ 
            pt: { xs: 6, md: 8 }, 
            px: { xs: 4, md: 6 }, 
            mb: { xs: 3, md: 4 } }}>
            Light Apparel Design
          </ItalicHeading>
          <Box sx={{ overflow: 'hidden' }}>
            <Box component="img" src={ASSETS.sweatshirtBack} alt="Sweatshirt Back" 
            sx={{ width: '100%', display: 'block' }} />
          </Box>
          {/* Sweatshirt front — right-aligned, shifted down 10%, overlaps next section by 50% */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            pr: { xs: 4, md: 6 },
            position: 'relative',
            zIndex: 2,
            transform: 'translateY(10%)',
          }}>
            <Box component="img" src={ASSETS.sweatshirt} alt="Sweatshirt Front"
            sx={{ width: '70%', display: 'block' }} />
          </Box>
        </Box>
      </Box>

      {/* ══ DARK APPAREL DESIGN ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden', zIndex: 1, pb: { xs: 30, md: 30 } }}>
        <CraftPaperBg />
        <Box sx={{ position: 'relative', zIndex: 1, pt: { xs: '5%', md: '5%' } }}>
          <ItalicHeading align="right" sx={{ pt: { xs: 6, md: 8 }, px: { xs: 4, md: 6 }, mb: { xs: 3, md: 4 } }}>
            Dark Apparel Design
          </ItalicHeading>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, pr: { xs: 7 }, gap: { xs: 2, md: 3 } }}>
            <Box component="img" 
            src={ASSETS.darkSweatshirtFront} 
            alt="Dark Sweatshirt Front" 
            sx={{ width: '100%', display: 'block' }} />
            <Box component="img" 
            src={ASSETS.darkSweatshirtBack} 
            alt="Dark Sweatshirt Back" 
            sx={{ width: '100%', display: 'block' }} />
          </Box>
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
