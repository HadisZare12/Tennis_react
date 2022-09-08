import Header from "../../components/Header"
import HeaderImage from "../../images/back9.jpg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import './contact.css';




const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor   Lorem ipsum dolor   Lorem ipsum dolor   Lorem ipsum dolor   Lorem ipsum dolor 
      Lorem ipsum dolor   Lorem ipsum dolor   Lorem ipsum dolor 
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:hadiszare405@gmail.com" target="_blank" rel=" norefrrer noopener"><MdEmail/></a>
          <a href="#" target="_blank" rel=" norefrrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+491631859993" target="_blank" rel=" norefrrer noopener"><IoLogoWhatsapp/></a>
        </div>

      </div>

    </section>
    </>
  )
}

export default Contact