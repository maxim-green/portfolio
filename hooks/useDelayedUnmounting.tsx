import {useEffect, useState} from 'react'

function useDelayedUnmounting(time = 1600): ['mounted' | 'mounting' | 'unmounted' | 'unmounting', () => void, () => void] {
    const [state, setState] = useState<'mounted' | 'mounting' | 'unmounted' | 'unmounting'>("unmounted");
    const show = () => {
        if (state === "unmounting") {
            return;
        }
        setState("mounting");
    };
    const hide = () => {
        if (state === "mounting") {
            return;
        }
        setState("unmounting");
    };

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        if (state === "unmounting") {
            timeoutId = setTimeout(() => {
                setState("unmounted");
            }, time);
        } else if (state === "mounting") {
            timeoutId = setTimeout(() => {
                setState("mounted");
            }, time);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [state, time]);

    return [state, show, hide];
}

export default useDelayedUnmounting
