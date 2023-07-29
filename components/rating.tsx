import React from 'react';

const Rating = ({value, className, ...props}) => {
    const numFilledStars = Math.min(Math.max(Math.round(value), 0), 5); // Round to the nearest integer and limit the value between 0 and 5

    return (
        <div className={`flex ${className}`}  {...props}>
            {/* Generate filled stars */}
            {Array(numFilledStars).fill(null).map((_, index) => (
                <svg
                    key={index}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#EDD146"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.9646 16.8835L17.937 20.4882L16.3521 13.6943L21.6287 9.12325L14.6802 8.53374L11.9646 2.12646L9.249 8.53374L2.30054 9.12325L7.57712 13.6943L5.99221 20.4882L11.9646 16.8835Z"/>
                </svg>
            ))}
            {/* Generate empty outlined star */}
            {Array(5 - numFilledStars).fill(null).map((_, index) => (
                <svg
                    key={index + numFilledStars}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EDD146"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.9646 16.8835L17.937 20.4882L16.3521 13.6943L21.6287 9.12325L14.6802 8.53374L11.9646 2.12646L9.249 8.53374L2.30054 9.12325L7.57712 13.6943L5.99221 20.4882L11.9646 16.8835Z"/>
                </svg>
            ))}
        </div>
    );
};

export default Rating;