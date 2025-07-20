'use client';

import React, { useRef } from 'react';

type OtpInputProps = {
    length?: number;
    onChange?: (otp: string) => void;
    hndleOtpVerify: () => void;
};

export default function OtpInput({ length = 6, onChange, hndleOtpVerify }: OtpInputProps) {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 1);
        e.target.value = value;

        if (value && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        const otp = inputsRef.current.map((input) => input?.value || '').join('');
        onChange?.(otp);
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === 'Backspace' && !inputsRef.current[index]?.value && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
            <div className=" flex justify-between">
                {Array.from({ length }).map((_, i) => (
                    <input
                        key={i}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        ref={(el) => {
                            inputsRef.current[i] = el;
                        }}
                    />
                ))}
            </div>
            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={hndleOtpVerify}
                >
                    Verify OTP
                </button>
            </div>
        </div>
    );
}
