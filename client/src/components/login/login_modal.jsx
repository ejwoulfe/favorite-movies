import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './login_modal.scss';

function LoginModal() {

    const { user, setUser } = useContext(UserContext);

    console.log(user);



    // Retrieve all input field values, ignoring the send button, and put them into an array for validation.
    function getInputFieldValues(form) {

        let inputValuesArray = [];

        for (let i = 0; i < form.length; i++) {

            if (form[i].id !== "login_button") {

                inputValuesArray.push(form[i].value);

            }
        }

        return inputValuesArray;
    }


    async function authFields(event) {

        event.preventDefault();
        let formFieldValues = await getInputFieldValues(event.target);
        let formObject = {
            email: formFieldValues[0],
            password: formFieldValues[1]
        };




        await fetch('http://localhost:5000/auth/api/account/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formObject)
        })
            .then((response) => response.json())
            .then((result) => {
                setUser(result.user);
            })

    }




    return (
        <div id="login_modal">
            <h1>Login</h1>
            <form id="login_form" onSubmit={authFields}>
                <label htmlFor="email_input" className="form_label">Email</label>
                <input id="email_input" className="form_field" type="email" name="email" />
                <label htmlFor="form_text_area" className="form_label">Password</label>
                <input id="password_input" className="form_field" type="password" name="password" />
                <input id="login_button" type="submit" value="Login" />
            </form>

        </div>
    )
}

export default LoginModal;

