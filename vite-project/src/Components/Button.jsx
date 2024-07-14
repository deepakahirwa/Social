import React from 'react';

const Button = ({ label="Submit", size = 'medium', color = 'blue', className = '' }) => {
    // Define default size classes
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    // Define default color classes
    const colorClasses = {
        blue: 'bg-blue-500 text-white hover:bg-blue-400',
        green: 'bg-green-500 text-white hover:bg-green-300',
        red: 'bg-red-700 text-white hover:bg-red-500',
    };

    return (
        <button
            className={`rounded-full  ${colorClasses[color]} ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
