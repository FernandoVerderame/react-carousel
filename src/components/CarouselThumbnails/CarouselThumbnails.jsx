// Importo lo style dei thumbnails
import carouselThumbnailsStyle from './CarouselThumbnails.module.css';

const CarouselThumbnails = ({ image, onThumbnailClick }) => {
    return (
        <>
            <figure onClick={onThumbnailClick}>
                <img src={image} alt='thumbnail-image' className={carouselThumbnailsStyle.img} />
            </figure>
        </>
    );
}

export default CarouselThumbnails;