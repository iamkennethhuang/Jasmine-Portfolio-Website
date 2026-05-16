import { useState } from 'react';
import { ASSETS } from '../assets';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';

const slides = [
  ASSETS.lorealSlide03,
  ASSETS.lorealSlide05,
  ASSETS.lorealSlide06,
  ASSETS.lorealSlide08,
  ASSETS.lorealSlide09,
  ASSETS.lorealSlide10,
  ASSETS.lorealSlide11,
  ASSETS.lorealSlide12,
  ASSETS.lorealSlide13,
  ASSETS.lorealSlide14,
  ASSETS.lorealSlide15,
  ASSETS.lorealSlide16,
  ASSETS.lorealSlide17,
  ASSETS.lorealSlide18,
  ASSETS.lorealSlide19,
  ASSETS.lorealSlide20,
  ASSETS.lorealSlide21,
  ASSETS.lorealSlide23,
  ASSETS.lorealSlide24,
  ASSETS.lorealSlide25,
  ASSETS.lorealSlide26,
  ASSETS.lorealSlide27,
  ASSETS.lorealSlide28,
  ASSETS.lorealSlide29,
];

const styles = {
  page: {
    fontFamily: "'Cormorant Garamond', serif",
    backgroundColor: '#f5ede8',
    color: '#40292c',
    margin: 0,
    padding: 0,
  },

  /* ── Hero ── */
  hero: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.45) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '6%',
    textAlign: 'center',
  },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
    fontSize: 'clamp(2rem, 6vw, 5.5rem)',
    color: '#f5ede8',
    letterSpacing: '0.12em',
    lineHeight: 1,
    margin: 0,
    textTransform: 'uppercase',
  },
  heroSubtitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: 'clamp(0.9rem, 2.2vw, 2rem)',
    color: '#f5ede8',
    letterSpacing: '0.2em',
    marginTop: '0.5em',
  },

  /* ── Intro section ── */
  intro: {
    backgroundColor: '#f5ede8',
    padding: 'clamp(3rem, 8vw, 7rem) clamp(2rem, 10vw, 12rem)',
    textAlign: 'center',
    maxWidth: '860px',
    margin: '0 auto',
  },
  introHeading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
    fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
    color: '#40292c',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
  },
  introBody: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 400,
    fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
    color: '#40292c',
    lineHeight: 1.8,
    margin: 0,
  },

  /* ── Slides ── */
  slidesSection: {
    width: '100%',
  },
  slideImg: {
    width: '100%',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    display: 'block',
  },

  /* ── Footer ── */
  footer: {
    backgroundColor: '#ae8f8e',
    padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 8vw, 8rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    textAlign: 'center',
  },
  footerHeading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
    color: '#f5ede8',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    margin: 0,
  },
  footerLinks: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerLink: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: 400,
    fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
    color: '#f5ede8',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  footerDivider: {
    width: '60px',
    height: '1px',
    backgroundColor: '#f5ede8',
    opacity: 0.6,
    border: 'none',
    margin: '0.5rem 0',
  },
};

export default function LorealParisCampaign() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState({});
  const markSlideLoaded = (i) => setLoadedSlides(prev => ({ ...prev, [i]: true }));

  return (
    <>
    <style>{`
      .loreal-hero { margin-top: -64px; }
      @media (min-width: 900px) { .loreal-hero { margin-top: -80px; } }
      @keyframes loreal-shimmer {
        0%   { background-position: -200% 0; }
        100% { background-position:  200% 0; }
      }
      .loreal-skeleton {
        background: linear-gradient(90deg, #e8d5d0 25%, #f5ede8 50%, #e8d5d0 75%);
        background-size: 200% 100%;
        animation: loreal-shimmer 1.5s infinite;
      }
    `}</style>
    <div style={styles.page}>
      <Navbar background="transparent" />

      {/* ── Hero ── */}
      <section style={styles.hero} className="loreal-hero">
        {!heroLoaded && (
          <div className="loreal-skeleton" style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
        )}
        <img
          src={ASSETS.lorealSlide02}
          alt="L'Oréal Paris Mother's Day Campaign hero"
          style={styles.heroImg}
          onLoad={() => setHeroLoaded(true)}
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>L'Oréal Paris</h1>
          <p style={styles.heroSubtitle}>— Mother's Day Campaign —</p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section>
        <div style={styles.intro}>
          <h2 style={styles.introHeading}>The Worth We Share</h2>
          <p style={styles.introBody}>
            This is a campaign for L'Oréal Paris inspired by their iconic tagline, "I'm Worth It."
            Through curated beauty experiences and multi-platform advertising, the campaign explores
            how worth is shared across generations and expressed through confidence, connection,
            and self-worth.
          </p>
        </div>
      </section>

      {/* ── Slides ── */}
      <section style={styles.slidesSection}>
        {slides.map((src, i) => (
          <div key={i} style={{ position: 'relative' }}>
            {!loadedSlides[i] && (
              <div className="loreal-skeleton" style={{ position: 'absolute', inset: 0 }} />
            )}
            <img
              src={src}
              alt={`Campaign slide ${i + 1}`}
              style={styles.slideImg}
              onLoad={() => markSlideLoaded(i)}
            />
          </div>
        ))}
      </section>

      {/* ── Footer ── */}
      <footer style={styles.footer}>
        <p style={styles.footerHeading}>Project Inquiries</p>
        <hr style={styles.footerDivider} />
        <div style={styles.footerLinks}>
          <a
            href="https://www.instagram.com/whathebleep/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.footerLink}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/jasmine-lin-944454207/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.footerLink}
          >
            LinkedIn
          </a>
        </div>
      </footer>

    </div>
    <BackToTop />
    </>
  );
}
