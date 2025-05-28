import React, {useState} from 'react'

function Mycounter(){
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    const increment = () =>{
        if (count < 20){
            const newCount = count + 2;
            setCount(newCount);
        if (newCount >= 20){
            setMessage("you've reached the limit.");
        }
        else{
            setMessage('')
        }
        
        }    
    };


     const decrement = () =>{
        if (count>0) {
            const newCount = count-2 >= 0 ? count-2 :0;
            setCount(newCount)
        if (newCount< 20){
            setMessage('')
        }
        }
        
    }
             return(
        <div className="counter_container">
           <p className="count-display">{count}</p> 
          <p className="limit-message">{message}</p>
           <button className='counter-button' onClick={increment}>INCREMENT</button>
           <button className='counter-button' onClick={decrement}>DECREMENT</button>
        </div>
    );
}
   
export default Mycounter