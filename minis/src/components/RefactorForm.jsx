import React, { useState } from "react";
import '../components/form.css';

const Form = () => {
    // Group all form state into one object
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "",
        subjects: {
            english: true,
            math: false,
            physics: false,
        },
        resume: "",
        url: "",
        selectedOption: "",
        about: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                subjects: {
                    ...prevData.subjects,
                    [name]: checked
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubjectChange = (subject) => {
        setFormData((prevData) => ({
            ...prevData,
            subjects: {
                ...prevData.subjects,
                [subject]: !prevData.subjects[subject]
            }
        }));
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            gender: "male",
            subjects: {
                english: true,
                math: false,
                physics: false
            },
            resume: "",
            url: "",
            selectedOption: "",
            about: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    // Dynamic rendering of checkboxes for subjects
    const subjectOptions = ["english", "math", "physics"];

    return (
        <div className="form">
            <h1>Form in React</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name* </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstname"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        required
                    />

                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastname"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                        required
                    />

                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />

                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter Mobile number"
                        required
                    />

                    <label>Gender*</label>
                    {["male", "female", "other"].map((genderValue) => (
                        <React.Fragment key={genderValue}>
                            <input
                                type="radio"
                                name="gender"
                                value={genderValue}
                                id={genderValue}
                                checked={formData.gender === genderValue}
                                onChange={handleChange}
                            />
                            {genderValue.charAt(0).toUpperCase() + genderValue.slice(1)}
                        </React.Fragment>
                    ))}

                    <label>Your best Subject</label>
                    {subjectOptions.map((subject) => (
                        <React.Fragment key={subject}>
                            <input
                                type="checkbox"
                                name={subject}
                                id={subject}
                                checked={formData.subjects[subject]}
                                onChange={() => handleSubjectChange(subject)}
                            />
                            {subject.charAt(0).toUpperCase() + subject.slice(1)}
                        </React.Fragment>
                    ))}

                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="resume"
                        id="file"
                        onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                        required
                    />

                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        value={formData.url}
                        onChange={handleChange}
                        placeholder="Enter URL"
                        required
                    />

                    <label>Select your choice</label>
                    <select
                        name="selectedOption"
                        id="select"
                        value={formData.selectedOption}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select your answer</option>
                        <optgroup label="Beginner">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="t">MongoDB</option>
                        </optgroup>
                    </select>

                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder="Tell us about yourself"
                        required
                    />

                    <button type="button" onClick={handleReset}>Reset</button>
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
};

export default Form;
