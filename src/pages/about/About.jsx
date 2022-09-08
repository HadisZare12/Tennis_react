
import Header from '../../components/Header'
import './about.css';
import StoryImage from "../../images/B45.jpg"
import VisionImage from "../../images/B45.jpg"
import MissionImage from "../../images/B45.jpg"
import HeaderImage from "../../images/back60.jpg"



const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
      Lorem ipsum  Lorem ipsum  Lorem ipsum 
      Lorem ipsum  Lorem ipsum 
    </Header>
    <section className="about_story">
      <div className="container about_story-container ">
        <div className="about_section-image">
          <img src={StoryImage} alt="Story"/>
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
           Lorem ipsum  Lorem ipsum  Lorem ipsum 
            Lorem ipsum  Lorem ipsum 
          </p>
          <p>
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
           Lorem ipsum  Lorem ipsum  Lorem ipsum 
            Lorem ipsum  Lorem ipsum 
          </p>
          <p>
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
           Lorem ipsum  Lorem ipsum  Lorem ipsum 
            Lorem ipsum  Lorem ipsum 
          </p>
        </div>
      </div>
    </section>
    <section className="about_Vision">
      <div className="container about_story-container ">
       
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
           Lorem ipsum  Lorem ipsum  Lorem ipsum 
            Lorem ipsum  Lorem ipsum 
          </p>
          <p>
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
           Lorem ipsum  Lorem ipsum  Lorem ipsum 
            Lorem ipsum  Lorem ipsum 
          </p>
         
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt="Vision"/>
        </div>
      </div>
    </section>
    <section className="about_mission">
      <div className="container about_mission-container ">
        <div className="about_section-image">
          <img src={MissionImage} alt="mission"/>
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
           Lorem ipsum  Lorem ipsum  Lorem ipsum 
            Lorem ipsum  Lorem ipsum 
          </p>
          <p>
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
           Lorem ipsum  Lorem ipsum  Lorem ipsum 
            Lorem ipsum  Lorem ipsum 
          </p>
          <p>
          Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
           Lorem ipsum  Lorem ipsum  Lorem ipsum 
            Lorem ipsum  Lorem ipsum 
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About