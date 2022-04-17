import axios from "axios";
import React, { Fragment, useEffect, useReducer } from "react";
import ProjectData from "./ProjectData";
import "./ProjectsComponent.scss";
import ProjectsEvenColumn from "./ProjectsEvenColumn";
import ProjectsOddColumn from "./ProjectsOddColumn";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        error: "",
        loading: false,
        posts: [],
      };
    default:
      return state;
  }
};
const ProjectsComponent = ({ headerComponent }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    posts: [],
  });

  const projects = state.posts;
  var oddProject = [];
  var evenProject = [];

  useEffect(() => {
    axios.get("https://kagency-api.herokuapp.com/api/projects").then(
      (res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      },
      (error) => {
        console.log(error);
        dispatch({ type: "FETCH_ERROR" });
      }
    );
  }, []);
  console.log(state.loading);
  console.log(state.posts.data);
  console.log(projects);

  // console.log(projects[1].content);
  if (state.loading == true) {
    console.log("loading");
  } else if (state.loading == false) {
    projects.map((item, index) => {
      if ((index + 1) % 2 === 0) {
        return evenProject.push(item);
      } else {
        return oddProject.push(item);
      }
    });
  }

  if (state.loading == true) {
    return (
      <div className="container">
        <p>Loading data ...</p>
      </div>
    );
  } else {
    return (
      <Fragment>
        <div className="ProjectsComponent">
          <div className="container">
            <div className="row reverse-row">
              <ProjectsOddColumn
                headerComponent={headerComponent}
                projects={oddProject}
              />
              <ProjectsEvenColumn projects={evenProject} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default ProjectsComponent;
