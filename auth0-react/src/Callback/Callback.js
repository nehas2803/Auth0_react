import React, { Component } from 'react'

export default class Callback extends Component {
    componentDidMount(){
        if(/access_token|id_token|error/.test(this.props.location.hash)){
            this.props.auth.handleAuthentication();
        }
    }
    render() {
        return (
            <div>
                <h1>Loading......</h1>
            </div>
        )
    }
}
