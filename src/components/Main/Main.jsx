// Importo lo style del main, l'array dei posts, la Post Card, il carosello, lo useState ed i bottoni del carosello
import PostCard from '../Card/PostCard';
import mainStyle from './Main.module.css';
import posts from '../../data/posts.js';
import carousel from '../../data/carousel.js';
import CarouselPost from '../CarouselPost/CarouselPost.jsx';
import { useState } from 'react';
import {
    FaArrowAltCircleLeft as Prev,
    FaArrowAltCircleRight as Next
} from "react-icons/fa";

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

    return (
        <>
            <main className={mainStyle.mainSec}>

                {/* Carosello dei Posts */}

                <div className={mainStyle.carousel}>
                    <button className={mainStyle.btn}>
                        <Prev
                            onClick={prevClick}
                        />
                    </button>

                    {postsCarousel.map((pc, i) => (
                        <CarouselPost
                            key={pc.id}
                            title={pc.title}
                            image={pc.image}
                            isActive={activePost === i}
                        />
                    ))}

                    <button className={mainStyle.btn}>
                        <Next
                            onClick={nextClick}
                        />
                    </button>
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