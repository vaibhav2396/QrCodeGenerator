import { useState } from "react"
import QRCode from "react-qr-code"

export default function QRGenerator(){
    const [input, setInput] = useState("")
    const [qrCode, setQrCode] = useState("")

    function Generate(){
        setQrCode(input)
        setInput("")
    }
    return(
        <div className="flex flex-col justify-center h-screen items-center">
            <div className="m-4">
                <input type="text" placeholder="Enter a Name" value={input} onChange={(e)=>{setInput(e.target.value)}}
                className="border-black border-2 mr-2 p-1" />
                <button disabled={input.trim().length == 0} onClick={Generate} className="border-2 p-1 bg-slate-300 border-black">Generate</button>
            </div>
            
            <QRCode value= {qrCode} />
        </div>
    )
}