import React from "react";

import permits from "../../permits.json";

function PermitsCard(props) {
	return (
		<div className="card col mx-4">
			<div className="img-container" height="100px">
				<img alt={props.name} src={props.image} height="100%" />
			</div>
			<div className="content">
				<ul>
					<li>
						<p className="project-title" style={{ textAlign: "center" }}>
							{props.name}
						</p>
					</li>
					<li className="mb-5 pb-5">
						<p className="project-description">{props.description}</p>
					</li>
					<li id="card-icons">
						<div className="project-icons" style={{ textAlign: "center" }}>
							<a href={props.application}>
								<img
									src="https://img.icons8.com/cute-clipart/120/000000/terms-and-conditions.png"
									alt="documentation"
									id="port-icon"
								/>
							</a>
							<a href={props.externallink}>
								<img
									src="https://img.icons8.com/cute-clipart/120/000000/external-link.png"
									alt="externallink"
									id="port-icon"
								/>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

function Wrapper(props) {
	return <div className="wrapper">{props.children}</div>;
}

function Permits() {
	return (
		<>
			<div className="project">
				<h2
					className="contact mt-5 fw-bold bg-dark bg-opacity-75"
					style={{ textAlign: "center" }}
				>
					Permits
				</h2>
			</div>

			<Wrapper>
				{permits.map((project) => (
					<PermitsCard
						key={project.id}
						name={project.name}
						image={project.image}
						application={project.application}
						externallink={project.externallink}
						description={project.description}
					/>
				))}
			</Wrapper>
		</>
	);
}

export default Permits;
