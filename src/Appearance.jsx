
import React, { useState } from 'react';

const Appearance = () => {

    const [theme, setTheme] = useState('light');
    const [compactMode, setCompactMode] = useState(false);

    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200">

            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Appearance
                </h2>
                <p className="text-sm text-gray-500">
                    Customize how SupportHub looks.
                </p>
            </div>

            {/* Theme */}
            <div className="border-b border-gray-200 pb-5">

                <h3 className="font-medium text-gray-800 mb-1">
                    Theme
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                    Choose your preferred appearance.
                </p>

                <div className="flex gap-4">

                    <button
                        onClick={() => setTheme('light')}
                        className={`border rounded-lg p-4 w-32 ${
                            theme === 'light'
                                ? 'border-purple-600 bg-purple-50'
                                : 'border-gray-200'
                        }`}
                    >
                        <div className="bg-white border rounded-md h-12 mb-2 flex items-center justify-center">
                            <span className="text-gray-700 text-sm">Aa</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Light
                        </span>
                    </button>

                    <button
                        onClick={() => setTheme('dark')}
                        className={`border rounded-lg p-4 w-32 ${
                            theme === 'dark'
                                ? 'border-purple-600 bg-purple-50'
                                : 'border-gray-200'
                        }`}
                    >
                        <div className="bg-gray-800 rounded-md h-12 mb-2 flex items-center justify-center">
                            <span className="text-white text-sm">Aa</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Dark
                        </span>
                    </button>

                </div>

            </div>

            {/* Compact Mode */}
            <div className="flex items-center justify-between mt-5">

                <div>
                    <h3 className="font-medium text-gray-800">
                        Compact Mode
                    </h3>
                    <p className="text-sm text-gray-500">
                        Reduce spacing between dashboard elements.
                    </p>
                </div>

                <button
                    onClick={() => setCompactMode(!compactMode)}
                    className={`w-11 h-6 rounded-full p-1 transition ${
                        compactMode ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            compactMode ? 'translate-x-5' : 'translate-x-0'
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

export default Appearance;
