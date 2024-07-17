import React, { useState } from 'react';


const Form2 = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div className='main'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        className='input'
                        type='text'
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                    <label>Email</label>
                    <input
                        className='input'
                        type='email'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />

                    <label>Password</label>
                    <input
                        className='input'
                        type='password'
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <label>Confirm Password</label>
                    <input
                        className='input'
                        type='password'
                        value={formData.confirmpassword}
                        onChange={(e) => setFormData({ ...formData, confirmpassword: e.target.value })}
                    />
                </div>
                <div>
                    <button type='submit'>Submit Form</button>
                </div>
            </form>
        </div>
    );
};

export default Form2;