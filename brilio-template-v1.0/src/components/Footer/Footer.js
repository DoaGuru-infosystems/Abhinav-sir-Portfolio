import React from 'react';
import { resumeData } from '../../data/resumeData';

const Footer = ({
	className = "footer-area",
	copyrightText = `© ${new Date().getFullYear()} All Rights Reserved | Built by`,
	linkText = resumeData.personalInfo.name,
	linkUrl = "/",
	scrollToTopText = "Scroll to Top",
	scrollToTopTarget = "#header"
}) => {
	return (
		<footer className={`${className}`}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="footer-content d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-4">
							{/* Copyright */}
							<div className="copyright">
								{copyrightText} <a href={linkUrl} rel="noopener noreferrer">{linkText}</a>
							</div>
							{/* Scroll To Top */}
							<div id="scroll-to-top" className="scroll-to-top mt-3 mt-sm-0">
								<a href={scrollToTopTarget} className="smooth-anchor">{scrollToTopText}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
