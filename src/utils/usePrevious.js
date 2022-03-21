import { useRef, useEffect } from "react";

export default function usePrevious(value) {
    console.log("val: ", value)
    const prevRef = useRef();
    useEffect(() => {
        console.log("in there")
        console.log("***tsta: ", value)
        prevRef.current = value.current
    console.log("tst: ", prevRef.current)

    }, [value])
    // }, [value])
    return prevRef
    // return "18"
}