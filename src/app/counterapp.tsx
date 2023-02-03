"use client"
import { Button } from "@chakra-ui/react"
import { useState } from "react"

export default function CounterApp() {
    const [counter, setCounter] = useState(0)
    const decrement = () => {
        setCounter(counter - 1)
    }
    const increment = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <Button onClick={decrement}>Decrement</Button>
            {counter}
            <Button onClick={increment}>Increment</Button>
        </>
    )
}
