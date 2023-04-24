import './LoginScreen.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PingLoading from '../components/PingLoading';
import { login, register } from '../actions/actions';
import { Toaster, toast } from 'react-hot-toast'
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { authentication } from '../firebase-config';
import { loginSuccess } from '../features/slice';

const LoginScreen = () => {

    const [selected, setSelected] = useState(true);
    const [toggle, setToggle] = useState("login")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [prompt, setPrompt] = useState(false)
    const loginSlice = useSelector((state) => state.login)
    const registerSlice = useSelector((state) => state.register)
    const { registerLoading, registerError } = registerSlice
    const { loading, userInfo, error } = loginSlice

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registerHandler = () => {
        if (!companyName || !email || !password || !cpassword) {
            toast.error("Please include all fields")
            return
        }
        if (password.length < 6) {
            setPrompt(true)
            return
        }
        if (password != cpassword) {
            toast.error("Please confirm your passowrd")
            return
        }
        dispatch(register(companyName, email, password))
    }

    const loginHandler = () => {
        if (!email || !password) {
            toast.error("Please include all fields")
            return
        }
        dispatch(login(email, password))

    }

    useEffect(() => {
        if (userInfo != null) {
            navigate("/")
        }
    }, [userInfo])

    useEffect(() => {
        if (error != null) {
            console.log(error);
            toast.error(error)
        }
    }, [error])

    useEffect(() => {
        if (registerError != null) {
            toast.error(registerError)
        }
    }, [registerError])

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider).then((res) => {
            const data = res.data.name;
            localStorage.setItem("userInfo", JSON.stringify(data));
            dispatch(loginSuccess(data))
        }).catch((err) => {
            toast.error(err.message)
        })
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider).then((res) => {
            const data = res.user.displayName;
            localStorage.setItem("userInfo", JSON.stringify(data));
            dispatch(loginSuccess(data))
        }).catch((err) => {
            toast.error(err.message)
        })
    }
    const signInWithGitHub = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(authentication, provider).then((res) => {
            const data = res.user.displayName;
            localStorage.setItem("userInfo", JSON.stringify(data));
            dispatch(loginSuccess(data))
        }).catch((err) => {
            toast.error(err.message)
        })
    }

    return (
        <>
            <div><Toaster /></div>
            <div className="bg-white bg-cover relative"
                style={{
                    backgroundImage: `url('https://media.istockphoto.com/id/1303485470/video/floating-white-droplets-loop.jpg?s=640x640&k=20&c=bPnL48rydl6Ttjjr-hRkFLmU7ChpyONA7QTpEln5B5c=')`,
                    backgroundRepeat: "no-repeat"
                }}>
                <div className="flex flex-col items-center justify-between pl-10 mr-auto ml-auto max-w-7xl xl:px-5 lg:flex-row">
                    <div className="flex flex-col items-center w-full pr-10 pb-20 pl-10 lg:flex-row">
                        <div className="w-full bg-cover items-center relative max-w-md lg:max-w-2xl lg:w-7/12">
                            <p className='text-4xl'>
                                Website Monitoring <br />
                                and performance <br />
                                testing solutions
                            </p>
                        </div>
                        <div className="w-full max-w-2xl lg:w-5/12">
                            <div className="flex flex-col items-start justify-start mt-4 px-24 py-6 bg-white shadow-2xl rounded-xl relative z-10 testclass">
                                <div className="w-full max-w-sm mx-auto text-center">
                                    <div className="w-full m-auto flex flex-col mb-6 rounded-xl">
                                        <div className="relative w-full rounded-md border-gray-950 h-10 p-1 bg-gray-100 mt-6">
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
                                                    placeholder="Enter Your Password" type={showPassword ? 'text' : 'password'} className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-3 mt-2 text-sm block bg-white border-gray-300 rounded-md" />
                                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                                    <svg
                                                        onClick={() => setShowPassword(true)}
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
                                                {
                                                    prompt && <p className='text-xs text-gray-400'>Password length must be atleast 6 characters long</p>

                                                }
                                            </div>

                                            {registerLoading && <div class="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50"><PingLoading /></div>}

                                            <div className="relative bg-opacity-80">
                                                <input
                                                    onChange={(e) => {
                                                        setCPassword(e.target.value)
                                                    }}
                                                    placeholder="Re Enter Password" type={showPassword ? 'text' : 'password'} className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-3 mt-2  text-base block bg-white border-gray-300 rounded-md" />
                                                <span onClick={() => setShowPassword(true)} class="absolute inset-y-0 end-0 grid place-content-center px-4">
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
                                                <div className='flex flex-row w-full justify-center'>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" className="w-6 h-6 m-2 justify-center" alt="facebook" onClick={signInWithFacebook} />
                                                    <img src="https://w7.pngwing.com/pngs/608/931/png-transparent-gmail-new-logo-icon.png" className="w-6 h-6 m-2 justify-center rounded-full" alt="gmail" onClick={signInWithGoogle} />
                                                </div>
                                                <div class='flex flex-row items-center justify-center w-full'>
                                                    <p class='text-center text-sm'>Already have an account?</p>
                                                    <button onClick={() => {
                                                        setToggle("login")
                                                        setSelected(!selected)
                                                    }} class='text-blue-500 text-sm'>Login</button>
                                                </div>

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
                                                <div className='flex flex-row w-full justify-center'>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" className="w-6 h-6 m-2 justify-center" alt="facebook" onClick={signInWithFacebook} />
                                                    <img src="https://w7.pngwing.com/pngs/608/931/png-transparent-gmail-new-logo-icon.png" className="w-6 h-6 m-2 justify-center rounded-full" alt="gmail" onClick={signInWithGoogle} />
                                                    <img src="https://p1.hiclipart.com/preview/347/293/202/cat-icon-github-github-pages-user-computer-share-icon-source-code-black-png-clipart.jpg" className="w-6 h-6 m-2 justify-center rounded-full" alt="gmail" onClick={signInWithGitHub} />
                                                </div>
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