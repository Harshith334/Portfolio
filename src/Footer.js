import React from 'react';

const Footer = () => {
    return (
        <footer className="social-media-footer">
            <ul>
                <div className="s">
                    <a href="https://discord.com/" target="_blank" title="Discord">
                        <i className="fab fa-discord"></i>
                    </a>
                    <a href="https://github.com/Harshith334" target="_blank" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/harsoma/" target="_blank" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://leetcode.com/somaharshithkumar2004/" target="_blank" title="LeetCode">
                        <i className="fas fa-code"></i>
                    </a>
                    <a href="https://www.hackerrank.com/profile/somaharshithkum1" target="_blank" title="HackerRank">
                        <i className="fab fa-hackerrank"></i>
                    </a>
                </div>
            </ul>
        </footer>
    );
}

export default Footer;
