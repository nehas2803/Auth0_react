import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.auth.getProfile()}</h1>
            </div>
        );
    }
}

export default Profile;