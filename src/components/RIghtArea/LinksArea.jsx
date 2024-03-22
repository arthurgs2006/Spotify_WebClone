import { Row, Col, NavLink } from "reactstrap"
export default function () {

    return (
        <>
            <Row className="p-5">
                <Col>
                    <h5>
                        <b>Company</b>
                    </h5>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            About
                        </span>
                    </NavLink>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            Jobs
                        </span>
                    </NavLink>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            For the Record
                        </span>
                    </NavLink>
                </Col>
                <Col>
                    <h5>
                        <b>Communities</b>
                    </h5>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            For Artists
                        </span>
                    </NavLink>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            Developers
                        </span>
                    </NavLink>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            Advertising
                        </span>
                    </NavLink>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            Investors
                        </span>
                    </NavLink>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            Vendors
                        </span>
                    </NavLink>
                </Col>
                <Col>
                    <h5>
                        <b>Useful links</b>
                    </h5>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            Suport
                        </span>
                    </NavLink>
                    <NavLink >
                        <span className="h6 d-flex text-secondary">
                            Free Mobile Apps
                        </span>
                    </NavLink>
                </Col>
            </Row>
            <hr className="m-4" />
            <span className="px-4 text-secondary">Made by Arthur Gonçalves Saldanha &lt;/&gt;</span>
            <p className="px-4 text-secondary">Spotify WebClone <b>v1.0</b> </p>
        </>
    )
}