import React, { useState, useEffect } from 'react';
/*{name} : {name:string},*/ 

export function LikeButton(name: string) {
    let likesarr: string[] = [];
    const [likes, setLikes] = useState(likesarr);
    
    useEffect(() => {
        setLikes([...likes, name]);
        console.log(likes)
    }, [likes] )

    const handleClick = () => {
        setLikes([...likes, name]);
    }
    return(
        <button onClick={handleClick}></button>
    )
}


