import { Nav, NavLink, NavItem, Container, Button } from "reactstrap"
import './style.scss'

export default function () {
    return (
        <>
            <Nav className="card d-flex NavBox lowerBox">
                <Nav className="navItemPlaylist">
                    <NavItem>
                        <NavLink href="/" className="">
                            <i class="bi bi-file-earmark-music-fill"></i>
                            <b className=" title">Your Library</b>
                        </NavLink>
                    </NavItem>
                    <NavItem className="">
                        <NavLink href="/" className="">
                            <i class="bi bi-plus-lg"></i>
                        </NavLink>
                    </NavItem>
                </Nav>
                    <section className="box">
                        <div className="text">
                            <span className="fs-6 fw-bold">Create Your First Playlist</span>
                            <p className="fs-6 h6">It's easy, we'll help you</p>
                        </div>
                        <Button color="light mt-2 rounded-pill"><b className="dark small">Create playlist</b></Button>
                    </section>
                    <section className="box mt-3">
                        <div className="text">
                            <span className="fs-6 fw-bold">Let's find some podcasts to follow</span>
                            <p className="fs-6 h6">We'll keep you updated on new episodes</p>
                        </div>
                        <Button color="light mt-2 rounded-pill"><b className="dark small">Browse podcasts</b></Button>
                    </section>
            </Nav>
        </>
    )
}