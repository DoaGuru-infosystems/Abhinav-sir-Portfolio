import React from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton';
import { resumeData } from '../../data/resumeData';

const Hero = ({ 
    introText = `Hello! I’m ${resumeData.personalInfo.name}`,
    title = resumeData.personalInfo.heroTitle || "Architecting resilient high-throughput",
    highlightedText = resumeData.personalInfo.heroHighlight || "Big Data systems",
    buttonText = "Get In Touch",
    description = resumeData.personalInfo.summary
}) => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Hero Content */}
                        <div className="hero-content">
                            <span className="intro-text">{introText}</span>
                            <h1 className="title section-title mt-3 mt-md-4 mb-md-5">
                                {title} <span>{highlightedText}</span>
                            </h1>

                            {/* Content */}
                            <div className="content d-flex flex-column flex-md-row justify-content-md-between">
                                <div className="hero-button order-last order-md-first mt-4 mt-md-0">
									<MagneticButton 
										href="/contact"
										>
										{buttonText}
									</MagneticButton>
                                </div>
                                <p className="sub-title order-first order-md-last">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
