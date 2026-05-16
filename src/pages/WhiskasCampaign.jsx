import { useRef } from 'react';
import { ASSETS } from '../assets';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import whiskasVideo07 from '../videos/whiskas-slide-07.mp4';
import whiskasVideo08 from '../videos/whiskas-slide-08.mp4';
import whiskasVideo09 from '../videos/whiskas-slide-09.mp4';
import whiskasVideo10 from '../videos/whiskas-slide-10.mp4';

// Slides in Figma vertical order (y-position ascending)
const imageSlides = [
  ASSETS.whiskasSlide01,
  ASSETS.whiskasSlide02,
  ASSETS.whiskasSlide04, // appears at y=1845 in Figma (before slide-03)
  ASSETS.whiskasSlide03, // appears at y=2655 in Figma (after slide-04)
  ASSETS.whiskasSlide05,
  ASSETS.whiskasSlide06,
];

// Video slides (7–10)
const videoSlides = [
  whiskasVideo07,
  whiskasVideo08,
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
  slideVideo: {
    width: '100%',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    display: 'block',
    backgroundColor: '#1a0a1e',
  },
};

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

      {/* ── Video slides (muted by default) ── */}
      {videoSlides.map((src, i) => (
        <VideoSlide key={i} src={src} index={i} />
      ))}
    </div>
    <BackToTop />
    </>
  );
}
