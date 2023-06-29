import React from 'react'
import { useState } from 'react';

export const Task = () => {
  const [listadodenotas, setListadodenotas] = useState([]);
  const [nota, setNota] = useState('');
  const addnewNote = () => {
    setListadodenotas([...listadodenotas, nota])
    setNota('')
  }
  const marcaritem = (index) => {
    newlist[index].completada = newlist[index].completada;
    setListadodenotas(newList);
  };
  
  return (
    <>
      <input 
      type="text" 
      value={nota} 
      onChange={(e) =>setNota(e.target.value)} 
      placeholder='Agrega nueva Tarea'
      /> 
      <button className='add'onClick={addnewNote}>+</button>
      
      <h3>LISTADO DE TAREA</h3>
      <listadodenotas
        marcaritem = {marcaritem} 
        //deleteitem = {deleteitem}
      />
      <ul>
        {
          listadodenotas.map((e,i)=> (
            <li key={i}>{e}</li>
            
          ))
        }
      </ul>
    </>
    );
  };
export default Task