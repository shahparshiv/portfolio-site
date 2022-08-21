import background from "../assets/bg_home.jpg"
import dummy from "../assets/dummy_edit.jpg"
import "./about.styles.scss"

const About = () =>{
    return(
        <div>
        <div className="about-container">
        <img src={background} alt='home_bg' />
    </div>
    <div className="about-body">
        <span className="about-body-text">
            <p className="hello-text">Hello!</p> 
            <p>I'm a tech enthusiast based out of India, currently working as a Data Scientist at Metyis 
            <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu quam sagittis, pulvinar lectus in, porta augue. Donec vestibulum dui id nisl aliquam, tristique varius dui sollicitudin. Etiam eu convallis leo. Fusce velit risus, mattis vel rutrum et, iaculis rutrum velit. Ut eget dignissim turpis. Pellentesque at augue eu arcu.
        
            </p>
        </span>
    </div>
    <div className="portrait-container">
            <img src={dummy} alt="portrait"/>
        </div>

    </div>
    )
}

export default About;