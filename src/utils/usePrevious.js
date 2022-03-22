import { useRef, useEffect } from "react";

export default function usePrevious(value) {
    const prevRef = useRef();
    useEffect(() => {
        prevRef.current = value.current
    }, [value])
    return prevRef.current
}