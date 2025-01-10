import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;