import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/login'); // Navigate to login page after registration
    };

    return ( <
        div className = "body" >
        <
        div className = "container" >
        <
        h2 > Register < /h2> <
        form onSubmit = { handleSubmit }
        className = "form" >
        <
        input type = "text"
        name = "username"
        placeholder = "Username"
        value = { formData.username }
        onChange = { handleInputChange }
        required className = "input" /
        >
        <
        input type = "email"
        name = "email"
        placeholder = "Email"
        value = { formData.email }
        onChange = { handleInputChange }
        required className = "input" /
        >
        <
        input type = "password"
        name = "password"
        placeholder = "Password"
        value = { formData.password }
        onChange = { handleInputChange }
        required className = "input" /
        >
        <
        input type = "password"
        name = "confirmPassword"
        placeholder = "Confirm Password"
        value = { formData.confirmPassword }
        onChange = { handleInputChange }
        required className = "input" /
        >
        <
        button type = "submit"
        className = "button" > Register < /button> < /
        form > <
        /div> < /
        div >
    );
};

export default RegisterPage;
