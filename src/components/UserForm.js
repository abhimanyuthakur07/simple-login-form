import React, { Component } from 'react' 
import FormUserDetails from './FormUserDetails'

export default class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
        };  
        // Proceed to next step
    nextStep = (e) => {
    e.preventDefault();
    const { step } = this.state;
    this.setState({
            step: step + 1
    });
    };

  // Go back to prev step
    prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
    };
    // continue = e => {
    //     e.preventDefault();
    //     this.nextStep();
    //     }; 

  // Handle fields change
    handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    };
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };
        
        switch (step) {
            case 1:
                return (
                    <div>
                    <FormUserDetails continue={this.continue} nextStep={this.nextStep}  handleChange={this.handleChange} values={values} />
                    </div>
                
                );
            case 2:
                return (
                <h1>jhajajadhad</h1>
                );
            case 3:
                return (
                    <h1>jhajajadhad</h1>
                );
            case 4:
                return <h1>jhajajadhad</h1>;
            }
    }
}
