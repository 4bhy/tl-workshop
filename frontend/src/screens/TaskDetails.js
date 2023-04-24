import React from 'react'
import Navbar from '../components/Navbar'

const TaskDetails = () => {
    return (
        <>
        <Navbar/>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col bg-cover justify-center sm:py-12" style={{ backgroundImage: 'url(https://picsum.photos/id/1018/1000)' }}>
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-4 bg-white shadow-lg sm:rounded-3xl sm:p-10 bg-clip-padding bg-opacity-60 border border-gray-200" style={{ backdropFilter: 'blur(20px)' }}>
                        <div class="max-w-md mx-auto">
                            <div class="divide-y divide-gray-200">
                                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <ul class="list-disc space-y-2">
                                        <li class="flex items-start">
                                            <span class="h-6 flex items-center sm:h-7">
                                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            <p class="ml-2">
                                            <p>Technologies used: React, Redux Toolkit, Express, MySQL, Tailwind CSS</p>
                                            </p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="h-6 flex items-center sm:h-7">
                                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            <p class="ml-2">
                                            Authentication with Facebook, Gmail, GitHub 
                                            </p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="h-6 flex items-center sm:h-7">
                                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            <p class="ml-2">Deployed on Render and Netlify</p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="h-6 flex items-center sm:h-7">
                                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            <p class="ml-2">AWS SQL Server</p>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="h-6 flex items-center sm:h-7">
                                                <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            <p class="ml-2">Source Code- <a target="_blank" className='text-blue-500' href="https://github.com/4bhy/tl-workshop">GitHub</a></p>
                                        </li>
                                    </ul>
                                  
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskDetails
