import React, { useState } from 'react';
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpForm= ({setIsLoggedIn})=>{
    const navigate = useNavigate();
    const [formData, setFormData]= useState({
        firstName:"",
        lastName:"",
        CreatePassword:"",
        confirmPassword:""
    })

    const[showPassword, setShowPassword] =useState(false)
    const [showPassword1, setShowPassword1] =useState(false)
    const [accountType, setAccountType] = useState("student")

    function changeHandler(event){
        setFormData((prevData)=>(
         {
         ...prevData,
         [event.target.name]:event.target.value
         }
        ))
    }
        function submitHandler(event){
            event.preventDefault();
            if(formData.CreatePassword!=formData.confirmPassword){
                toast.error("Pasword do not match");
                return;
                
            }
            setIsLoggedIn(true);
            toast.success("Account Created");
            const accountData ={
                ...formData
            };

            const finalData={
                ...accountData, 
                accountType
            };

            console.log("printing final account data");
            console.log(finalData);
            navigate("/dashboard");
        
        }


     return(
       <div >
        {/*student instructor tav*/}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-4 -mb-1 rounded-full max-w-max'>
        <button 
        className={`${accountType==="student"?
        "bg-richblack-900 text-richblack-5 "
         :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("student")} >
            Student
        </button>
        <button
         className={`${accountType==="instructor"?
         "bg-richblack-900 text-richblack-5 "
          :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("instructor")}>
            Instructor
        </button>
        </div>

        <form onSubmit={submitHandler}
        className='flex flex-col gap-2'
        >
          {/* first name and last name */}
          <div className='flex justify-between mt-[10px] '>

          <label className='w-fill'>
                <p
                  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                >First Name <sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                placeholder='Enter First Name'
                name='firstName'
                onChange={changeHandler}
                value={formData.firstName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>

            <label className='w-fill'>
                <p
                  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                >Last Name <sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                placeholder='Enter Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>
          </div>
           {/* email Address */}
          <label>
                <p
                 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                >Email Address <sup className='text-pink-200'>*</sup></p>
                <input
                type='email'
                placeholder='Enter Email Address'
                name='email'
                onChange={changeHandler}
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>

            {/* create password and conform password */}
            <div className='flex justify-between'>     
                   <label className='relative'>
                <p
                 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                >Create Password <sup className='text-pink-200'>*</sup></p>
                <input
                type={showPassword?("text"):("password")}
                placeholder='Enter Password'
                name='CreatePassword'
                onChange={changeHandler}
                value={formData.CreatePassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                <span 
                className=' absolute right-3 top-[40px] cursor-pointer  text-white
                '
                onClick={()=>setShowPassword((prev)=>!prev)}>         
            {showPassword ?
            (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>)
            :(<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
            </span>
            </label>
            
            <label className='relative'>
                <p
                 className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                >Confirm Password <sup className='text-pink-200'>*</sup></p>
                <input
                type={showPassword1?("text"):("password")}
                placeholder='Confirm Password'
                name='confirmPassword'
                onChange={changeHandler}
                value={formData.confirmPassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                <span
                className=' absolute right-3 top-[40px] cursor-pointer  text-white
                ' onClick={()=>setShowPassword1((prev)=>!prev)} 
                >         
            {showPassword1 ?
            (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>):
            (<AiOutlineEye  fontSize={24} fill='#AFB2BF' />)}
            </span>
            </label>
            </div>


            <button className='bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4'>
                Create Account
            </button>
        </form>


       </div>
    )
}
export default SignUpForm;