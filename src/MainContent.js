import React from 'react';

const MainContent = () => {
    return (
        <div className="main-content-container">
            <div className="Projects">
                <b>Projects:</b>
                <p><b>WORK-FARMA:</b> A project that was made on connecting the workers and farmers to check where the work is available</p>
                <p><b>Stress Detection:</b> Determines whether the person is having any stress determined by a machine learning model by giving the user input</p>
                <p><b>Amazon clone:</b> Clone of the Amazon website using HTML and CSS</p>
                <p><b>Plastic waste management:</b> A machine learning model that detects the type of plastic with the help of a CNN algorithm.</p>
            </div>
            <div className="Certification">
                <b>Certifications:</b>
                <p>Virtual intern at Technohacks</p>
                <p>Certified in Smart India Hackathon</p>
                <p>Participated in a 24-hour hackathon in our college</p>
                <p>Stress detection by Talent Battle</p>
                <p>Cambridge B2 level certification</p>
                <p>Python Coursera certified</p>
            </div>
        </div>
    );
}

export default MainContent;
