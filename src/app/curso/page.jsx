"use client";

import Header from '../components/header/header';
import { useState } from 'react';
import "./curso.css";
import "../global.css";
import Navbar from '../components/navbar/navbar';

const CursoForm = () => {
  const [nombreCurso, setNombreCurso] = useState('');
  const [licencia, setLicencia] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [contenido, setContenido] = useState(null);

  const handleAgregarContenido = (e) => {
    setContenido(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nombreCurso,
      licencia,
      descripcion,
      contenido
    });
  };

  return (
    <>
    
      <Header />
      <Navbar></Navbar>
      <div className="curso-form-container">
        <h1 className="form-title">Crear Cursos</h1>
        <form onSubmit={handleSubmit} className="curso-form">
          <div>
            <label>Nombre del curso</label>
            <input
              type="text"
              value={nombreCurso}
              onChange={(e) => setNombreCurso(e.target.value)}
              className="input-curso"
            />
          </div>

          <div>
            <label>Tipo de licencia</label>
            <input
              type="text"
              value={licencia}
              onChange={(e) => setLicencia(e.target.value)}
              className="input-licencia"
            />
          </div>
          <div>
            <label>Descripción</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="textarea-descripcion"
            />
          </div>
          <div>
            <label>Agrega contenido</label>
            <input
              type="file"
              onChange={handleAgregarContenido}
              className="input-contenido"
            />
          </div>
          <button type="submit" className="btn-agregar">Agregar</button>
        </form>
      </div>
    </>
  );
};

export default CursoForm;
