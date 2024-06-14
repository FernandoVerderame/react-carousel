// Importo lo style del main, l'array dei posts, la Post Card, il carosello, lo useState, i bottoni del carosello ed i thumbnails
import PostCard from '../Card/PostCard';
import mainStyle from './Main.module.css';
import posts from '../../data/posts.js';
import carousel from '../../data/carousel.js';
import CarouselPost from '../CarouselPost/CarouselPost.jsx';
import { useState, useEffect } from 'react';
import {
    FaArrowAltCircleLeft as Prev,
    FaArrowAltCircleRight as Next
} from "react-icons/fa";
import CarouselThumbnails from '../CarouselThumbnails/CarouselThumbnails.jsx';

const Main = () => {

    const [activePost, setActivePost] = useState(0);

    const postsCarousel = carousel;

    const prevClick = () => {
        setActivePost(currentIndex =>
            currentIndex === 0 ? postsCarousel.length - 1 : currentIndex - 1
        );
    }

    const nextClick = () => {
        setActivePost(currentIndex =>
            currentIndex === postsCarousel.length - 1 ? 0 : currentIndex + 1
        );
    }

    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            nextClick();
        }, 2000);

        return () => clearInterval(interval);
    }, [activePost]);

    return (
        <>
            <main className={mainStyle.mainSec}>

                {/* Carosello dei Posts */}
                <div className={mainStyle.carousel}>

                    {/* Prev Button */}
                    <button className={mainStyle.btn}>
                        <Prev
                            onClick={prevClick}
                        />
                    </button>

                    {/* Post del carosello */}
                    {postsCarousel.map((pc, i) => (
                        <CarouselPost
                            key={pc.id}
                            title={pc.title}
                            image={pc.image}
                            isActive={activePost === i}
                        />
                    ))}

                    {/* Next Button */}
                    <button className={mainStyle.btn}>
                        <Next
                            onClick={nextClick}
                        />
                    </button>
                </div>

                {/* Thumbnails dei Posts */}
                <div className={mainStyle.thumbnails}>
                    {postsCarousel.map((pc, i) => (
                        <CarouselThumbnails
                            key={pc.id}
                            image={pc.image}
                            isActive={activePost === i}
                            onThumbnailClick={() => setActivePost(i)}
                        />
                    ))}
                </div>







                {/* Genero in modo dinamico i Posts */}
                {posts.map(p => (
                    p.published === true &&
                    <PostCard key={p.id}
                        title={p.title}
                        image={p.image}
                        tags={p.tags}
                        content={p.content}
                    />
                ))}
            </main>
        </>
    );
}

export default Main;