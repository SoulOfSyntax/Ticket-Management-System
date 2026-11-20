import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import SettingsRight from "./SettingsRight"
import Security from "./Security"
import Appearience from './Appearance';
import Notifications from './Notifications';

const Settings = () => {

    const [activeTab, setActiveTab] = useState('profile')

    return (
        <div className='min-h-screen w-full bg-slate-50'>
            <div className='bg-gray-700 w-full'>
                {/*top bar*/}
                <div className='flex items-center p-2'>
                    <h2 className='text-2xl'><IoSettingsOutline /></h2>
                    <h1 className='text-3xl font-bold p-3'>Settings</h1>
                </div>

                {/*down part*/}
                <div className='h-screen bg-amber-700 w-full flex'>
                    {/*sideline links*/}
                    <div className='bg-purple-600 w-[30%]'>

                        <div className='p-3 flex items-center gap-2'>
                            <button
                                onClick={() => setActiveTab('profile')}
                                className='flex cursor-pointer items-center gap-2'>
                                <h2><BsPerson /></h2>
                                <h1>Profile</h1>
                            </button>


                        </div>

                        <div className='p-3 flex items-center gap-2'>
                            <button
                                onClick={() => setActiveTab('security')}
                                className='flex items-center gap-2'>
                                <h2><BsPerson /></h2>
                                <h1>Security</h1>
                            </button>


                        </div>

                        <div className='p-3 flex items-center gap-2'>
                            <button
                                onClick={() => setActiveTab('notifications')}
                                className='flex cursor-pointer items-center gap-2'>
                                <h2><BsPerson /></h2>
                                <h1>Notifications</h1>
                            </button>


                        </div>

                        <div className='p-3 flex items-center gap-2'>
                            <button
                                onClick={() => setActiveTab('appearience')}
                                className='flex cursor-pointer items-center gap-2'>
                                <h2><BsPerson /></h2>
                                <h1>Appearence</h1>
                            </button>


                        </div>

                    </div>
                    {/*right part*/}
                    <div className='bg-red w-[70%]'>
                        {activeTab === 'profile' && <SettingsRight />}
                        {activeTab === 'security' && <Security />}
                        {activeTab === 'appearience' && <Appearience />}
                        {activeTab === 'notifications' && <Notifications />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings