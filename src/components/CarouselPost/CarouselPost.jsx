// Importo lo style del carosello
import postCarouselStyle from './CarouselPost.module.css';

const CarouselPost = ({ title, image, isActive }) => {
    return (
        isActive && (
            <div>
                <div className='card-image'>
                    <img src={image} alt={title} className={postCarouselStyle.img} />
                </div>
                <div className='card-body'>
                    <h3 className={postCarouselStyle.title}>{title}</h3>
                </div>
            </div>
        )
    );
}

export default CarouselPost;