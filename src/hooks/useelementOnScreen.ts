const { useState, useEffect, useRef } = require('react');

interface PropsHook {
    root: null;
    rootMargin: string;
    threshold: number;
}

export const useElementOnScreen = (options: PropsHook) => {
    const containerRef = useRef(null);
    const [isViisible, setIsViisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsViisible(entry.isIntersecting);
        }, options);

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef, isViisible]);

    return [containerRef, isViisible];
};