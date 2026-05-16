import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Give the page a moment to render before scrolling to the element
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AnExpressionOfSelf from './pages/AnExpressionOfSelf';
import LorealParisCampaign from './pages/LorealParisCampaign';
import WhiskasCampaign from './pages/WhiskasCampaign';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flex: 1, pt: { xs: 8, md: 10 } }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/expression-of-self" element={<AnExpressionOfSelf />} />
              <Route path="/loreal-paris-campaign" element={<LorealParisCampaign />} />
              <Route path="/whiskas-campaign" element={<WhiskasCampaign />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
