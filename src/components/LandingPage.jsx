import { Link } from "react-router-dom";

function LandingPage() {

    return(
        <>
            <h2>Namaste ji</h2>
            <h3>Welcome to Landing Page</h3>
            <br></br>
            <Link to={'/dashboard'}>
                <p>take me to dashboard</p>
            </Link>
        </>
    )
}

export default LandingPage;