import React from "react"
import { connect } from "react-redux"
import { reset } from "../actions"
import { Link } from "react-router-dom"

const STYLE = {textAlign: "center", marginTop:"33vh"}

function Landing({ dispatch }) {
    dispatch(reset())
    return (
        <div style={STYLE}>
            <h1>Embarquer</h1>
            <Link to="/onboard/step1"> Begin </Link>
        </div>
    )
}

Landing = connect()(Landing)

export default Landing