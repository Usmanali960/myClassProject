// components/LoadingScreen.tsx
"use client"
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true); // Track loading state
    const [showContent, setShowContent] = useState(false); // Track content visibility

    // Simulate loading delay
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false); // Stop loading
            setShowContent(true); // Show content
        }, 2000); // 2-second loading delay

        return () => clearTimeout(loadingTimeout);
    }, []);

    // Throw an error after 2 seconds when content is visible
    useEffect(() => {
        if (showContent) {
            const errorTimeout = setTimeout(() => {
                throw new Error('Sorry! this is our sir mubassir requirement!');
            }, 2000); // 2-second delay after content appears

            return () => clearTimeout(errorTimeout);
        }
    }, [showContent]);

    return (
        <div className="p-6">
            {isLoading ? (
                <p className='my-[10vh] text-center text-[1.8vw] font-medium'>Please wait, loading...</p> // Loading message
            ) : (
                <h1 className='my-[10vh] text-center text-[1.8vw] font-medium'>Jobs/Interships are coming soon</h1> // Content after loading
            )}
        </div>
    );
};

export default LoadingScreen;
