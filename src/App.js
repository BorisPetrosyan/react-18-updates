import {List} from "./List";
import {useState, useTransition} from "react";


const source = new Array(12000)
    .fill('')
    .map((_,i) => ({
        id:i,name:`Item ${i + 1}`
    }))

const filterItems = (filter) => {
    return filter
    ? source.filter(i => i.name.includes(filter))
    : source
}

function App() {

    const [filter,setFilter] = useState('')
    // const [isPending, startTransition] = useTransition()


    const items = filterItems(filter)

    const changeHandler = (event) => {
        // startTransition(() => {
        //     setFilter(event.target.value)
        // })
        setFilter(event.target.value)
    }
  return (
    <div className="container">
        <input type='text' onChange={changeHandler}/>
        {/*{isPending && <h2>Changing State...</h2>}*/}
        <List items={items}/>
    </div>
  );
}





//React Batching
// import {useState} from "react";
//
// function App () {
//
//     const [count , setCount] = useState(0)
//
//     console.log('render')
//
//     const handelClick = () => {
//            setCount(prev => prev + 1)
//            setCount(prev => prev + 2)
//
//     }
//
//     const handelClickAsync = () => {
//         setTimeout(() => {
//         setCount(prev => prev + 1)
//         setCount(prev => prev + 2)
//         },0)
//     }
//
//     return (
//         <div className='container'>
//             <h1>{count}</h1>
//             <button onClick={handelClick}>Change Count</button>
//             <button onClick={handelClickAsync}>Async Change Count</button>
//         </div>
//     )
// }
//
// export default App;
