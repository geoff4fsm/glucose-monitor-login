import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUserEntry extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fname: this.props.match.params.fname,
            lname: this.props.match.params.lname,
            entrydate: "",
            entrytime: "",
            glucose: 0,
            in_range: "",
            note: ""
        }

        this.changeEntryDateHandler = this.changeEntryDateHandler.bind(this);
        this.changeEntryTimeHandler = this.changeEntryTimeHandler.bind(this);
        this.changeGlucoseHandler = this.changeGlucoseHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
    }

    saveUserEntry = (e) => {
        e.preventDefault();
        let userEntry = { fname: this.state.fname,
            lname: this.state.lname,
            entrydate: this.state.entrydate, 
            entrytime: this.state.entrytime, 
            glucose: this.state.glucose, 
            in_range: this.state.in_range, 
            note: this.state.note
        }
        UserService.createUserEntry(user).then( res => {
            this.props.history.push('/users');
        })
    }

    changeEntryDateHandler = (event) => {
        this.setState({entrydate: event.target.value});
    }

    changeEntryTimeHandler = (event) => {
        this.setState({entrytime: event.target.value});
    }

    changeGlucoseHandler = (event) => {
        this.setState({glucose: event.target.value});

        const gluc = event.target.value;
		const inRange = gluc <= 70 ? "Low Treat Now" :
			gluc > 70 && gluc < 90 ? "Low" :
                gluc >= 90 && gluc <= 150 ? "In Range" :
				    gluc > 150 && gluc < 240 ? "High" :
					    "High Treat Now" ;

        this.setState({in_range: inRange})

    }

    changeNoteHandler = (event) => {
        this.setState({note: event.target.value});
    }
    
    render() {
        return (
            <div>
                <div className = "container">

                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">

                            {
                                this.getHeader()
                            }

                            <div className = "card-body">

                                <form>

                                    <div className = "form-group">
                                        <label> Date </label>
                                        <input placeholder = "Entry Date" name = "date" className = "form-control"
                                            value = {this.state.entrydate} onChange = {this.changeEntryDateHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Time </label>
                                        <input placeholder = "Entry Time" name = "time" className = "form-control"
                                            value = {this.state.entrytime} onChange = {this.changeEntryTimeHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Glucose </label>
                                        <input placeholder = "Enter Glucose" name = "glucose" className = "form-control"
                                            value = {this.state.glucose} onChange = {this.changeGlucoseHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Note </label>
                                        <input placeholder = "Enter Note If Needed" name = "note" className = "form-control"
                                            value = {this.state.note} onChange = {this.changeNoteHandler}/>
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
export default CreateUserEntry