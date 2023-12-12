import {useState} from 'react'
import {increment,decrement,incrementByAmount,reset} from './counterSlice'
import {useDispatch,useSelector} from 'react-redux'
const Counter = ()=>{
    const count = useSelector((state)=>state.counter.count)
    const [amount,setAmount]=useState(0)
    const amountToadd = Number(amount)
    const dispatch = useDispatch()
    return (<>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h1>{count}</h1>
    <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
    <div>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(reset())}>reset</button>
    <button onClick={()=>dispatch(incrementByAmount(amountToadd))}>Add amount</button>
    </div>
    </div>

    </>)
}

export default Counter