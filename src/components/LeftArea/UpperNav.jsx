import { Nav, NavLink, NavItem } from "reactstrap"
import './style.scss'

export default function () {
    return (
        <>
            <Nav className="card d-flex NavBox">
                <NavLink href="/" className="nav-link">
                    <i className="bi bi-spotify icon"></i>
                    <b className=" title">Spotify</b>
                </NavLink>
                <NavLink href="/" className="nav-link">
                    <i className="bi bi-house-fill icon"></i>
                    <b className="title ">Home</b>
                </NavLink>
                <NavLink href="/search" className="nav-link">
                    <i className="bi bi-search icon"></i>
                    <b className="title "  >Search</b>
                </NavLink>
            </Nav>
        </>
    )
}