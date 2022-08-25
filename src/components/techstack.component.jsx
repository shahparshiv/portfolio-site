import React from "react";
import './techstack.styles.scss';
import python from '../assets/python_64.png';
import atom from '../assets/atom.png';
import htmlicon from '../assets/html-5.png';
// import cssicon from '../assets/css.png'
import jsicon from '../assets/js.png'
import project_1 from '../assets/project_1.jpg';
import project_2 from '../assets/whiletrue.jpg';
import project_3 from '../assets/project_3.jpg';
import project_4 from '../assets/project_4.jpg';
import Footer from "./footer.component";

const TechStack = () => {
    return(
        <div className="techstack-container">
            {/* <div className="title-holder">
                <h3>Tech Stack</h3>
            </div> */}
            <ul className='icon-container'>
                <li>
                    <img src={python} alt="python-icon"/>
                </li>
                <li>
                <img src={atom} alt="react-icon"/>
                </li>
                <li>
                <img src={htmlicon} alt="html-icon"/>
                </li>
                <li>
                <img src={jsicon} alt="css-icon"/>
                </li>
                {/* <li>Icon 5</li> */}
            </ul>
            <div className="project-cards">
                <div className="projects">
                    <div className="card">
                        <img src={project_1} className="card-img-top" alt="project-img"/>
                        <div className="card-body">
                        <div className="text-center">
                            <h5 className="card-title">Project A</h5>
                            </div>
                            <p className="card-text">Project description with lorem ipsum dummy description.</p>
                            <div className="text-center">
                            <a href="www.github.com" className="btn btn-dark">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="card">
                        <img src={project_2} className="card-img-top" alt="project-img"/>
                        <div className="card-body">
                            <div className="text-center">
                            <h5 className="card-title">Project B</h5>
                            </div>
                            <p className="card-text">Project description with lorem ipsum dummy description.</p>
                            <div className="text-center">
                            <a href="www.github.com" className="btn btn-dark">Github</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="card">
                        <img src={project_3} className="card-img-top" alt="project-img"/>
                        <div className="card-body">
                            <div className="text-center">
                            <h5 className="card-title">Project C</h5>
                            </div>
                            <p className="card-text">Project description with lorem ipsum dummy description.</p>
                            <div className="text-center">
                            <a href="www.github.com" className="btn btn-dark text-center">Github</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <div className="card">
                        <img src={project_4} className="card-img-top" alt="project-img"/>
                        <div className="card-body">
                            <div className="text-center">
                            <h5 className="card-title">Project D</h5>
                            </div>
                            <p className="card-text">Project description with lorem ipsum dummy description.</p>
                            <div className="text-center">
                            <a href="www.github.com" className="btn btn-dark text-center">Github</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-projects text-center">
                <a href='/projects' className="btn btn-outline-light">
                    <h5>All Projects</h5>
                </a>
            </div>
            <Footer/>
        </div>
    )
}

export default TechStack;