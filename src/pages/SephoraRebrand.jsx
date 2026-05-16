import { useState } from 'react';
import { ASSETS } from '../assets';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import '../css/SephoraRebrand.css';

// Craft-paper texture overlay (plain HTML version)
function CraftBg({ flip = false }) {
  return (
    <img
      src={ASSETS.craftPaper}
      alt=""
      aria-hidden="true"
      className={`sr-craft-bg${flip ? ' sr-craft-bg--flip' : ''}`}
    />
  );
}

// Lazy image with skeleton placeholder
function LazyImg({ src, alt, className, style }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <span style={{ display: 'block', position: 'relative' }}>
      {!loaded && (
        <span
          className="sr-skeleton"
          style={{ aspectRatio: style?.aspectRatio || '4/3', ...style, display: 'block' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ ...(style || {}), display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </span>
  );
}

export default function SephoraRebrand() {
  return (
    <>
      <div className="sr-page">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className="sr-hero sr-section">
          <CraftBg />
          <img
            src={ASSETS.sephoraRoseHero}
            alt=""
            aria-hidden="true"
            className="sr-hero__rose"
          />
          <img src={ASSETS.sephoraHeroLogo} alt="Sephora S motif" className="sr-hero__logo" />
          <h1 className="sr-hero__title">SEPHORA</h1>
          <p className="sr-hero__subtitle">— REBRAND —</p>
        </section>

        {/* ══ BRAND OVERVIEW BAND ══ */}
        <div className="sr-band">
          <LazyImg
            src={ASSETS.sephoraBrandOverview}
            alt="Sephora brand stationery overview"
            className="sr-img-full"
            style={{ aspectRatio: '16/9' }}
          />
        </div>

        {/* ══ LOGO HISTORY ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg />
          <div className="sr-inner">
            <h2 className="sr-italic-heading">Logo History</h2>
            <p className="sr-body">
              I chose Sephora as the subject of the Logotype Design assignment because the current logo,
              including the bold uppercase "SEPHORA" word mark and iconic "S" motif, has remained
              recognizable for many years. Sephora, known as a world-famous cosmetics retailer, derives
              its name from both ancient Greek and the Bible, with "Sephos" meaning beauty and
              "Sepphora" referring to the wife of Moses.
            </p>
            <p className="sr-body">
              This project is a rebrand for Sephora focused on redesigning the logo based on the
              brand's image and identity. Inspired by Sephora's bold and modern personality, I explored
              a more refined visual direction while still keeping the brand recognizable. The redesigned
              identity was then applied across different stationery systems to create a cohesive brand
              experience.
            </p>

            <div className="sr-two-col" style={{ marginBottom: 'clamp(2rem,4vw,4rem)' }}>
              <LazyImg src={ASSETS.sephoraHistory1} alt="Sephora history reference 1" className="sr-img-full" style={{ aspectRatio: '16/9' }} />
              <LazyImg src={ASSETS.sephoraHistory2} alt="Sephora history reference 2" className="sr-img-full" style={{ aspectRatio: '16/9' }} />
            </div>

            <p className="sr-body">
              The "S" shape carries multiple meanings. Besides representing Sephora's name, its sleek
              curve resembles a flame symbolizing passion for beauty and self-expression. According to
              the brand, the motif also resembles flowing hair, representing freedom and creativity.
              Its curved and fluid form creates a feminine tone of voice that reflects grace, movement,
              and the expressive nature of beauty products.
            </p>
          </div>
        </section>

        {/* ══ COLOUR PALETTE ANALYSIS ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg flip />
          <div className="sr-inner">
            <p className="sr-body">
              Sephora's main brand palette is black and white, which is reflected in both the logo and
              the store's interior design. Occasionally, red is used as a complementary color in
              advertising designs. From these visual elements, it is not difficult to recognize the
              brand's French roots.
            </p>
            <p className="sr-body">
              After examining the brand's history and logo design rationale, the "S" motif and
              black-and-white stripes make a lot of sense, as they successfully communicate a
              fashionable and chic identity. However, I have a different opinion on the word mark's
              typeface. The sans-serif feels slightly too square and generic, making it seem less
              elegant than the Sephora brand is meant to be.
            </p>
          </div>
        </section>

        {/* ══ PROGRESS ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg />
          <div className="sr-inner">
            <h2 className="sr-italic-heading">Progress</h2>
            <p className="sr-body">
              In my initial sketches, I tried multiple typefaces to figure out which best fit the
              brand's tone of voice, as well as playing around with their kernings and tracking.
              I narrowed it down to two at the end.
            </p>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem,5vw,4rem)' }}>
            <LazyImg src={ASSETS.sephoraProgress} alt="Sephora logotype progress sketches" className="sr-img-full" style={{ aspectRatio: '5/6' }} />
          </div>
        </section>

        {/* ══ TYPOGRAPHY & COLOUR PALETTE ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg flip />
          <div className="sr-inner--wide">
            <h2 className="sr-italic-heading" style={{ textAlign: 'center' }}>Typography &amp; Color Palette</h2>
            <div className="sr-two-col" style={{ marginBottom: 'clamp(1.5rem,3vw,3rem)' }}>
              <LazyImg src={ASSETS.sephoraArtboard1} alt="Sephora typography palette artboard 1" className="sr-img-full" style={{ aspectRatio: '1/1' }} />
              <LazyImg src={ASSETS.sephoraArtboard2} alt="Sephora typography palette artboard 2" className="sr-img-full" style={{ aspectRatio: '1/1' }} />
            </div>
            <LazyImg
              src={ASSETS.sephoraColors}
              alt="Sephora color swatches"
              className="sr-img-centered"
              style={{ width: '55%', aspectRatio: '16/9' }}
            />
          </div>
        </section>

        {/* ══ FINAL WORK ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg />
          <div className="sr-inner--wide">
            <h2 className="sr-bold-heading">FINAL WORK</h2>

            {/* Logo #1 */}
            <div className="sr-logo-row">
              <LazyImg src={ASSETS.sephoraLogo1} alt="Sephora Logo #1 — hand-drawn S with October Compressed" className="sr-img-full" style={{ aspectRatio: '1/1' }} />
              <div>
                <h3 className="sr-italic-heading" style={{ marginBottom: '1rem' }}>Logo #1</h3>
                <p className="sr-body">
                  My hand-drawn "S" motif and October Compressed Tamil with medium thickness. The "S"
                  motif is memorable, and the rounded edge typeface that matches the motif. The typeface
                  is closer to the original logo.
                </p>
              </div>
            </div>

            {/* Logo #2 */}
            <div className="sr-logo-row sr-logo-row--reverse">
              <LazyImg src={ASSETS.sephoraLogo2} alt="Sephora Logo #2 — Amandine typeface with original S motif" className="sr-img-full" style={{ aspectRatio: '1/1' }} />
              <div>
                <h3 className="sr-italic-heading" style={{ marginBottom: '1rem' }}>Logo #2</h3>
                <p className="sr-body">
                  Amandine with tighter kerning and tracking, uses the original "S" motif on the H
                  character. This design is more fashionable and modern, while the original Sephora's
                  icon is kept.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ BUSINESS CARD #1 ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg flip />
          <div className="sr-inner">
            <h2 className="sr-italic-heading">Business Card #1</h2>
            <p className="sr-body">
              The background of Business Card #1 is black, while the text and logo are white to convey
              a luxurious and high-end tone of voice. To keep the design elevated yet approachable, I
              used the Calibri typeface to create a more accessible feeling while maintaining the
              brand's sophistication. On the back of the card, I placed a zoomed-in hand-drawn "S"
              motif at 25% opacity to maintain visual consistency while keeping the text clear and easy
              to read.
            </p>
            <div className="sr-bc-grid">
              <LazyImg src={ASSETS.sephoraBc1Front} alt="Business Card #1 front" className="sr-img-full" style={{ aspectRatio: '5/3' }} />
              <LazyImg src={ASSETS.sephoraBc1Back}  alt="Business Card #1 back"  className="sr-img-full" style={{ aspectRatio: '5/3' }} />
            </div>

            <h2 className="sr-italic-heading">Business Card #2</h2>
            <p className="sr-body">
              Besides the redesigned logo, I added black-and-white stripes at the bottom of the card
              to preserve Sephora's iconic visual identity. Since the stripes are consistently used
              throughout Sephora's stores and web design, they help viewers instantly recognize the
              brand. On the back of the card, I placed the original "S" motif in the center at 25%
              opacity to maintain visual consistency throughout the design.
            </p>
            <div className="sr-bc-grid">
              <LazyImg src={ASSETS.sephoraBc2Front} alt="Business Card #2 front" className="sr-img-full" style={{ aspectRatio: '5/3' }} />
              <LazyImg src={ASSETS.sephoraBc2Back}  alt="Business Card #2 back"  className="sr-img-full" style={{ aspectRatio: '5/3' }} />
            </div>
          </div>
        </section>

        {/* ══ LETTERHEADS ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg />
          <div className="sr-inner">
            <div style={{ textAlign: 'right', marginBottom: 'clamp(0.5rem,1.5vw,1.5rem)' }}>
              <h2 className="sr-italic-heading" style={{ display: 'inline-block' }}>Letterhead #1</h2>
            </div>
            <LazyImg src={ASSETS.sephoraLetterhead1} alt="Sephora Letterhead #1" className="sr-img-full" style={{ aspectRatio: '3/4' }} />

            <hr className="sr-divider" />

            <div style={{ textAlign: 'right', marginBottom: 'clamp(0.5rem,1.5vw,1.5rem)' }}>
              <h2 className="sr-italic-heading" style={{ display: 'inline-block' }}>Letterhead #2</h2>
            </div>
            <LazyImg src={ASSETS.sephoraLetterhead2} alt="Sephora Letterhead #2" className="sr-img-full" style={{ aspectRatio: '3/4' }} />
          </div>
        </section>

        {/* ══ ENVELOPES ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg flip />
          <div className="sr-inner">
            <div style={{ textAlign: 'right', marginBottom: 'clamp(0.5rem,1.5vw,1.5rem)' }}>
              <h2 className="sr-italic-heading" style={{ display: 'inline-block' }}>Envelope #1</h2>
            </div>
            <LazyImg src={ASSETS.sephoraEnvelope1} alt="Sephora Envelope #1" className="sr-img-full" style={{ aspectRatio: '2/1' }} />

            <hr className="sr-divider" />

            <div style={{ textAlign: 'right', marginBottom: 'clamp(0.5rem,1.5vw,1.5rem)' }}>
              <h2 className="sr-italic-heading" style={{ display: 'inline-block' }}>Envelope #2</h2>
            </div>
            <LazyImg src={ASSETS.sephoraEnvelope2} alt="Sephora Envelope #2" className="sr-img-full" style={{ aspectRatio: '2/1' }} />
          </div>
        </section>

        {/* ══ MOCK UP ══ */}
        <section className="sr-section sr-pad-lg">
          <CraftBg />
          <div className="sr-inner--wide">
            <h2 className="sr-bold-heading">MOCK UP</h2>
            <div className="sr-mockup-stack">
              <LazyImg src={ASSETS.sephoraMockupBc}         alt="Sephora business card mockup"  className="sr-img-full" style={{ aspectRatio: '16/9' }} />
              <LazyImg src={ASSETS.sephoraMockupLetterhead} alt="Sephora letterhead mockup"     className="sr-img-full" style={{ aspectRatio: '16/9' }} />
              <LazyImg src={ASSETS.sephoraMockupEnvelope}   alt="Sephora envelope mockup"       className="sr-img-full" style={{ aspectRatio: '16/9' }} />
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <section className="sr-section" style={{ paddingTop: 'clamp(3rem,6vw,5rem)' }}>
          <CraftBg flip />
          <div
            style={{
              position: 'relative', zIndex: 1,
              display: 'flex', flexWrap: 'wrap',
              justifyContent: 'space-between', alignItems: 'flex-start',
              gap: '2rem',
              padding: 'clamp(2rem,4vw,3.5rem) clamp(2rem,5vw,5rem)',
            }}
          >
            <div>
              <p style={{ margin: '0 0 0.25rem', fontWeight: 600, fontSize: 'clamp(0.9rem,1.5vw,1.25rem)', letterSpacing: '0.04em' }}>PROJECT INQUIRIES</p>
              <a href="mailto:jasmineyjl@hotmail.com" style={{ color: 'inherit', fontWeight: 600, fontSize: 'clamp(0.9rem,1.5vw,1.25rem)', textDecoration: 'none' }}
                onMouseOver={e => e.target.style.textDecoration = 'underline'}
                onMouseOut={e => e.target.style.textDecoration = 'none'}>
                jasmineyjl@hotmail.com
              </a>
            </div>
            <div>
              <p style={{ margin: '0 0 0.25rem', fontWeight: 600, fontSize: 'clamp(0.9rem,1.5vw,1.25rem)', letterSpacing: '0.04em' }}>SOCIAL</p>
              <span style={{ fontWeight: 600, fontSize: 'clamp(0.9rem,1.5vw,1.25rem)' }}>
                <a href="https://www.instagram.com/whathebleep/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseOver={e => e.target.style.textDecoration = 'underline'}
                  onMouseOut={e => e.target.style.textDecoration = 'none'}>
                  Instagram
                </a>
                &emsp;&emsp;
                <a href="https://www.linkedin.com/in/jasmine-lin-944454207/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onMouseOver={e => e.target.style.textDecoration = 'underline'}
                  onMouseOut={e => e.target.style.textDecoration = 'none'}>
                  LinkedIn
                </a>
              </span>
            </div>
          </div>
        </section>

      </div>
      <BackToTop />
    </>
  );
}
