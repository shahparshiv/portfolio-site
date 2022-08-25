import { Fragment } from "react"
import background from "../assets/bg_home.jpg"
import Footer from "./footer.component"
import "./home.scss"
import TechStack from "./techstack.component"

const Home = () =>{
    return(
        <Fragment>
            <div>
                <div className="home-container">
                <img src={background} alt='home_bg' />
            </div>
            <div className="home-body">
                <span className="home-body-text">
                    <p className="hello-text">Hello!</p> 
                    <p>I'm a tech enthusiast based out of India, currently working as a Data Scientist 
                
                    <a className="know-more" href='/about'> ... </a>
                    </p>
                </span>
            </div>
            </div>
            <TechStack/>
        </Fragment>
      
        
    )
}

export default Home;