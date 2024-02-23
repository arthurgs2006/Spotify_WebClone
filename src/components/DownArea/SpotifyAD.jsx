import { Button } from "reactstrap"

export default function () {
    return (
        <>
            <div className="Ad d-flex justify-content-between">
                <div className="text-area flex-column">
                    <h6 className="text-white">Preview of Spotify</h6>
                    <p className="text-white">Sign up to get  unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                </div>
                <div className="btn-area ml-auto  ">
                    <Button color="light mt-2 rounded-pill "><b className="dark small">Sign up free</b></Button>
                </div>
            </div>
        </>
    )
}