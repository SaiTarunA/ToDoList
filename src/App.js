//import React from 'react';
//import './App.css';
import React from 'react';
import './App.css';
import logo from './logo.png';


const App = () => {
  
  const [allTodo, setallTodo] = React.useState([])
  const [todo, setTodo] = React.useState("")
  //const [indexto, setindexto] = React.useState(1)
  function handleSubmit(e){
    e.preventDefault()
    if(todo.replace(/ /g, "")!==""){
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
      strike: "",
      bgcolor: "",
      //index: indexto,
    }
    //setindexto(indexto+1)
    //console.log(indexto);
    setallTodo([...allTodo].concat(newTodo))
    setTodo("")
    }
  }
  //let classNametext = '';
  function deleteTodo(id) {
    //if (window.confirm('Are you sure you want to Delete?')) {
      // Save it!
      const updatedTodo = [...allTodo].filter((todo) => todo.id !== id)
      setallTodo(updatedTodo)
    //}
    
  }

  //const [abcd, setabcd] = React.useState('')
  function toggleComplete(id) {
    const updatedTodo = [...allTodo].map((todo)=>{
      if(todo.id===id){
        todo.completed = !todo.completed
        if(todo.completed===true){
          //classNametext = todo.completed;
          todo.strike = "Strike"
          todo.bgcolor = "Bcolor"
          //if(classNametext == todo.completed){
          //  setabcd("Strike")
          //  console.log(abcd);
          //}
        }else{
        //  setabcd("");
        todo.strike = ""
        todo.bgcolor = ""
        //  console.log(abcd);
        }
      }
      return todo
    })

    setallTodo(updatedTodo)
  }
  

  React.useEffect(()=>{
    const ls=localStorage.getItem("allTodo")
    const load = JSON.parse(ls)

    if(load){
      setallTodo(load)
    }
  }, [])

  React.useEffect(()=>{
    const ls=JSON.stringify(allTodo)
    localStorage.setItem("allTodo", ls)
  }, [allTodo])


  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter To Do" onChange={(e)=>setTodo(e.target.value)} value={todo} name="todo" />
        <button type="submit">Add</button>
      </form>
      {allTodo.map((todo, index) =><div className={`List ${todo.bgcolor}`} key={todo.id}>
        <input className="checkbox" type="Checkbox" onChange={()=>toggleComplete(todo.id)}
        checked={todo.completed} />
        <div className={`Text ${todo.strike}`} >{todo.text}</div>
        <div className="Delete"><button onClick={()=> deleteTodo(todo.id)}>Delete</button></div>
        </div>)}
    </div>
  )
}

export default App

/*
function App() {
  const[count, increment] = React.useState(0);
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <p>{newArray[0]}</p>
      <p>{newArray2}</p>
      <div>
        <p>{object["allTodoName"]}</p>
        <p>{object.lastName}</p>
        <p>{allTodoName}</p>
      </div>
      <p>{count}</p>
      <button onClick={()=>increment(count+1)}>Click to increment</button>
      <button onClick={()=>increment(0)}>Reset the count</button>
    </div>

  );
}
const abc = [1,2,3];
const newArray = abc.map((abcd,i)=>{
  return abcd*2;
});
abc.forEach((number,i)=>{
  console.log(number,i);
});
const newArray2 = abc.filter((number1)=> number1!==3);
const object = {
  allTodoName: "Sai Tarun",
  lastName: "Avadhootha",
}
const {allTodoName} = object;
export default App;*/
