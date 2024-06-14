// Importo lo style dell'header e la select dei Tag
import TagSelect from '../TagSelect/TagSelect.jsx';
import headerStyle from './Header.module.css';

const Header = () => {


    return (
        <>
            <header className={headerStyle.headerSec}>
                {/* Blog Title */}
                <h1>Il mio blog</h1>
                <TagSelect />
            </header>
        </>
    );
}

export default Header;