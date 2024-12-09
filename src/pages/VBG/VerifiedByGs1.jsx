import React from 'react';
import './VerifiedByGS1.css';

const VerifiedByGS1 = () => {
    return (
        <div className="verified-by-gs1-container">
            <div className="Agriculture3-banner">
                <div className="banner2-content">
                    <h1>Verified By GS1</h1>
                </div>
            </div>
            <div className="iframe-container">
                <iframe
                    src="https://www.gs1.org/services/verified-by-gs1/iframe"
                    title="Verified Search"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VerifiedByGS1;