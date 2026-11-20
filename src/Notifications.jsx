
import React, { useState } from 'react';

const Notifications = () => {

    const [notifications, setNotifications] = useState({
        ticketUpdates: true,
        newAssignments: true,
        emailNotifications: false,
        customerMessages: true
    });

    const handleToggle = (name) => {
        setNotifications({
            ...notifications,
            [name]: !notifications[name]
        });
    };

    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200">

            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Notifications
                </h2>
                <p className="text-sm text-gray-500">
                    Manage how you receive notifications.
                </p>
            </div>

            {/* Notification options */}
            <div className="space-y-5">

                {[
                    {
                        name: 'ticketUpdates',
                        title: 'Ticket Updates',
                        description: 'Get notified when a ticket is updated.'
                    },
                    {
                        name: 'newAssignments',
                        title: 'New Assignments',
                        description: 'Get notified when a ticket is assigned to you.'
                    },
                    {
                        name: 'emailNotifications',
                        title: 'Email Notifications',
                        description: 'Receive notifications through email.'
                    },
                    {
                        name: 'customerMessages',
                        title: 'Customer Messages',
                        description: 'Get notified when a customer sends a message.'
                    }
                ].map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center justify-between border-b border-gray-100 pb-4"
                    >
                        <div>
                            <h3 className="font-medium text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {item.description}
                            </p>
                        </div>

                        <button
                            onClick={() => handleToggle(item.name)}
                            className={`w-11 h-6 rounded-full p-1 transition ${
                                notifications[item.name]
                                    ? 'bg-purple-600'
                                    : 'bg-gray-300'
                            }`}
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                    notifications[item.name]
                                        ? 'translate-x-5'
                                        : 'translate-x-0'
                                }`}
                            />
                        </button>
                    </div>
                ))}

            </div>

            {/* Save button */}
            <div className="flex justify-end mt-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                    Save Changes
                </button>
            </div>

        </div>
    );
};

export default Notifications;
