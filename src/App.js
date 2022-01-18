import './App.css';
import {useState} from "react"


const App = ( ) => {
  const [toDo , SetToDo] = useState([1,2,3 ,5, 6, 7 ,8 ,9] )
 
   const addHandler1 = ( ) =>{
      let addTodo = [...toDo]
              
      
      addTodo.push(toDo[toDo.length -1] +1)
      SetToDo(addTodo)
      
   }

    const addHandler2 = ( ) => {
      let subTodo = [...toDo]
      subTodo.push(toDo[toDo.length - 1] - 1)
      SetToDo(subTodo)
    }

    const removeHandler = ( index) =>{
      let revTodo= [...toDo]
          
      revTodo.splice(index, 1)
      SetToDo(revTodo)
      
    }

  return(
      <div className ="App-header ">
          {toDo.map( (tod, index) => {
            return (  
             <div> <p> to-do list : {tod} </p> 
              <button onClick = { ( ) =>removeHandler (index)}> remove item </button> 
              </div>
            )
          })}
          <button onClick = {addHandler1} > add extra list </button>  
          <button onClick = {addHandler2}>  delete last  list </button>
         
          
      </div>
      
  )
}

export default App;
