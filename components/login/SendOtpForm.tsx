'use client';
import React from 'react'

type Props = {
    // otpSent?: (sent: boolean) => void;
    otpSent?: any;
};

function SendOtpForm({ otpSent }: Props) {

    return (
        // <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        //         <img
        //             alt="Your Company"
        //             src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        //             className="mx-auto h-10 w-auto"
        //         />
        //         {/* <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        //                 Sign in to your account
        //             </h2> */}
        //     </div>

        //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        //         <form action="#" method="POST" className="space-y-6">
        //             <div>
        //                 <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        //                     Enter Mobile No.
        //                 </label>
        //                 <div className="mt-2">
        //                     <input
        //                         id="mobile"
        //                         name="mobile"
        //                         type="mobile"
        //                         required
        //                         autoComplete="mobile"
        //                         className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        //                     />
        //                 </div>
        //             </div>



        //             <div >
        //                 <button
        //                     type="submit"
        //                     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //                     onClick={() => otpSent(true)}
        //                 >
        //                     Send OTP
        //                 </button>
        //             </div>
        //         </form>

        //         {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
        //                 Not a member?{' '}
        //                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
        //                     Start a 14 day free trial
        //                 </a>
        //             </p> */}
        //     </div>
        // </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Enter Mobile No.
                    </label>
                    <div className="mt-2">
                        <input
                            id="mobile"
                            name="mobile"
                            type="mobile"
                            required
                            autoComplete="mobile"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>



                <div >
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={() => otpSent(true)}
                    >
                        Send OTP
                    </button>
                </div>
            </form>

            {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a>
                    </p> */}
        </div>
    )
}

export default SendOtpForm