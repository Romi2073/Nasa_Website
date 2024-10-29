import "../Stylesheets/navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="container">

            <section className="saturno">
                <NavLink className='' to={'/NasaImages'}><img src="../src/assets/saturno.png" className="saturno-image"></img></NavLink>
            </section>

            <section className="earth">
                <NavLink className='' to={'/NasaDate'}><img src="../src/assets/Earth.png" className="earth-image"></img></NavLink>
            </section>

            <section className="neo">
                <NavLink className='' to={'/NasaNeo'}><img src="../src/assets/meteoro.png" className="neo-image"></img></NavLink>
            </section>

            <section className="profile">
                <NavLink className='' to={'/Profile'}><img src="../src/assets/astronauta.png" className="profile-image"></img></NavLink>
            </section>

        </nav>
    )
}

export default Navbar;