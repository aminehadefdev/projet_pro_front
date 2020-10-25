import React, { useEffect, useState } from 'react'
import qs from 'qs'
function Search(){
    const [users, setUsers] = useState(Object.values(qs.parse(localStorage.getItem('searche'))))
    console.log(users)
    return (
        <div>
            <div className="container-search">
                {users.map(user=>{
                    return (
                        <div className="item-search" key={user.id}>
                            <img src={"http://localhost:8000/static/" + user.photoProfile} />
                            <p>{user.firstname}</p>
                            <p>{user.job}</p>
                            <p>{user.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search