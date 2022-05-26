import { useContext } from "react"
import { inputContext } from "./Main"

export default function Search(){

    const setInputVal = useContext(inputContext)

    return(
        <>
        <input placeholder="Search" onChange={(e)=> {setInputVal(e.target.value)}}/>
        </>
    )
}