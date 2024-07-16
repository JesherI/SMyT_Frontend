async function loadLicences() {
    if (!process.env.BACKEND_URL) {
        throw new Error("BACKEND_URL no está definida en las variables de entorno");
    }

    const res = await fetch(`${process.env.BACKEND_URL}/api/licences/`)
    const licences = await res.json()
    return licences
}


async function Listlicences() {

    const Licences = await loadLicences()
    console.log(Licences)
    return(
        <div></div>
    )
}

export default Listlicences