import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Redirector extends Component {
    render(){
        if (this.props.complete){
            return (
                <Redirect to={this.props.destination} />
            )
        } else {
            return null
        }
    }
}

export default Redirector