import React, { useState } from 'react';

const FormValidate = () => {

  const [formData, setFormData] = useState({
    required:"",//1st input
    maxLength:"",//2nd input
    minLength:"",//3rd input
    valueLength:"",//4th input
    maxRange:"",//5th input
    minRange:"",//6th input
    rangeValue:"",//7th input
  })

  //to collect all errors and display it below input field
  const [errors, setErrors] = useState({})

  const { required, maxLength, minLength, valueLength, maxRange, minRange, rangeValue } = formData

  const handleSubmit = (event) => {
    event.preventDefault()

    //validating all input while submitting form
    let validate = {} //within "handleSubmit" store "all error" in "validate obj"

    //validating "required" input
    if (required === "") {
      validate.required = "This Field is Mandatory!!!"
    }

    //validating "maxLength" input
    if (maxLength === "") {
      validate.maxLength = "This Field is Mandatory!!!"
    } else if (maxLength.length > 6) {
      validate.maxLength = "Max Letters must be 6!!!"
    }

    //validating "minLength" input
    if (minLength === "") {
      validate.minLength = "This Field is Mandatory!!!"
    } else if (minLength.length < 6) {
      validate.minLength = "Min Letters must be 6!!!"
    }

    //validating "valueLength" input
    if (valueLength === "") {
      validate.valueLength = "This Field is Mandatory!!!"
    } else if (valueLength.length < 6 || valueLength.length > 12) {
      validate.valueLength = "Letters must be in the range 6-12 !!!"
    }

    //validating "maxRange" input
    if (maxRange === "") {
      validate.minLength = "This Field is Mandatory!!!"
    } else if (maxRange > 6) {
      validate.maxRange = "Max range must be 6!!!"
    }

    //validating "minRange" input
    if (minRange === "") {
      validate.minRange = "This Field is Mandatory!!!"
    } else if (maxRange < 6) {
      validate.minRange = "Min range must be 6!!!"
    }

    //validating "rangeValue" input
    if (rangeValue === "") {
      validate.rangeValue = "This Field is Mandatory!!!"
    } else if (rangeValue < 6 || rangeValue > 12) {
      validate.rangeValue = "rangeValue must be in the range 6-12 !!!"
    }

    setErrors(validate) //passing errors from "validate obj" into "error state"

  }

  const handleChange = (event) => {
    //console.log(event);
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value
    })
    
  }

  return (
    <>
      <form 
      onSubmit={handleSubmit} 
      className='bg-slate-400 w-80 rounded-lg shadow-lg shadow-black mx-auto mt-20 p-5'
      >
        <section className='py-2'>
          <h1 className='text-red-600 text-2xl font-medium text-center underline'>FORM VALIDATION</h1>
        </section>
        
        <section className='py-2'>
          <label htmlFor="req">Required : </label>
          <div>
            <input type="text" id="req" name='required' value={required} onChange={handleChange}
            className='w-full rounded-lg border-black border-2' />
          </div>
        </section>
        <span className='text-red-600'>{errors.required}</span>

        <section className='py-2'>
          <label htmlFor="maxlen">Max Length : </label>
          <div>
            <input type="text" id="maxlen" name='maxLength' value={maxLength} onChange={handleChange}
            className='w-full rounded-lg border-black border-2' />
          </div>
        </section>
        <span className='text-red-600'>{errors.maxLength}</span>

        <section className='py-2'>
          <label htmlFor="minlen">Min Length : </label>
          <div>
            <input type="text" id="minlen" name='minLength' value={minLength} onChange={handleChange}
            className='w-full rounded-lg border-black border-2' />
          </div>
        </section>
        <span className='text-red-600'>{errors.minLength}</span>

        <section className='py-2'>
          <label htmlFor="vallen">Value Length : </label>
          <div>
            <input type="text" id="vallen" name='valueLength' value={valueLength} onChange={handleChange}
            className='w-full rounded-lg border-black border-2' />
          </div>
        </section>
        <span className='text-red-600'>{errors.valueLength}</span>

        <section className='py-2'>
          <label htmlFor="maxr">Max Range : </label>
          <div>
            <input type="number" id="maxr" name='maxRange' value={maxRange} onChange={handleChange}
            className='w-full rounded-lg border-black border-2' />
          </div>
        </section>
        <span className='text-red-600'>{errors.maxRange}</span>

        <section className='py-2'>
          <label htmlFor="minR">Min Range : </label>
          <div>
            <input type="number" id="minR" name='minRange' value={minRange} onChange={handleChange}
            className='w-full rounded-lg border-black border-2' />
          </div>
        </section>
        <span className='text-red-600'>{errors.minRange}</span>

        <section className='py-2'>
          <label htmlFor="ranVal">Range Value : </label>
          <div>
            <input type="number" id="ranVal" name='rangeValue' value={rangeValue} onChange={handleChange}
            className='w-full rounded-lg border-black border-2' />
          </div>
        </section>
        <span className='text-red-600'>{errors.rangeValue}</span>

        <section className='py-2 flex justify-center'>
          <button className='py-2 w-40 bg-blue-500 rounded-md text-white'>SUBMIT</button>
        </section>

      </form>
    </>
  );
};
export default FormValidate