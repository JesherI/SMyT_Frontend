import React from 'react';
import Image from 'next/image';
import './tipos.css';

const ThreeBoxes = () => {
  return (
    <div className="container">
      <div className='Tipos'>
        <h1>Tipos de Licencias</h1>
      </div>
      <div className="box-container">
        <div className="box">
          <div>
            <Image src="/tipo1.jpeg" alt="Image 1" width={200} height={150} />
          </div>
          <div className='box1'>
            <p>Tipo de licencia A</p>
          </div>
        </div>
        <div className="box">
          <div>
            <Image src="/tipo2.jpeg" alt="Image 2" width={200} height={150} />
          </div>
          <div className='box2'>
            <p>Tipo de licencia B</p>
          </div>
        </div>
        <div className="box">
          <div>
            <Image src="/tipo3.jpeg" alt="Image 3" width={200} height={150} />
          </div>
          <div className='box3'>
            <p>Tipo de licencia C</p>
          </div>
        </div>
      </div>
      <div className='Agregar'>
        <Image src="/agregar.png" alt="Image agregar" width={50} height={50} />
      </div>
    </div>
  );
};

export default ThreeBoxes;
