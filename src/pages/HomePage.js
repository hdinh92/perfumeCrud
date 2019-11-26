import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
class HomePage extends Component {
    render() {
        var loggedInUser = sessionStorage.getItem('users')
        if(loggedInUser === null) {
            return <Redirect to='/login'> </Redirect>
        }
        return (
            <div>
                home
            </div>
        );
    }
}

export default HomePage;