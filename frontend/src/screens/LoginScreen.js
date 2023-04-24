import './LoginScreen.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PingLoading from '../components/PingLoading';
import { login, register } from '../actions/actions';
import {Toaster, toast} from 'react-hot-toast'
const LoginScreen = () => {

    const [selected, setSelected] = useState(true);
    const [toggle, setToggle] = useState("login")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const loginSlice = useSelector((state) => state.login)
    const registerSlice = useSelector((state) => state.register)
    const { registerLoading, registerError } = registerSlice
    const { loading, userInfo, error } = loginSlice

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registerHandler = () => {
        dispatch(register(companyName, email, password))
    }

    const loginHandler = () => {
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (userInfo != null) {
            navigate("/")
        }
    }, [userInfo])

    useEffect(() => {
        if (error!=null) {
            console.log(error);
            toast.error(error)
        }
    }, [error])

    useEffect(()=>{
        if(registerError!=null){
            toast.error(registerError)
        }
    },[registerError])

    return (
        <>
            <div><Toaster /></div>
            <div className="bg-white bg-cover relative"
                style={{
                    backgroundImage: `url('https://media.istockphoto.com/id/1303485470/video/floating-white-droplets-loop.jpg?s=640x640&k=20&c=bPnL48rydl6Ttjjr-hRkFLmU7ChpyONA7QTpEln5B5c=')`,
                    backgroundRepeat: "no-repeat"
                }}>
                <div className="flex flex-col items-center justify-between pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
                    <div className="flex flex-col items-center w-full pr-10 pb-20 pl-10 lg:flex-row">
                        <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                            {/* <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                                <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" alt="logo" className="btn-" />
                            </div> */}
                        </div>
                        <div className="w-full max-w-2xl lg:w-5/12">
                            <div className="flex flex-col items-start justify-start mt-4 px-24 py-12 bg-white shadow-2xl rounded-xl relative z-10 testclass">
                                <div className="w-full max-w-sm mx-auto text-center">
                                    <div className="w-full m-auto flex flex-col mb-6 rounded-xl">
                                        <div className="relative w-full rounded-md border-gray-950 h-10 p-1 bg-gray-300 mt-6">
                                            <div className="relative w-full h-full flex items-center">
                                                <div onClick={() => {
                                                    setToggle("login")
                                                    setSelected(!selected)
                                                }} className="w-full flex justify-center text-black text-sm cursor-pointer">
                                                    <button>Log In</button>
                                                </div>
                                                <div onClick={() => {
                                                    setToggle("register")
                                                    setSelected(!selected)
                                                }} className="w-full flex justify-center text-black text-sm cursor-pointer">
                                                    <button>Sign Up</button>
                                                </div>
                                            </div>
                                            <span
                                                className={`bg-sky-500 shadow text-sm flex items-center justify-center w-1/2 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute ${selected ? 'left-1 text-white font-semibold' : 'left-1/2 -ml-1 text-white'
                                                    }`}
                                                children={selected ? "Log In" : "Sign Up"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    toggle == "register" ? (
                                        <div className="w-full mt-2 relative space-y-4">
                                            <p className="w-full text-2xl font-medium leading-snug font-sans">Create Your Account</p>
                                            <div className="relative">
                                                <input onChange={(e) => {
                                                    setCompanyName(e.target.value)
                                                }} placeholder="Enter Your Company Name" type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-3 mt-2  text-sm block bg-white border-gray-300 rounded-md" />
                                            </div>
                                            <div className="relative">
                                                <input onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                                    placeholder="Enter Your Email Address" type="email" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-3 mt-2  text-sm block bg-white border-gray-300 rounded-md" />
                                            </div>
                                            <div className="relative bg-opacity-80">
                                                <input onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }}
                                                    placeholder="Enter Your Password" type="password" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-3 mt-2 text-sm block bg-white border-gray-300 rounded-md" />
                                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4 text-gray-400"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>

                                            {registerLoading && <div class="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50"><PingLoading /></div>}

                                            <div className="relative bg-opacity-80">
                                                <input
                                                    onChange={(e) => {
                                                        setCPassword(e.target.value)
                                                    }}
                                                    placeholder="Re Enter Password" type="password" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-3 mt-2  text-base block bg-white border-gray-300 rounded-md" />
                                            </div>
                                            <div className="relative">
                                                <button onClick={registerHandler} className="w-full inline-block px-4 py-2 mt-6 text-lg font-medium text-center text-white bg-sky-500 rounded-lg transition duration-200 hover:bg-sky-600 ease">Submit</button>
                                            </div>
                                            <div className="flex flex-row">
                                                <hr className="border mt-2 w-full border-gray-400 flex-grow-1" />
                                                <p className="px-2 text-xs font-bold text-gray-700">OR</p>
                                                <hr className="border mt-2 w-full border-gray-400 flex-grow-1" />
                                            </div>
                                            <div className='items-center'>
                                                <p className='text-violet-600 text-center text-sm -mt-3'>Log In Using</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full mt-2 mb-14 relative space-y-4">
                                            <p className="w-full text-2xl font-medium leading-snug font-sans">Login</p>
                                            <div className="relative">
                                                <input
                                                    onChange={(e) => {
                                                        setEmail(e.target.value)
                                                    }}
                                                    placeholder="Enter Your Email Address" type="email" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-3 mt-2  text-sm block bg-white border-gray-300 rounded-md" />
                                            </div>
                                            <div className="relative bg-opacity-80">
                                                <input
                                                    onChange={(e) => {
                                                        setPassword(e.target.value)
                                                    }}
                                                    placeholder="Enter Your Password" type="password" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-3 mt-2 text-sm block bg-white border-gray-300 rounded-md" />
                                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4 text-gray-400"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>

                                            {loading && <div class="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50"><PingLoading /></div>}

                                            <div className="relative">
                                                <button onClick={loginHandler} className="w-full inline-block px-4 py-2 mt-6 text-lg font-medium text-center text-white bg-sky-500 rounded-lg transition duration-200 hover:bg-sky-600 ease">Submit</button>
                                            </div>
                                            <div className="flex flex-row">
                                                <hr className="border mt-2 w-full border-gray-400 flex-grow-1" />
                                                <p className="px-2 text-xs font-bold text-gray-700">OR</p>
                                                <hr className="border mt-2 w-full border-gray-400 flex-grow-1" />
                                            </div>
                                            <div className='items-center'>
                                                <p className='text-violet-600 text-center text-sm -mt-3'>Log In Using</p>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LoginScreen