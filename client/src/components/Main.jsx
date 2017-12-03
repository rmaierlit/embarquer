import React from "react"
import {Card} from 'material-ui/Card';
import {Route} from 'react-router-dom';
import CreateUserProfile from '../containers/CreateUserProfile'
import UpdateProfileInfo from '../containers/UpdateProfileInfo'

const CARD_STYLE = {
    textAlign: "center",
}

function Main ({ match }) {
    return (
        <div>
            <h1>Onboard with Embarquer!</h1>
            <Card style={CARD_STYLE}>
                <Route path={`${match.url}/step1`} component={CreateUserProfile} />
                <Route path={`${match.url}/step2`} component={UpdateProfileInfo} />
            </Card>
        </div>
    )
}

export default Main