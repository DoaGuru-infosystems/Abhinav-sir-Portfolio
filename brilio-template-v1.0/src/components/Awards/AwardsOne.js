import React, { useState } from "react";
import { resumeData } from "../../data/resumeData";

const AwardsOne = () => {
	const [awardsData] = useState(resumeData.achievements);

	return (
		<section className="awards sticky primary-bg">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-3">
						{/* Intro */}
						<div className="intro">
							<h3 className="title">
								{awardsData ? awardsData.title : "Key Achievements"}
							</h3>
						</div>
					</div>

					<div className="col-12 col-lg-8">
						<ul className="list-group list-group-flush">
						{awardsData && awardsData.items.length > 0 ? (
							awardsData.items.map((award, index) => (
							<li key={index} className="list-group-item">
								<div className="content">
									<h4 className="title mt-0 mb-2">{award.title}</h4>
									<span className="tags mt-2 mt-md-0 d-block">
										<strong>{award.year}</strong> — {award.award}
									</span>
									{award.description && (
										<p style={{color:"#909dac"}} className="small mt-2 mb-0">{award.description}</p>
									)}
								</div>
								{/* Award Button */}
								<a className="award-btn rounded-pill" href={award.link}>
									<i className="icon rotate bi bi-arrow-right-short m-0"></i>
								</a>
							</li>
							))
						) : (
							<li className="list-group-item">
								<div className="content">No achievements listed.</div>
							</li>
						)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AwardsOne;
