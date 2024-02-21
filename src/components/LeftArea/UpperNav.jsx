import { Nav, NavLink, NavItem } from "reactstrap"
import './style.scss'

export default function () {
    return (
        <>
            <Nav className="card d-flex NavBox">
                <NavLink href="/" className="">
                    <i className="bi bi-spotify icon"></i>
                    <span className=" title">Spotify</span>
                </NavLink>
                <NavLink href="/" className="">
                    <i className="bi bi-house-fill icon"></i>
                    <span className="title ">Home</span>
                </NavLink>
                <NavLink href="/search" className=" ">
                    <i className="bi bi-search icon"></i>
                    <span className="title "  >Search</span>
                </NavLink>
            </Nav>
        </>
    )
}