import React, { useState } from "react";

function useGitProfile(){
   
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function dispatch(query){
        setIsLoading(true);
        fetchData(query);
    }

    async function fetchData(query){
        const data = await fetch(`https://api.github.com/users/${query}`)
        const userFetch = await data.json();
        setUser(userFetch);
        setIsLoading(false);
    }

    return {user,isLoading,dispatch};
}

export default useGitProfile;