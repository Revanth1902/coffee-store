import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/register.css"

export default function Register() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactNumber: '',
    gender: '',
    maritalStatus: '',

    // Step 2
    street: '',
    city: '',
    state: '',
    pincode: '',

    // Step 3
    companyName: '',
    designation: '',
    startDate: '',
    endDate: '',
    ctc: '',
    currentlyWorking: false,
    reasonForLeaving: '',

    // Step 4
    idType: '',
    idNumber: '',
    idDocument: null,
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'file'
          ? files[0]
          : value
    }))
  }

  const nextStep = () => step < 4 && setStep(step + 1)
  const prevStep = () => step > 1 && setStep(step - 1)

  const progressPercent = (step / 4) * 100

  return (
    <div className="register-page">
      <div className="register-card">

        {/* HEADER */}
        <div className="register-header">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
            <span>Brew & Co</span>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="step-count">Step {step}/4</span>
        </div>

        {/* STEP CONTENT */}
        <div className="form-content">

          {step === 1 && (
            <>
              <h2>Personal Details</h2>

              <div className="row">
                <input name="firstName" placeholder="First Name" onChange={handleChange} />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} />
              </div>

              <input name="email" placeholder="Email" onChange={handleChange} />

              <div className="row">
                <input name="phone" placeholder="Phone" onChange={handleChange} />
                <input name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
              </div>

              <div className="row">
                <select name="gender" onChange={handleChange}>
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <select name="maritalStatus" onChange={handleChange}>
                  <option value="">Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Address Details</h2>

              <input name="street" placeholder="Street Address" onChange={handleChange} />

              <div className="row">
                <input name="city" placeholder="City" onChange={handleChange} />
                <input name="state" placeholder="State" onChange={handleChange} />
              </div>

              <input name="pincode" placeholder="Pincode" onChange={handleChange} />
            </>
          )}

          {step === 3 && (
            <>
              <h2>Work Experience</h2>

              <div className="row">
                <input name="companyName" placeholder="Company Name" onChange={handleChange} />
                <input name="designation" placeholder="Designation" onChange={handleChange} />
              </div>

              <div className="row">
                <input type="date" name="startDate" onChange={handleChange} />
                <input type="date" name="endDate" onChange={handleChange} />
              </div>

              <div className="row">
                <input name="ctc" placeholder="CTC" onChange={handleChange} />

                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="currentlyWorking"
                    onChange={handleChange}
                  />
                  Currently Working
                </label>
              </div>

              <textarea
                name="reasonForLeaving"
                placeholder="Reason for Leaving"
                onChange={handleChange}
              />
            </>
          )}

          {step === 4 && (
            <>
              <h2>Government Proof</h2>

              <select name="idType" onChange={handleChange}>
                <option value="">Select ID Type</option>
                <option value="aadhar">Aadhar</option>
                <option value="pan">PAN</option>
                <option value="voter">Voter ID</option>
              </select>

              <input name="idNumber" placeholder="ID Number" onChange={handleChange} />

              <input type="file" name="idDocument" onChange={handleChange} />
            </>
          )}

        </div>

        {/* ACTION BUTTONS */}
        <div className="form-actions">
          <button onClick={prevStep} disabled={step === 1}>
            Back
          </button>

          {step < 4 ? (
            <button onClick={nextStep}>Next</button>
          ) : (
            <button className="primary">Submit</button>
          )}
        </div>

      </div>
    </div>
  )
}
