import { Link } from 'react-router-dom';
import "./LandingPage.css";

export default function LandingPage() {
    return(
        <div>
            <h1 id="test">landing page</h1>
            <Link to="/login"> sign up / log in </Link>
        </div>
    )
}