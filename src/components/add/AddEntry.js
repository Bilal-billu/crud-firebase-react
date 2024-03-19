import React, { useState } from 'react'
import { useUsersContext } from '../../context/UserContext';

export default function AddEntry() {
    var [user, setUser] = useState({
        name: "",
        age: undefined
    })
    let {createUser} = useUsersContext();
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                createUser(user)
                setUser({
                    name: "",
                    age: 0
                })
            }}>     
                <div className='m-1'>
                    <label htmlFor='inputName' className='col-2 col-md-1'>Name:</label>
                    <input name='name' id='inputName' value={user.name} type='text' required onChange={(e) => {
                        setUser(prev => {
                            return {
                                ...prev,
                                name: e.target.value
                            }
                        });
                    }} />
                </div>
                <div className='m-1'>
                    <label htmlFor='inputAge' className='col-2 col-md-1'>Age:</label>
                    <input name='age' id='inputAge' value={user.age} type='number' required onChange={(e) => {
                        setUser(prev => {
                            return {
                                ...prev,
                                age: e.target.value
                            }
                        });
                    }} />
                </div>
                <input type='submit' />
            </form>
        </div>
    )
}
