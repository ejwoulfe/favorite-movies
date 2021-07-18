import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './signup.scss';

function SignUpPage() {

    const { user, setUser } = useContext(UserContext);




    // Retrieve all input field values, ignoring the send button, and put them into an array for validation.
    function getInputFieldValues(form) {

        let inputValuesArray = [];

        for (let i = 0; i < form.length; i++) {

            if (form[i].id !== "signup_button") {

                inputValuesArray.push(form[i].value);

            }
        }

        return inputValuesArray;
    }


    async function authFields(event) {

        event.preventDefault();
        let formFieldValues = await getInputFieldValues(event.target);
        let formObject = {
            firstName: formFieldValues[0],
            lastName: formFieldValues[1],
            email: formFieldValues[2],
            password: formFieldValues[3]
        };




        await fetch('http://localhost:5000/auth/api/account/signup', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formObject)
        })
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response);
                } else {
                    return response.json();
                }
            })
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });

    }




    return (
        <div id="signup_modal">
            <h1>Sign Up</h1>
            <form id="signup_form" onSubmit={authFields}>
                <label htmlFor="first_name_input" className="form_label">First Name</label>
                <input id="first_name_input" className="form_field" type="text" name="first_name" />
                <label htmlFor="last_name_input" className="form_label">Last Name</label>
                <input id="last_name_input" className="form_field" type="text" name="last_name" />
                <label htmlFor="email_input" className="form_label">Email</label>
                <input id="email_input" className="form_field" type="email" name="email" />
                <label htmlFor="form_text_area" className="form_label">Password</label>
                <input id="password_input" className="form_field" type="password" name="password" />
                <input id="signup_button" type="submit" value="Sign Up" />
            </form>

        </div>
    )
}

export default SignUpPage;

