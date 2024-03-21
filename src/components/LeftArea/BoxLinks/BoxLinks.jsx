import { NavLink } from "reactstrap"

const links = ["Legal", "Safety & Police Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility", "Notice at Collection", "Your Privacy Choices", "Cookies"]
export default function () {
    return (
        <>
            <div className="linkBox container">
                {links.map((linkName, index) => (
                    <>
                        <NavLink key={index} >
                            <span className="h6 d-flex link">
                                {linkName}
                            </span>
                        </NavLink>
                    </>
                ))}
            </div>
        </>
    )
}