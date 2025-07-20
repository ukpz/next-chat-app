'use client';

import { useState } from 'react';
import { MdMessage, MdCall } from "react-icons/md";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { LuCheckCheck, LuMessageSquarePlus } from 'react-icons/lu';
import { BiCamera, BiPhone } from 'react-icons/bi';
import Image from 'next/image';

const tabs = ['Chats', 'Status', 'Calls'] as const;
// type TabType = typeof tabs[number];

const iconMap = {
    Chats: <MdMessage size={18} className="inline-block mr-1" />,
    Status: <GrStatusCriticalSmall size={18} className="inline-block mr-1" />,
    Calls: <MdCall size={18} className="inline-block mr-1" />
};

export default function TopTabs() {
    const [activeTab, setActiveTab] = useState('Chats');

    return (
        <div className="w-full">
            <div className="flex justify-around items-center border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4 text-center relative transition-all ${activeTab === tab ? ' text-blue-500' : 'text-gray-400'
                            }`}
                    >
                        {iconMap[tab]} {tab}
                        {activeTab === tab && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[.2rem] bg-blue-500"></span>
                        )}
                    </button>
                ))}
            </div>

            <div className="p-4">
                {activeTab === 'Chats' && <ChatList />}
                {activeTab === 'Status' && <StatusList />}
                {activeTab === 'Calls' && <CallsList />}
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-6 right-6">
                {activeTab === 'Chats' && (
                    <button className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg">
                        <LuMessageSquarePlus size={18} className="text-white" />
                    </button>
                )}
                {activeTab === 'Status' && (
                    <button className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg">
                        <BiCamera size={18} className="text-white" />
                    </button>
                )}
                {activeTab === 'Calls' && (
                    <button className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg">
                        <BiPhone size={18} className="text-white" />
                    </button>
                )}
            </div>
        </div>
    );
}

function ChatList() {
    const chats = [
        {
            name: 'David Warner',
            time: '9:32 am',
            message: 'Let\'s meet tomorrow',
            status: 'seen',
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            name: 'Sourav Ganguly',
            time: '9:39 am',
            message: 'Ok',
            status: 'sent',
            image: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
            name: 'Ricky',
            time: '9:44 am',
            message: 'Video call later?',
            status: 'seen',
            image: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
    ];

    return (
        <div>
            {chats.map((chat, index) => (
                <div key={index} className="flex items-center py-3 border-b border-gray-100">
                    <Image
                        src={chat.image}
                        alt={chat.name}
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                    />
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <p className="font-medium text-black">{chat.name}</p>
                            <p className="text-xs text-gray-500">{chat.time}</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                            {chat.status === 'seen' ? (
                                <LuCheckCheck size={14} className="text-blue-400 mr-1" />
                            ) : (
                                <LuCheckCheck size={14} className="text-gray-400 mr-1" />
                            )}
                            <span>{chat.message}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function StatusList() {
    const statusUpdates = [
        { name: 'Saurabh', time: '21 minutes ago', viewed: false },
        { name: 'James', time: '55 minutes ago', viewed: true },
        { name: 'Rico', time: 'Today, 5:00 am', viewed: true },
    ];

    return (
        <div>
            <p className="text-green-400 mb-2">Recent updates</p>
            {statusUpdates.map((s, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-800">
                    <p className={`${s.viewed ? 'text-gray-400' : 'text-black'} font-medium`}>{s.name}</p>
                    <p className="text-xs text-gray-500">{s.time}</p>
                </div>
            ))}
        </div>
    );
}

function CallsList() {
    const calls = [
        { name: 'James', time: 'Today, 11:00 am', type: 'outgoing' },
        { name: 'David Warner', time: 'Today, 11:20 am', type: 'missed' },
        { name: 'Clark', time: 'Today, 12:20 am', type: 'missed' },
    ];

    return (
        <div>
            {calls.map((call, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-800">
                    <p className={`font-medium ${call.type === 'missed' ? 'text-red-400' : 'text-black'}`}>{call.name}</p>
                    <p className="text-xs text-gray-500">{call.time}</p>
                </div>
            ))}
        </div>
    );
}