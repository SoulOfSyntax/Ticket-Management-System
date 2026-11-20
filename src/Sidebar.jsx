import logoI from './assets/community.png'

import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (

        <aside className="h-screen w-1/4 left-0 fixed bg-white border-r border-slate-200 p-4 text-slate-900 flex flex-col justify-between overflow-y-auto">
            <div>
                {/* Brand Header (Text Only) */}
                <div className="mb-8 px-3 pt-1">
                    <span className="flex">
                        <img src={logoI} alt="Logo" className="h-[40px] w-[40px]" />
                        <span className="font-bold ml-2 text-violet-600 text-3xl">Support</span>
                        <span className="font-bold text-slate-900 text-3xl">Hub</span>
                    </span>
                </div>

                {/* MAIN MENU Section */}
                
                <nav className="space-y-6">
                    <div className='flex flex-col   justify-between'>
                    <div className='mb-12'>
                        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            Main Menu
                        </p>
                        <ul className="space-y-1">
                            {/* Active Link */}
                            <li>
                                <a
                                    href="\"
                                    className="block px-3 py-2.5 rounded-lg bg-violet-50 text-violet-700 font-semibold text-sm border-l-4 border-violet-600 transition-colors"
                                >
                                    Dashboard
                                </a>
                            </li>

                            {/* Inactive Links */}
                            <li>
                                <Link
                                    to="/tickets"
                                    className="block px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-violet-700 font-medium text-sm transition-colors"
                                >
                                    All Tickets
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/create-ticket"
                                    className="block px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-violet-700 font-medium text-sm transition-colors"
                                >
                                    Create tickets
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/customers"
                                    className="block px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-violet-700 font-medium text-sm transition-colors"
                                >
                                    Customers
                                </Link>
                            </li>

                            

                           

                            <li>
                                <Link
                                    to="/reports"
                                    className="block px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-violet-700 font-medium text-sm transition-colors"
                                >
                                    Reports
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SYSTEM Section */}
                    <div className="pt-4 border-t border-slate-100">
                        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            System
                        </p>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    to="/settings"
                                    className="block px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-violet-700 font-medium text-sm transition-colors"
                                >
                                    Settings
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/help"
                                    className="block px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-violet-700 font-medium text-sm transition-colors"
                                >
                                    Help & Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                </nav>
                
            </div>
        </aside>



    )
} 