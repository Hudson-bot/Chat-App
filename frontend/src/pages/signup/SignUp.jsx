import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',  // ✅ Corrected key from `userName` to `username`
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs((prev) => ({ ...prev, gender }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              value={inputs.username}  // ✅ Fixed from `inputs.userName`
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              required
            />
          </div>

          {/* Gender Selection */}
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          {/* Login Link */}
          <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </Link>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


//STARTER CODE FOR SIGNUP COMPONENT
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Sign Up 
//           <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type='text'
// 							placeholder='John Doe'
// 							className='w-full input input-bordered  h-10'/>
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>User Name</span>
//             </label>
//             <input type='text'
// 							placeholder='johndoe'
// 							className='w-full input input-bordered  h-10'/>
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type='password'
// 							placeholder='Enter password'
// 							className='w-full input input-bordered  h-10'/>
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered  h-10'/>
//           </div>


//           {/* GENDER CHECKBOX GOES HERE*/}
//           <GenderCheckbox/>

//           <a
//           className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
//             Already have an acoount?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2 border border-slate-700'>
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default SignUp