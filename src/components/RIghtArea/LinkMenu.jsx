import { Nav, Button, NavItem, NavLink } from "reactstrap"
import './style.scss'
export default function () {
    return (
        <>
            <div className="p-2">
                <Nav className="gap-2 d-flex justify-content-between ">
                    <div className="links-area">
                        <button className="rounded-circle btn btn-link text-light" >
                            <i class="bi bi-arrow-left-short"></i>
                        </button>
                        <button className="rounded-circle btn btn-link text-light">
                            <i class="bi bi-arrow-right-short"></i>
                        </button>
                    </div>
                    <div className="sign-area d-flex ">
                        <NavItem>
                            <NavLink className="" href="#">
                                <b className="text-light ">Sign Up</b>
                            </NavLink>
                        </NavItem>
                        
                        <Button className="btn btn-light">
                            <b>Log in</b>
                        </Button>
                    </div>
                </Nav>

            </div>
        </>
    )
}