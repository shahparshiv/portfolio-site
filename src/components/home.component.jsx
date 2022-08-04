import background from "../assets/bg_home.jpg"
import "./home.scss"

const Home = () =>{
    return(
        <div className="home-container">
            <img src={background} alt='home_bg' />
        </div>
    )
}

export default Home;