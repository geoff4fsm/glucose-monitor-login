import React, { Component } from 'react'
import UserService from '../services/UserService';

 class CheckUser extends Component {

    constructor(props) {
        super(props)

        this.state = {

            emailid: "",
            password: ""
            
        }
    }

    render() {
        return (
            <div id = 'checkuser'>
                
            </div>
        )
    }
}
export default CheckUser