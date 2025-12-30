import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                // Adding a small delay to ensure DOM is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else if (pathname !== "/") {
            // Allow default scroll for normal pages, but for root we might want different behavior?
            // Actually standard behavior is window.scrollTo(0,0) on route change
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
};

export default useScrollToHash;
