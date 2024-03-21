import { Nav, NavLink } from "reactstrap"
import './style.scss'
import spotifyLogo from '../../../public/spotifyLogoWhite.png'

export default function () {
    return (
        <>
            <Nav className="d-flex NavBox upperMenu">
                <NavLink href="/" className="nav-link ">
                    <img src={spotifyLogo} alt="Spotify Logo" className="img-fluid spotifyLogo" />
                </NavLink>
                <NavLink href="/" className="nav-link linksDefaultColor">
                    <i class="bi bi-house-door-fill h4"></i>
                    <b className="h5">Home</b>
                </NavLink>
                <NavLink href="/search" className="nav-link linksDefaultColor">
                    <i className="bi bi-search icon h4"></i>
                    <b className="h5"  >Search</b>
                </NavLink>
            </Nav>
        </>
    )
}