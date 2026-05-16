import { useRef, useState, useEffect } from 'react';
import { ASSETS } from '../assets';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import whiskasVideo07 from '../videos/whiskas-slide-07.mp4';
import whiskasVideo08 from '../videos/whiskas-slide-08.mp4';
import whiskasVideo09 from '../videos/whiskas-slide-09.mp4';
import whiskasVideo10 from '../videos/whiskas-slide-10.mp4';
import { Box, Typography } from '@mui/material';

// ─── craft paper texture overlay ─────────────────────────────────
function CraftPaperBg({ opacity = 1, flipY = false }) {
  return (
    <Box
      component="img" src={ASSETS.craftPaper} alt="" aria-hidden="true"
      sx={{ position: 'absolute', top: 0, left: '-5%', width: '110%', height: '100%', objectFit: 'cover', opacity, pointerEvents: 'none', zIndex: 0, transform: flipY ? 'scaleY(-1)' : 'none' }}
    />
  );
}

// ─── design tokens ────────────────────────────────────────────────
const serif = 'Cormorant Garamond, serif';
const brown = '#40292c';
const mauve = '#ae8f8e';
const cream = '#f5ede8';

// Slides in Figma vertical order (y-position ascending)
const imageSlides = [
  ASSETS.whiskasSlide01,
  ASSETS.whiskasSlide02,
  ASSETS.whiskasSlide04,
  ASSETS.whiskasSlide03,
];

const pairSlides = [
  ASSETS.whiskasSlide05,
  ASSETS.whiskasSlide06,
];

// Video slides (7–8)
const videoSlides = [
  whiskasVideo07,
  whiskasVideo08,
];

// Manual switcher videos (09 & 10)
const switcherVideos = [
  whiskasVideo09,
  whiskasVideo10,
];

const styles = {
  page: {
    backgroundColor: '#f5ede8',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
  },
  slideImg: {
    width: '100%',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    display: 'block',
  },
  slidingWindow: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
  },
  slidingImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'opacity 0.8s ease',
  },
  switcherWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    backgroundColor: '#1a0a1e',
  },
  switcherVideo: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'opacity 0.5s ease',
  },
  switcherBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    background: 'rgba(245,237,232,0.75)',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
    padding: 0,
  },
  switcherArrow: {
    width: '10px',
    height: '10px',
    borderTop: '2px solid #40292c',
    borderRight: '2px solid #40292c',
    display: 'inline-block',
  },
  switcherDots: {
    position: 'absolute',
    bottom: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 10,
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: '1.5px solid rgba(245,237,232,0.85)',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  slideVideo: {
    width: '100%',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    display: 'block',
    backgroundColor: '#1a0a1e',
  },
};

function SlidingPair({ images, interval = 5000 }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);
  return (
    <div style={styles.slidingWindow}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Whiskas slide ${i + 1}`}
          style={{ ...styles.slidingImg, opacity: i === active ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

function ManualVideoSwitcher({ videos }) {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + videos.length) % videos.length);
  const next = () => setActive((a) => (a + 1) % videos.length);
  return (
    <div style={styles.switcherWrap}>
      {videos.map((src, i) => (
        <video
          key={i}
          src={src}
          style={{ ...styles.switcherVideo, opacity: i === active ? 1 : 0 }}
          muted
          autoPlay
          loop
          playsInline
          aria-label={`Whiskas Campaign video ${i + 9}`}
        />
      ))}

      {/* Prev */}
      <button style={{ ...styles.switcherBtn, left: '16px' }} onClick={prev} aria-label="Previous video">
        <span style={{ ...styles.switcherArrow, transform: 'rotate(-135deg)', marginLeft: '3px' }} />
      </button>

      {/* Next */}
      <button style={{ ...styles.switcherBtn, right: '16px' }} onClick={next} aria-label="Next video">
        <span style={{ ...styles.switcherArrow, transform: 'rotate(45deg)', marginRight: '3px' }} />
      </button>

      {/* Dots */}
      <div style={styles.switcherDots}>
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to video ${i + 1}`}
            style={{
              ...styles.dot,
              background: i === active ? 'rgba(245,237,232,0.9)' : 'transparent',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function VideoSlide({ src, index }) {
  const ref = useRef(null);
  return (
    <video
      ref={ref}
      src={src}
      style={styles.slideVideo}
      muted
      autoPlay
      loop
      playsInline
      aria-label={`Whiskas Campaign video ${index + 1}`}
    />
  );
}

export default function WhiskasCampaign() {
  return (
    <>
    <div style={styles.page}>
      <Navbar />
      {/* ── Image slides ── */}
      {imageSlides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Whiskas Campaign slide ${i + 1}`}
          style={styles.slideImg}
        />
      ))}

      {/* ── Sliding pair (slides 05 & 06, alternates every 5s) ── */}
      <SlidingPair images={pairSlides} interval={5000} />

      {/* ── Video slides (muted by default) ── */}
      {videoSlides.map((src, i) => (
        <VideoSlide key={i} src={src} index={i} />
      ))}

      {/* ── Manual video switcher (videos 09 & 10) ── */}
      <ManualVideoSwitcher videos={switcherVideos} />

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
    </div>
    <BackToTop />
    
    </>
  );
}
