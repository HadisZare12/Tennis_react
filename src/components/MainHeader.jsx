import { Link } from "react-router-dom";
import Image from '../images/sec.png';
const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main-header-container"> 
        <div className="main_header-left">
          <h4>
            #100DaysOfWorkOut
          </h4>
          <h1>
            Join The Legends Of the Tennis Club
          </h1>
          <p>
            Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsum v 
             Lorem ipsum lorem ipsum Lorem ipsum
             lorem ipsum Lorem ipsum lorem ipsumv Lorem ipsum lorem ipsum
             
          </p>
           <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle">
            <div className="main_header-image">
              <img src={Image} alt="Header Image"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader