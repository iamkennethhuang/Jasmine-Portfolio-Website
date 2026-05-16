import { useState, useEffect } from 'react';

const styles = {
  button: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 1300,
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: '1px solid rgba(64,41,44,0.35)',
    backgroundColor: 'rgba(245,237,232,0.92)',
    color: '#40292c',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(6px)',
    boxShadow: '0 2px 12px rgba(64,41,44,0.15)',
    transition: 'opacity 0.25s ease, transform 0.25s ease',
    padding: 0,
  },
  arrow: {
    width: '10px',
    height: '10px',
    borderTop: '2px solid #40292c',
    borderRight: '2px solid #40292c',
    transform: 'rotate(-45deg)',
    marginTop: '3px',
  },
};

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      style={styles.button}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <span style={styles.arrow} />
    </button>
  );
}
