import { useState } from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import { ASSETS } from '../assets';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';

function CraftPaperBg({ opacity = 0.45, flipY = false }) {
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
        transform: flipY ? 'scaleY(-1)' : 'none',
      }}
    />
  );
}

export default function About() {
  const [loaded, setLoaded] = useState({});
  const markLoaded = (key) => setLoaded(prev => ({ ...prev, [key]: true }));

  return (
    <>
    <Box component="main" sx={{ overflowX: 'hidden'}}>
      <Navbar />

      {/* ══ HERO ══ */}
      <Box sx={{
        position: 'relative',
        height: { xs: 340, sm: 460, md: 620 },
        overflow: 'hidden',
        background: "#553B36",
        zIndex: 2,
      }}>
        {!loaded.aboutMePhotoNoBg && (
          <Skeleton variant="rectangular" sx={{ position: 'absolute', inset: 0, zIndex: 6, backgroundColor: 'rgba(255,255,255,0.08)' }} />
        )}
        <Box component="img" src={ASSETS.aboutMePhotoNoBg} alt="Jasmine Lin"
          onLoad={() => markLoaded('aboutMePhotoNoBg')}
          sx={{
            position: 'absolute', right: 0, top: 0,
            height: '100%', width: 'auto',
            zIndex: 5,
          }} />
      </Box>

      {/* ══ INTRO TEXT ══ */}
      <Box sx={{
        position: 'relative',
        pt: { xs: '80px', sm: '120px', md: '180px' },
        pb: { xs: 8, md: 12 },
        textAlign: 'center'
      }}>
        <CraftPaperBg opacity={1} />

        {/* Profile photo — overlaps upward into hero section */}
        <Box sx={{
          position: 'absolute',
          top: { xs: '-10%', sm: '-30%', md: '-50%' },
          left: { xs: '4%', md: '6%' },
          width: { xs: 130, sm: 190, md: 370 },
          zIndex: 10,
        }}>
          {!loaded.profilePhoto && (
            <Skeleton variant="rectangular" sx={{ width: '100%', aspectRatio: '3/4', boxShadow: '0 8px 40px rgba(64,41,44,0.3)' }} />
          )}
          <Box component="img" src={ASSETS.profilePhoto} alt="Jasmine Lin profile"
            onLoad={() => markLoaded('profilePhoto')}
            sx={{
              display: loaded.profilePhoto ? 'block' : 'none',
              width: '100%',
              boxShadow: '0 8px 40px rgba(64,41,44,0.3)',
            }}
          />
        </Box>

        {/* Rose */}
        <Box component="img" src={ASSETS.rose2} alt="" aria-hidden="true" sx={{
          position: 'absolute', top: '-10%', left: '0%',
          width: { xs: '100%', md: '90%' },
          opacity: 0.28, transform: 'rotate(0deg)',
          pointerEvents: 'none', zIndex: 1,
        }} />

        {/* Cursive watermark */}
        <Box component="img" src={ASSETS.welcomeToMyWorld} alt="" aria-hidden="true" sx={{
          position: 'absolute', top: '37%', left: '22%',
          width: '100%', opacity: 0.25,
          pointerEvents: 'none', zIndex: 0,
        }} />

        <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 6 }, pb: { xs: 6, md: 10 } }}>
          <Typography component="p" sx={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
            fontSize: { xs: '1.35rem', sm: '1.7rem', md: '2.2rem' },
            color: '#40292c', lineHeight: 1.4, mb: 0,
          }}>
            Hello beautiful souls!
          </Typography>
          <Typography component="p" sx={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
            fontSize: { xs: '1.35rem', sm: '1.7rem', md: '2.5rem' },
            color: '#40292c', lineHeight: 1.4, mb: 0,
          }}>
            I&rsquo;m Jasmine Lin, aka Yi Chen Lin, a
          </Typography>
          <Typography component="p" sx={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5.5rem' },
            color: '#40292c', lineHeight: 1,
            my: { xs: 1, md: 2 }, letterSpacing: '-0.02em',
            ml: { xs: 0, md: '20%' },
          }}>
            creative designer
          </Typography>
          <Typography component="p" sx={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
            fontSize: { xs: '1.35rem', sm: '1.7rem', md: '2.2rem' },
            color: '#40292c', lineHeight: 1.6, mb: 0,
          }}>
            turning ideas into something
          </Typography>
          <Typography component="p" sx={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
            fontSize: { xs: '1.6rem', sm: '2rem', md: '2.6rem' },
            color: '#40292c', lineHeight: 1.5,
          }}>
            meaningful and beautifully crafted.
          </Typography>
        </Box>
      </Box>

      {/* ══ ABOUT JASMINE ══ */}
      <Box sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 16 }
      }}>
        <CraftPaperBg opacity={1} flipY={true}/>

        {/* Chinese char — left edge */}
        <Box component="img" src={ASSETS.chineseChar3} alt="" aria-hidden="true" sx={{
          position: 'absolute', left: 0, top: '8%',
          height: { xs: '18%', md: '30%' },
          opacity: 1, pointerEvents: 'none', zIndex: 0,
        }} />
        {/* Chinese char — right edge */}
        <Box component="img" src={ASSETS.chineseChar2} alt="" aria-hidden="true" sx={{
          position: 'absolute', right: 0, top: '8%',
          height: { xs: '18%', md: '30%' },
          opacity: 1, pointerEvents: 'none', zIndex: 0,
        }} />

        <Box sx={{
          position: 'relative', zIndex: 1,
          maxWidth: 640, mx: 'auto',
          px: { xs: 5, md: 4 }, textAlign: 'center',
        }}>
          <Typography component="h2" sx={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 700,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            color: '#40292c', lineHeight: 1.1,
            mb: { xs: 4, md: 6 },
          }}>
            ABOUT JASMINE
          </Typography>
          <Typography sx={{
            fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
            fontSize: { xs: '1.05rem', md: '1.25rem' },
            color: '#40292c', lineHeight: 1.9, textAlign: 'justify',
          }}>
            My creative journey started early, back in primary school. I loved making things by hand, from crocheted
            coasters to small accessories, and even created my own mini brand and catalog to sell to classmates,
            which was my first taste of design and entrepreneurship.
          </Typography>
        </Box>
      </Box>

      {/* ══ EXTENDED BIO ══ */}
      <Box sx={{
        position: 'relative',
        py: { xs: 8, md: 12 }
      }}>
        <CraftPaperBg opacity={1} />
        {/* Rose */}
        <Box component="img" src={ASSETS.rose2} alt="" aria-hidden="true" sx={{
          position: 'absolute', top: '-70%', left: '-30%',
          width: { xs: '100%', md: '100%' },
          opacity: 0.28, transform: 'scaleX(-1)',
          pointerEvents: 'none', zIndex: 1,
        }} />
        <Box sx={{
          position: 'relative', zIndex: 1,
          maxWidth: 860, mx: 'auto',
          px: { xs: 4, md: 8 },
          display: 'flex', gap: { xs: 4, md: 5 }, alignItems: 'stretch',
        }}>
          {/* Vertical accent line */}
          <Box sx={{ width: '1px', flexShrink: 0, backgroundColor: '#40292c', opacity: 0.35 }} />
          <Box>
            <Typography sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '1.05rem', md: '1.25rem' },
              color: '#40292c', lineHeight: 1.9, textAlign: 'justify', mb: 3,
            }}>
              Years later, working with brands like Coach and Michael Kors taught me how to understand people, how
              to connect, observe, and anticipate what resonates. Being a top sales associate wasn&rsquo;t just about
              selling, but about understanding what customers like and how to communicate value. You represent the
              brand, you dress like the brand, and you speak like the brand.
            </Typography>
            <Typography sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '1.05rem', md: '1.25rem' },
              color: '#40292c', lineHeight: 1.9, textAlign: 'justify',
            }}>
              That&rsquo;s when I realized I want to work where creativity meets strategy. It led me to pursue
              advertising on a creative track, where I bring together my passion for craft, design, human insight,
              and selling.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ══ PORTRAIT + SERVICES ══ */}
      <Box sx={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f5ede8' }}>
        <CraftPaperBg opacity={1} flipY={true} />

        <Box sx={{
          position: 'relative', zIndex: 1,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          minHeight: { md: 700 },
        }}>
          {/* Left: tall portrait bleeding off edge */}
          <Box sx={{
            position: 'relative',
            overflow: 'hidden',
            height: { xs: 480, md: '100%' },
          }}>
            {!loaded.dscPortrait && (
              <Skeleton variant="rectangular" sx={{ position: 'absolute', inset: 0, zIndex: 1 }} />
            )}
            <Box component="img" src={ASSETS.dscPortrait} alt="Jasmine Lin"
              onLoad={() => markLoaded('dscPortrait')}
              sx={{
                position: 'absolute',
                left: { xs: 0, md: '-8%' },
                top: 0,
                height: '100%',
                width: { xs: '100%', md: 'auto' },
                objectFit: { xs: 'cover', md: 'unset' },
                objectPosition: 'center top',
              }} />
          </Box>

          {/* Right: Services */}
            <Box sx={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Box sx={{
            py: { xs: 8, md: 14 },
            px: { xs: 5, md: 8, lg: 10 },
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <Typography component="h2" sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '3rem', md: '4.5rem', lg: '5rem' },
              color: '#40292c', lineHeight: 1, mb: 4,
            }}>
              SERVICES
            </Typography>
            {[
              { label: 'BRANDING', items: ['Brand Identity Design', 'Logo / Identity Systems', 'Brand Guidelines', 'Rebranding'] },
              { label: 'CREATIVE', items: ['Creative Direction', 'Visual Design', 'Art Direction'] },
              { label: 'CAMPAIGN', items: ['Advertising Campaign Design', 'Campaign Concept Development', 'Social & Digital Campaign Assets'] },
            ].map((svc) => (
              <Box key={svc.label} sx={{ mb: { xs: 2.5, md: 3 } }}>
                <Typography sx={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 700,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  color: '#40292c', letterSpacing: '0.06em', mb: 0.5,
                }}>
                  {svc.label} —
                </Typography>
                {svc.items.map((item) => (
                  <Typography key={item} sx={{
                    fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    color: '#40292c', lineHeight: 1.85, pl: 1.5,
                  }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
          <Box sx={{
            py: { xs: 8, md: 12 },
            px: { xs: 5, md: 8, lg: 10 },
            backgroundColor: '#ae8f8e' 
          }}>
            <Typography component="h2" sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '3rem', md: '4.5rem', lg: '4.7rem' },
              color: '#40292c', lineHeight: 1,
              mb: { xs: 3, md: 4 },
            }}>
              CONTACT
            </Typography>
            <Typography component="a" href="mailto:jasmineyjl@hotmail.com" sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              color: '#40292c', lineHeight: 2, display: 'block',
              textDecoration: 'none', '&:hover': { textDecoration: 'underline' },
            }}>
              jasmineyjl@hotmail.com
            </Typography>
            {['Instagram', 'LinkedIn'].map((item) => (
              item === 'Instagram' ? (
                <Typography key={item} component="a" href="https://www.instagram.com/whathebleep/" target="_blank" rel="noopener noreferrer" sx={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
                  color: '#40292c', lineHeight: 2, display: 'block',
                  textDecoration: 'none', '&:hover': { textDecoration: 'underline' },
                }}>
                  {item}
                </Typography>
              ) : (
                <Typography key={item} component="a" href="https://www.linkedin.com/in/jasmine-lin-944454207/" target="_blank" rel="noopener noreferrer" sx={{
                  fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
                  color: '#40292c', lineHeight: 2, display: 'block',
                  textDecoration: 'none', '&:hover': { textDecoration: 'underline' },
                }}>
                  {item}
                </Typography>
              )
            ))}
          </Box>
          </Box>
        </Box>
      </Box>

      {/* ══ FOOTER ══ */}
      <Box sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ae8f8e',
        border: '0px 0px 0px 0px',
        pt: { xs: 20, md:30 }
      }}>
        <Box sx={{
          position: 'relative', zIndex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: { xs: 4, sm: 0 },
          px: { xs: 5, md: 8 },
          py: { xs: 5, md: 6 },
        }}>
          {/* Left: Project inquiries */}
          <Box>
            <Typography sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#40292c', lineHeight: 1.5, letterSpacing: '0.04em',
            }}>
              PROJECT INQUIRIES
            </Typography>
            <Typography component="a" href="mailto:jasmineyjl@hotmail.com" sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#40292c', lineHeight: 1.5, display: 'block',
              textDecoration: 'none', '&:hover': { textDecoration: 'underline' },
            }}>
              jasmineyjl@hotmail.com
            </Typography>
          </Box>
          {/* Right: Social */}
          <Box>
            <Typography sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#40292c', lineHeight: 1.5, letterSpacing: '0.04em',
            }}>
              SOCIAL
            </Typography>
            <Typography sx={{
              fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: '#40292c', lineHeight: 1.5,
            }}>
              <Box component="a" href="https://www.instagram.com/whathebleep/" target="_blank" rel="noopener noreferrer" sx={{
                color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' },
              }}>
                Instagram
              </Box>&emsp;&emsp;<Box component="a" href="https://www.linkedin.com/in/jasmine-lin-944454207/" target="_blank" rel="noopener noreferrer" sx={{
                color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' },
              }}>LinkedIn</Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    <BackToTop />
    </>
  );
}

