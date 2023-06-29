const { nota } = prompt;
const {listadodenotas, setListadodenotas} = prompt;
function TaskList (){
    return (
      <>
      <span><strong>{nota}</strong></span>
       <ul className="two">{nota}</ul>
      
       
      </>
     );
   }; 
//};
 export default TaskList;