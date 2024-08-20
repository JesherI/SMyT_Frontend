"use client"

import Header from "../header/header"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "../navbar/navbar"
import "./formlicences.css"

function Formlicences() {
    const [letter, setLetter] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(letter, name, description)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/licences/`, {
            method: "POST",
            body: JSON.stringify({ letter, name, description }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        router.refresh()
    }

    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
            <h1>Agregar nueva Licencia</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="letter">Nombre de Licencia:</label>
                        <input 
                            type="text" 
                            id="letter" 
                            name="letter" 
                            className="letter"
                            onChange={e => setLetter(e.target.value)} 
                            placeholder="Nombre de Licencia"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Letra de Licencia</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="name"
                            onChange={e => setName(e.target.value)} 
                            placeholder="Letra de Licencia"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción:</label>
                        <textarea 
                            id="description" 
                            name="description" 
                            className="description"
                            onChange={e => setDescription(e.target.value)} 
                            placeholder="Descripción">
                        </textarea>
                    </div>
                    <button>Guardar</button>
                </form>
            </div>
        </>
    )
}

export default Formlicences
