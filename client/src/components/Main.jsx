import React from "react"
import {Card} from 'material-ui/Card';
import CreateUserProfile from './CreateUserProfile'

const CARD_STYLE = {
    textAlign: "center",
}

function Main () {
    return (
        <div>
            <h1>Onboard with Embarquer!</h1>
            <Card style={CARD_STYLE}>
                <CreateUserProfile />
            </Card>
        </div>
    )
}

export default Main