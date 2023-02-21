import React, { useState } from 'react';
import './styles.css'

const Form = (props) =>{

    const [query, setQuery] = useState(null);
    const {dispatch} = props;

    const handleChange = (e)=>{
        setQuery(e.target.value);
    }

    const search = (e) =>{
        e.preventDefault();
        if(query === null || query.trim() === ''){
            return;
        }
        dispatch(query);
    }

    return(
        <div className="form-container">
            <h1 className='header'>Get github profile</h1>
            <form className="form">
                <input type="text" onChange={handleChange} name="username" id="username"  placeholder="Type something..."/>
                <button onClick={search}>Search</button>
            </form>
        </div>
    )
}

export default Form;