"use client"
import "./Listlicences.css"
import { useEffect, useState } from "react"

function Listlicences() {
    const [licences, setLicences] = useState([])

    useEffect(() => {
        const loadLicences = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/licences/`)
            const data = await res.json()
            setLicences(data)
        }

        loadLicences()
    }, [])

    return (
        <div className="container">
            <h1>Lista de Licencias</h1>
            {licences.map(licence => (
                <div className="licence-card" key={licence.id}>
                    <div className="licence-details">
                        <h2>{licence.name}</h2>
                        <p>{licence.description}</p>
                    </div>
                    <div className="licence-actions">
                        <button>Eliminar</button>
                        <button>Actualizar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Listlicences
