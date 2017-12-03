import React from "react"
import {Link} from "react-router-dom"

const STYLE = {textAlign: "center", marginTop:"33vh"}

function Landing() {
    return (
        <div style={STYLE}>
            <h1>Embarquer</h1>
            <Link to="/onboard"> Begin </Link>
        </div>
    )
}

export default Landing