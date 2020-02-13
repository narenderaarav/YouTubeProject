import React, {Component} from "react";
import PersonalDetails from "./PersonalDetails"
import Welcome from "./Welcome"
import PickRegion from "./PickRegion"
import Pickyourpassion from "./Pickyourpassion"
export class UserForm extends Component{
    state = {
        step: 1,
        name: '',
        email: '',
        password: '',
        retypepassword: '',
        pickregion: '',
        pickyourpassion: '',

        nameError: "",
        emailError: "",


    }

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render(){
        const {step} = this.state;
        const {name, email, password, retypepassword, pickregion, pickyourpassion, nameError} = this.state;
        const values = {name, email, password, retypepassword, pickregion, pickyourpassion} 
     
        switch(step) {
            case 1:
            return (
                <PersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            );
        case 2:
        return (<Welcome
            nextStep={this.nextStep}
            handleChange={this.handleChange}
        />)

        case 3:
        return (
            <PickRegion
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            />
        )
        case 4:
        return <Pickyourpassion
        handleChange={this.handleChange}
        values={values}
        />

        }
 }  
}

export default UserForm;