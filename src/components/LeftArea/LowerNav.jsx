import { Nav, NavLink, NavItem, Container, Button, Row } from "reactstrap"
import BoxLinks from "./BoxLinks/BoxLinks"
import './style.scss'

export default function () {
    return (
        <>
            <div className="card d-flex NavBox lowerBox">
                <Nav className="">
                    <NavLink href="/" className="linksDefaultColor  pt-3 ">
                            <i class="bi bi-file-earmark-music-fill h4 "></i>
                            <b className="h5 flexrow">Your Library</b>
                        <NavLink href="/" className="linksDefaultColor flexRowSmall">
                            <i className="bi bi-plus-lg h4 "></i>
                        </NavLink>
                    </NavLink>
                </Nav>
                <div className="boxArea container">
                    <section className="box rounded p-4">
                        <div className="text">
                            <span className="fs-6 fw-bold">Create Your First Playlist</span>
                            <p className="fs-6 h6 ">It's easy, we'll help you</p>
                        </div>
                        <Button color="light mt-2 rounded-pill"><b className="dark small">Create playlist</b></Button>
                    </section>
                    <section className="box mt-3 rounded p-4">
                        <div className="text">
                            <span className="fs-6 fw-bold">Let's find some podcasts to follow</span>
                            <p className="fs-6 h6">We'll keep you updated on new episodes</p>
                        </div>
                        <Button color="light mt-2 rounded-pill"><b className="dark small">Browse podcasts</b></Button>
                    </section>
                </div>
                <Container fluid className="mb-3">
                    <BoxLinks />
                    <Button className="btn rounded-pill btn-link text-light border">
                        <i className="bi bi-globe"></i> <b>English</b>
                    </Button>
                </Container>
            </div>
        </>
    )
}