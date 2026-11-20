
import React, { useState } from 'react';

const Security = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200">

            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Security
                </h2>
                <p className="text-sm text-gray-500">
                    Manage your account security preferences.
                </p>
            </div>

            {/* Change Password */}
            <div className="space-y-4">

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Current Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter current password"
                        className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        New Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Confirm New Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-purple-500"
                    />
                </div>

                <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-sm text-purple-600"
                >
                    {showPassword ? "Hide Passwords" : "Show Passwords"}
                </button>

            </div>

            {/* Two Factor Authentication */}
            <div className="border-t border-gray-200 mt-6 pt-5 flex items-center justify-between">

                <div>
                    <h3 className="font-medium text-gray-800">
                        Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-gray-500">
                        Add an extra layer of security to your account.
                    </p>
                </div>

                <button
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`w-11 h-6 rounded-full p-1 transition ${
                        twoFactor ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            twoFactor ? 'translate-x-5' : 'translate-x-0'
                        }`}
                    />
                </button>

            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                    Save Changes
                </button>
            </div>

        </div>
    );
};

export default Security;
