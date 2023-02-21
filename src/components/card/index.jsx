import React from "react";
import './styles.css';

const Card = (props) =>{
    
    const {user, isLoading} = props;

    if(isLoading){
        return <h3>Loading...</h3>
    }

    if(Object.keys(user).length == 0){
        return <h3>No results...</h3>
    }

    return(
        <div className="card-container">
            <img src={user.avatar_url} alt="" className="image-profile" />
            <div className="card-body">
                <h2>{user.name}</h2>
                <p>{user.login}</p>
                <p>{user.location}</p>
                <p>{user.bio}</p>
                <a rel="stylesheet" href={user.html_url} className="link-button" >
                    Go to profile
                </a>
            </div>
        </div>
    );
}

export default Card;