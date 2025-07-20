import React from 'react'
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import TopTabs from '@/components/home/TopTabs';

function HomePage() {
    return (
        <div>

            <div className="flex items-center m-5">
                <div className='flex-1 font-bold text-xl'>ChatApp</div>
                <div className='flex flex-1 justify-end gap-6'>
                    <IoIosSearch />
                    <IoCameraOutline />
                    <HiOutlineDotsVertical />
                </div>
            </div>

            <main className="flex-1 text-white">
                <TopTabs />
            </main>

        </div>
    )
}

export default HomePage