import React, { useState } from 'react'

const FormRegex = () => {

    const [formData, setFormData] = useState({
        email:"",
        url:"",
        digit:"",
        number:"",
        alphanumeric:""
    })

    const {email, url, digit, number, alphanumeric} = formData

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // validate all input on submitting the form
        let validate = {} // within "handleSubmit" will collect "all error" 
        // in "validate obj"

        let regexEmail = /\S+@\S+\.\S+/;
        if (email === "") {
            validate.email="This field is mandatory!!!"
        } else if (!regexEmail.test(email)) {
            validate.email="Email pattern is not matching"
        }

        setErrors(validate) //passing error stored in "validate obj" into "error state"

    }

    const handleReset = event => {
        event.preventDefault()
    }

    return (
        <>
            <form>
                <section>
                    <h1>Form validation by regular expression</h1>
                </section>
                    
                <section>
                    <label htmlFor='email'>Email : </label>
                    <div>
                        <input type='text' id='email' name='email' value={email} onChange={handleChange}/>
                    </div>
                </section>

                <section>
                    <label htmlFor='url'>Url : </label>
                    <div>
                        <input type='text' id='url' name='url' value={url} onChange={handleChange}/>
                    </div>
                </section>

                <section>
                    <label htmlFor='digit'>Digit : </label>
                    <div>
                        <input type='text' id='digit' name='digit' value={digit} onChange={handleChange}/>
                    </div>
                </section>

                <section>
                    <label htmlFor='number'>Number : </label>
                    <div>
                        <input type='text' id='number' name='number' value={number} onChange={handleChange}/>
                    </div>
                </section>

                <section>
                    <label htmlFor='alnum'>Aplha Numeric : </label>
                    <div>
                        <input type='text' id='alnum' name='alphanumeric' value={alphanumeric} onChange={handleChange}/>
                    </div>
                </section>

                <section>
                    <button onClick={handleSubmit}>SUBMIT</button>
                    <button onClick={handleReset}>RESET</button>
                </section>
            </form>
        </>
    )
}
export default FormRegex

// IF we have only one btn then => go for onSubmit event
// ELSE => go for onClick event