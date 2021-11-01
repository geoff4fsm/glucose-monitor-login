import React, { Component } from 'react';
import UserService from '../services/UserService';



 class CreateUser extends Component {

     constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            fname: "",
            lname: "",
            emailid: "",
            password: "",
            
        }

        this.changeFnameHandler = this.changeFnameHandler.bind(this);
        this.changeLnameHandler = this.changeLnameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

    }

    componentDidMount() {

        if(this.state.id === 'add') {

            return

        } else {

            UserService.getUserById(this.state.id).then( res => {

                let user = res.data;
                    // console.log(user)
                this.setState({

                    fname: user.fname,
                    lname: user.lname,
                    emailid: user.emailid,
                    password: user.password,

                });
            });
        }
    }

    saveUser = (e) => {

        e.preventDefault();

        let user = { 
            
            fname: this.state.fname,
            lname: this.state.lname, 
            emailid: this.state.emailid, 
            password: this.state.password, 
                   
        };

        // console.log('user => ' + JSON.stringify(user));

        if(this.state.id === 'add') {

            UserService.createUser(user).then(res => {

                this.props.history.push('/users');

            });   

        } else {

                UserService.updateUser(user, this.state.id).then( res => {

                    this.props.history.push('/users');

                });
            }
    }

    cancel = () => {
        this.props.history.push('/');
    }

    changeFnameHandler = (event) => {
        this.setState({fname: event.target.value});
    }

    changeLnameHandler = (event) => {
        this.setState({lname: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailid: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    getHeader = () => {
        if(this.state.id === "add") {
            return <h3 className = "text-center">Add User</h3>
        } else {
            return <h3 className = "text-center">Update User</h3>
        }
    }

    render() {
        return (
            <div id = 'createuser'>
                <div className = "container">

                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">

                            {
                                this.getHeader()
                            }

                            <div className = "card-body">

                                <form>

                                    <div className = "form-group">
                                        <label> First Name </label>
                                        <input placeholder = "First Name" name = "fname" className = "form-control"
                                            value = {this.state.fname} onChange = {this.changeFnameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Last Name </label>
                                        <input placeholder = "Last Name" name = "lname" className = "form-control"
                                            value = {this.state.lname} onChange = {this.changeLnameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Email Id </label>
                                        <input placeholder = "Email Id" name = "emailid" className = "form-control"
                                            value = {this.state.emailid} onChange = {this.changeEmailIdHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Time </label>
                                        <input placeholder = "Password" name = "password" className = "form-control"
                                            value = {this.state.password} onChange = {this.changePasswordHandler}/>
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.saveUser}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel} style = {{marginLeft: "10px" }}>Cancel</button>
                                 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateUser