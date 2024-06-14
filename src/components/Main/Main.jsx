// Importo lo style del main, l'array dei posts e la Post Card
import PostCard from '../Card/PostCard';
import mainStyle from './Main.module.css';
import posts from '../../data/posts.js';
import carousel from '../../data/carousel.js';

const Main = () => {

    const postsCarousel = carousel;

    return (
        <>
            <main className={mainStyle.mainSec}>
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