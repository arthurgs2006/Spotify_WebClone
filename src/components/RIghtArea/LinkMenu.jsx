import { Nav, Button, NavItem, NavLink } from "reactstrap"
export default function () {
    return (
        <>
            <div className="p-2 navLinkArea rounded-top shadow-lg">
                <Nav className="gap-2 d-flex justify-content-between w-100 p-2" >
                    <div className="links-area d-flex gap-2" >
                        <button className=" btn bg-black btn-xl btn-circle rounded-circle h6" >
                                &lt;
                        </button>
                        <button className=" btn bg-black btn-xl btn-circle rounded-circle h6" >
                                &gt;
                        </button>
                    </div>
                    <div className="sign-area d-flex ">
                        <NavItem>
                            <NavLink  href="#">
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