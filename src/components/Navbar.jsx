import { Link, useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();

    return(
        <div style={{
            background : 'yellow'
        }}>
            {/* Link and useNavigate() hook work in the same way, routing to new route(page/component?) */}

            <button onClick={() => {
                navigate('/')
            }}>Home</button>
            <Link to={'/dashboard'}>
                <button>Dashboard</button>
            </Link>
            {/* <p>maanlo ye navbar hai aur har page par fixed hoga</p> */}
        </div>
    )
}

export default Navbar;