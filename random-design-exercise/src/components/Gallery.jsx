import imagesData from "../images-data"
import GalleryImage from "./GalleryImage"

export default function Gallery() {
    
    const images = imagesData.map(image => {
        return (
            <GalleryImage key={image.key}
                          img={image.img} />
        )
    })

    return (
        <section className="gallery-section">
            <h1 className="gallery--title">gallery</h1>
            <p className="gallery--p">we hope your life may be vibrant like these pretty pictures</p>

            <div className="gallery">
              {images}
            </div>
        </section>
        
    )
}