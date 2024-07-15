"use client"
import { title } from "process"
import { useState } from "react"
function Formlicences() {
    const [name, setname] = useState('')
    const [description, setDescription] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name,description)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/licences/`,{
            method: "POST",
            body: JSON.stringify({name,description}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
    }   

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" className="name" 
                onChange={ e => setname(e.target.value)} />
                <textarea name="description" className="description"
                onChange={ e => setDescription(e.target.value)}>
                </textarea>
                <button>Save</button>

            </form>
        </div>
    )
}

export default Formlicences