import { Link } from "react-router-dom";
import './character-styles.css';

function NotFound() {
    return (
        <div className="not-found-page">
            <img src="src/components/spiderman.png" alt="Spider-Man hanging upside down image" />
            <h1>404 - Not Found</h1>
            <p>Uh oh... that page doesn't exist!</p>
            <p>Return to the <Link to="/">homepage</Link>.</p>
        </div>
    )
}

export default NotFound;