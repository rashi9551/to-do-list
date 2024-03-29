import './App.css'
import  {useState,useEffect,useRef} from 'react'
function App() {
  const currentDate=new Date()
  const options = { weekday: 'long' }
  const DayName = currentDate.toLocaleString('en-US', options)
  const inputFocus=useRef('')
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  useEffect(()=>{
    inputFocus.current.focus()
  })
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      
      <h2>Whoop, it's {DayName}  🌝 ☕ </h2>
    </div> 
    <div className="input">
      <input  value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{setToDos([...toDos,{id:Date.now(),text:toDo,status:false}]);setToDo('')}} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {
        toDos.map((value)=>{
       return ( <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked);
            console.log(value);
            setToDos(toDos.filter(obj2=>{
              if(obj2.id===value.id)
              {
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} value={value.status} type="checkbox" name="" id=""  checked={value.status}/>
          <p>{value.text}</p>
        </div>
        <div className="right">
          <p>{currentDate.toLocaleDateString()}</p>
          <i onClick={()=>setToDos(toDos.filter(obj2=>{
            if(obj2.id===value.id)
            {

              return null
            }
            return obj2
          }))} className="fas fa-times"></i>
        </div>
      </div>
       )
    })}
    {toDos.map((obj)=>{
      if(obj.status){
        return (
          <h1>{obj.text}</h1>
        )
      }
      return null
    })}
    </div>
  </div>
  );
}

export default App;
