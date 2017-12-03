import React from "react"
import {Link} from "react-router-dom"

function Landing() {
    return (
        <div>
            <h1>Embarquer</h1>
            <Link to="/onboard"> Begin </Link>
        </div>
    )
}

export default Landing