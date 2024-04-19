import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Footer from './Footer';
import './styles.css';

const App = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
