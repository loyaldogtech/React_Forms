import React, { useState } from 'react';

const Form = () => {

    //step 2: Define state for form data

    //Method 1 (Preferred)
    const [formData, setFormData] = useState({
        username: '',
        feedback: '',
        topic: 'reactjs'
    });

    //Method 2
    // const [username, setUsername] = useState('');
    // const [feedback, setFeedback] = useState('');
    // const [topic, setTopic] = useState('');


    //Step 4: Handle form submission
    const handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={formData.username}
                    //step 3: Handle input changes
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
            </div>
            <div>
                <label>Feedback</label>
                <textarea
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                />
            </div>
            <div>
                <label>Topic</label>
                <select value={formData.topic} onChange={(e) => setFormData({ ...formData, topic: e.target.value })}>
                    <option value='reactjs'>Reactjs</option>
                    <option value='angular'>Angular</option>
                    <option value='nextjs'>Nextjs</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;