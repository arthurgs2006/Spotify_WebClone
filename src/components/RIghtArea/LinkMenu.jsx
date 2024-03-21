import { Nav, Button, NavItem, NavLink } from "reactstrap"
// import './style.scss'
export default function () {
    return (
        <>
            <div className="p-2 navLinkArea rounded-top">
                <Nav className="gap-2 d-flex justify-content-between w-100 p-2" >
                    <div className="links-area d-flex gap-2" >
                        <button className=" btn btn-dark btn-xl btn-circle rounded-circle" >
                                &lt;
                        </button>
                        <button className=" btn btn-dark btn-xl btn-circle rounded-circle" >
                                &gt;
                        </button>
                    </div>
                    <div className="sign-area d-flex ">
                        <NavItem>
                            <NavLink className="" href="#">
                                <b className="text-light">Sign Up</b>
                            </NavLink>
                        </NavItem>
                        <Button className="btn btn-light rounded-pill">
                            <b>Log in</b>
                        </Button>
                    </div>
                </Nav>
            </div>
        </>
    )
}