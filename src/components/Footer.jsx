import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
               <Link to="/">
                 <img src={Logo} alt="footer logo"/>
               </Link>
               <p>
                   Lorem ipsum   Lorem ipsum   Lorem ipsum   Lorem ipsum   Lorem ipsum 
                   Lorem ipsum   Lorem ipsum   Lorem ipsum   Lorem ipsum 
                   Lorem ipsum   Lorem ipsum   Lorem ipsum 
               </p>
               <div className="footer_socials">
                   <a href="http://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                   <a href="http://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebook /></a>
                   <a href="http://twitter.com/" target="_blank" rel="noreferrer noopener">< AiOutlineTwitter/></a>
                   <a href="http://Instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
               </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
           
        </div>
        <div className="footer_copyright">
                <small>2022 HADIS EXERCISE &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer