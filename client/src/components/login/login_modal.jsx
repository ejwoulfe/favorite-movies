import React, { useEffect, useState } from 'react';
import './login_modal.scss';

function LoginModal(props) {




    return (
        <div id="login_modal">
            <h1>Login</h1>

            <form className="contact_form" >
                <label htmlFor="name_input" className="form_label">Name</label>
                <input id="name_input" className="form_field" type="text" name="name" />
                <label htmlFor="email_input" className="form_label">Email</label>
                <input id="email_input" className="form_field" type="email" name="email" />
                <label htmlFor="form_text_area" className="form_label">Password</label>
                <input id="password_input" className="form_field" type="password" name="password" />
                <input id="send_button" type="submit" value="Login" />
            </form>

        </div>
    )
}

export default LoginModal;

