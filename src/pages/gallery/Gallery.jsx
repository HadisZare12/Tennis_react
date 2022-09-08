import Header from "../../components/Header"
import HeaderImage from "../../images/back13.jpg"


import './gallery.css';

const Gallery = () => {
  const galleryLength = 9;
  const images = []

  for (let i=1; i<= galleryLength; i++){
     images.push(require(`../../images/tr${i}.jpg`))
  }
 
  return (
    <>
      <Header title="Gallery" image={HeaderImage}>
        Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
        Lorem ipsum  Lorem ipsum  Lorem ipsum
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => {
               return <article key={index}>
                  <img src={image} alt={`Gallery ${index + 1}`}/>
                </article>
            
            })
          }
        </div>
      </section>
    </>
    )
}

export default Gallery