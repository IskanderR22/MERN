
import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [firstnameerror, setFirstNameError] = useState("")
    const [lastnameerror, setLastNameError] = useState("")
    const [emailerror, setEmailError] = useState("")
    const [passworderror, setPasswordError] = useState("")
    const [confirmpassworderror, setConfirmPasswordError] = useState("")
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    // This is the first name error function ------------
    const firstNameError = (event) => {
        setFirstName(event);
        if(event.length < 1)
            setFirstNameError()
        else if(event.length < 3) {
            setFirstNameError("Must be at least two characters!")
        }
        else setFirstNameError(`Nice to meet you ${event}!`)
        
    }

    // This is the last name error function --------------
    const lastNameError = (event) => {
        setLastName(event);
        if(event.length < 1)
            setLastNameError()
        else if(event.length < 3) {
            setLastNameError("Must be at least two characters!")
        }
        else setLastNameError(`Cool last name ${event}!`)
    }
    
    // This is the email error function -----------
    const emailError = (event) => {
        setEmail(event);
        if(event.length < 1)
            setEmailError()
        else if(event.length < 6) {
            setEmailError("Must be at least 5 characters!")
        }
        else setEmailError(`You will be spammed here ${event}!`)
    }

    // This is the password error function ------------
    const passwordError = (event) => {
        setPassword(event);
        if(event.length < 1)
            setPasswordError()
        else if(event.length < 8) {
            setPasswordError("Must be at least 8 characters!")
        }
        else setPasswordError(`Perfect!!`)
    }

    // This is the password error function ------- 
    const confirmPasswordError = (event) => {
        setConfirmPassword(event);
        if(event.length < 1)
            setConfirmPasswordError()
        else if( event !== password) {
            setConfirmPasswordError("The passwords must match!!")
        }
        else setConfirmPasswordError(`Perfect!!`)
    }

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => firstNameError(e.target.value) } /> <br />
                <span>&nbsp; {firstnameerror}</span> 
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => lastNameError(e.target.value) } /> <br />
                <span>&nbsp; {lastnameerror}</span>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => emailError(e.target.value) } /> <br />
                <span>&nbsp; {emailerror}</span>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => passwordError(e.target.value) } /> <br />
                <span>&nbsp; {passworderror}</span>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => confirmPasswordError(e.target.value) } /> <br />
                <span>&nbsp; {confirmpassworderror}</span>
            </div>
            <input type="submit" value="Create User" /> <br />
            First Name: {firstname} <br />
            Last Name: {lastname} <br />
            Email: {email} <br />
            Password: {password} <br />
            Confirm Password: {confirmpassword} <br />
        </form>
    );
};
    
export default UserForm;