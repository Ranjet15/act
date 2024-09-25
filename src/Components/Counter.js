import React, {useState} from 'react';


function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <center>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={() => setCount(prev => 0)}>Reset</button>

            </center> 
        </div>
    );
}




export default Counter