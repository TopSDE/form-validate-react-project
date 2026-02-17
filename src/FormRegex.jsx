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

        //emial validation
        let regexEmail = /\S+@\S+\.\S+/;
        if (email === "") {
            validate.email = "This field is mandatory!!!"
        } else if (!regexEmail.test(email)) {
            validate.email = "Email pattern is not matching"
        }

        //url validation
        let regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        if (url === "") {
            validate.url="This field is mandatory!!!"
        } else if(!regexUrl.test(url)) {
            validate.url = "Url pattern is not matching"
        }

        //digit validation => ONLY WHOLE NUMBERS (ex: 100)
        let regexDigits = /^[0-9]+$/
        if (digit === "") {
            validate.digit = "This field is mandatory!!!"
        } else if (!regexDigits.test(digit)) {
            validate.digit = "Digit pattern is not matching"
        }
        
        //number validation => BOTH WHOLE ND DECIMAL NUMBERS (ex: 100.99)
        let regexNumber = /^-?\d+(?:\.\d+)?$/
        if (number === "") {
            validate.number = "This field is mandatory!!!"
        } else if (!regexNumber.test(number)) {
            validate.number = "Number pattern is not matching"
        }
        
        //alphanumeric validation
        let regexAlpha = /^[a-zA-Z0-9\s]+$/
        if (alphanumeric === "") {
            validate.alphanumeric = "This field is mandatory!!!"
        } else if (!regexAlpha.test(alphanumeric)) {
            validate.alphanumeric = "Alpha Numeric pattern is not matching"
        }

        setErrors(validate) //passing error stored in "validate obj" into "error state"

    }

    const handleReset = event => {
        event.preventDefault()

        setFormData({
            email:"",
            url:"",
            digit:"",
            number:"",
            alphanumeric:""
        })

        setErrors({})

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
                <span>{errors.email}</span>

                <section>
                    <label htmlFor='url'>Url : </label>
                    <div>
                        <input type='text' id='url' name='url' value={url} onChange={handleChange}/>
                    </div>
                </section>
                <span>{errors.url}</span>

                <section>
                    <label htmlFor='digit'>Digit : </label>
                    <div>
                        <input type='text' id='digit' name='digit' value={digit} onChange={handleChange}/>
                    </div>
                </section>
                <span>{errors.digit}</span>

                <section>
                    <label htmlFor='number'>Number : </label>
                    <div>
                        <input type='text' id='number' name='number' value={number} onChange={handleChange}/>
                    </div>
                </section>
                <span>{errors.number}</span>

                <section>
                    <label htmlFor='alnum'>Aplha Numeric : </label>
                    <div>
                        <input type='text' id='alnum' name='alphanumeric' value={alphanumeric} onChange={handleChange}/>
                    </div>
                </section>
                <span>{errors.alphanumeric}</span>

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