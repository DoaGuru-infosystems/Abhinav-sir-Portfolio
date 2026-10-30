import React, { useState } from "react";
import MagneticButton from '../Miscellaneous/MagneticButton';
import { resumeData } from '../../data/resumeData';

const CTAOne = () => {
	const [ctaData] = useState({
		title: "Looking for an experienced Lead Data Engineer?",
		highlight: "Let's Connect",
		button: {
			text: "Get In Touch",
			link: "/contact"
		},
		socials: resumeData.personalInfo.socials
	});

	return (
		<section className="cta border-top border-light-subtle">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-10 col-lg-7">
						<h2 className="title mb-0 mb-md-2">{ctaData.title}</h2>
						<div className="cta-text">
							<span className="line-item">{ctaData.highlight}</span>
							<span className="line"></span>
							<MagneticButton 
								href={ctaData.button?.link}
								>
								{ctaData.button?.text}
							</MagneticButton>
						</div>

						{/* Socials */}
						<div className="socials mt-5">
							<nav className="nav justify-content-center">
								{ctaData.socials?.length > 0 ? (
								ctaData.socials.map((social, index) => (
									<a key={index} className="nav-link swap-icon" href={social.link} target="_blank" rel="noreferrer">
									{social.name} <i className="icon rotate bi bi-arrow-right-short"></i>
									</a>
								))
								) : null}
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTAOne;
