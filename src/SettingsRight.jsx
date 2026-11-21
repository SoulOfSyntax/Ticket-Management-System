
import React from 'react';
import { FaUnlockAlt } from "react-icons/fa";

const SettingsRight = () => {
    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200">

            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Personal Information
                </h2>
                <p className="text-sm text-gray-500">
                    Manage your personal account details.
                </p>
            </div>

            {/* Profile picture */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xl font-semibold text-purple-600">
                        BS
                    </span>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800">
                        Brian Smith
                    </h3>
                    <p className="text-sm text-gray-500">
                        IT Support Specialist
                    </p>
                    <button className="text-sm text-purple-600 mt-1">
                        Change photo
                    </button>
                </div>
            </div>

            {/* Form fields */}
            <div className="space-y-4">

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        defaultValue="Brian Smith"
                        className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        defaultValue="brian@example.com"
                        className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        defaultValue="+27 82 123 4567"
                        className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Job Title
                    </label>
                    <input
                        type="text"
                        defaultValue="IT Support Specialist"
                        className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-purple-500"
                    />
                </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
                <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-600">
                    Cancel
                </button>

                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                    Save Changes
                </button>
            </div>

        </div>
    );
};

export default SettingsRight;
