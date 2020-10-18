import React, {
    useState,
    useEffect
} from 'react';

// Custom Hook to listen to window resizing.
export default function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Unsubscribe from event
        return (() => {
            window.removeEventListener('resize', handleResize);
        })
    })
    return width;
}