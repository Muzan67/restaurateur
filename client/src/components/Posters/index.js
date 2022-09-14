import React from "react";

import posters from "../../posters.json";

function PostersCard(props) {
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
            <li className="pb-5 mb-5">
              <p className="project-description">{props.description}</p>
            </li>
            <li id="card-icons">
              <div className="project-icons" style={{ textAlign: "center" }}>
                <a href={props.application}>
                  <img
                    src="https://img.icons8.com/cute-clipart/134/000000/terms-and-conditions.png"
                    alt="documentation"
                    id="port-icon"
                  />
                </a>
                <a href={props.externallink}>
                  <img
                    src="https://img.icons8.com/cute-clipart/128/000000/external-link.png"
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

function Posters() {
  return (
    <>
      <div className="project">
        <h2 className="contact mt-5 fw-bold" style={{ textAlign: "center" }}>
          Posters
        </h2>
      </div>

      <Wrapper>
        {posters.map((project) => (
          <PostersCard
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

export default Posters;
