'use client'
import SendOtpForm from '@/components/login/SendOtpForm'
import OtpInput from '@/components/login/VerifyOtpForm';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Login() {
    const router = useRouter();
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState('');

    const handleOtpChange = (value: string) => {
        setOtp(value);
        console.log('Entered OTP:', value);
    };

    const hndleOtpVerify = () => {
        console.log('hndleOtpVerify clicked');

        router.replace('/home')
    }

    return (
        <>


            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    {/* <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2> */}
                </div>
                
                {isOtpSent ? <OtpInput length={6} onChange={handleOtpChange} hndleOtpVerify={hndleOtpVerify} /> : <SendOtpForm otpSent={setIsOtpSent} />}

            </div>

        </>
    )
}   
