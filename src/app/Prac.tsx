"use client"

import { useState } from "react"

export default function Prac() {
    const [val, setval] = useState('Input1')
    const [val2, setval2] = useState('Input2')
    //const val = "hello"
    const onChangeHandler = (e: any) => {
        console.log("e is", e.target.value)
        //val = e.target.value
        setval(e.target.value);
    };
    const onChangeHandler2 = (e: any) => {
        console.log("e is", e.target.value)
        //val = e.target.value
        setval2(e.target.value)
    };
    return (
        <>
            <input type='text' value={val} onChange={onChangeHandler} />
            <br />
            <input type='text' value={val2} onChange={onChangeHandler2} />
            <br />
        </>
    )
};
