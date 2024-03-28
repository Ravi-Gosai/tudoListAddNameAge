import './Form.css';
import { useState } from 'react';

function Form(props){
    let [userName, setUserName] = useState('')
    let [age, setAge] = useState('')

    const nameHandler = event =>{
        setUserName(event.target.value)
    }
    const ageHandler = event =>{
        setAge(event.target.value)
    }

    // console.log(userName,age)

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(userName,age)

        props.onAddList({
            userName: userName,
            age : age,
            id : Math.random().toString()
        })
        setUserName('');
        setAge('')

    }

    return(
        <div className='formdiv'>

        <form onSubmit={submitHandler}>
            <label>UserName</label>
            <input type='text' onChange={nameHandler} value={userName}></input>
            <br></br>
            <label>Age (Years)</label>
            <input type='number' onChange={ageHandler} value={age}></input>
            <br></br>
            <button type='submit'>Add User</button>
        </form>
        </div>
    )
}
export default Form;
