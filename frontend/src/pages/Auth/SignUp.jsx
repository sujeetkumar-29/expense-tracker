import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  //Handle Sign Up form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    let profieImageUrl = ""
    if (!fullName) {
      setError("Please enter your full name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    if (!profilePic) {
      setError("Please upload a profile picture");
      return;
    }
    setError("");
    
    // Sign Up API call logic goes here
    // After successful sign up, redirect to login or dashboard
    navigate('/login');
  }
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center ">
        <h3 className="text-xl font-semibold text-black ">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your details below.</p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />


          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
              placeholder="Enter your name"
              type="text"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="Enter your email"
              type="email"
            />
            <div className="col-span-2">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                placeholder="Enter your password"
                type="password"

              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          <button
            type="submit"
            className=" btn-primary "
          >
           Sign Up
          </button>
          <p className="text-[13px] text-slate-500 mt-4">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp