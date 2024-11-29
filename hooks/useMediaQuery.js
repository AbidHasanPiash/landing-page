import { useEffect, useState } from 'react';

const useMediaQuery = () => {
    const getViewport = () => {
        if (typeof window === 'undefined') {
            return { isMobile: false, isTab: false, isDesktop: true }; // Default for SSR
        }
        const width = window.innerWidth;
        return {
            isMobile: width < 768,
            isTab: width >= 768 && width < 1024,
            isDesktop: width >= 1024,
        };
    };

    const [viewport, setViewport] = useState(getViewport);

    useEffect(() => {
        let timeoutId = null;

        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setViewport(getViewport());
            }, 150); // Debounce by 150ms
        };

        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return viewport;
};

export default useMediaQuery;
