import React from 'react'
import DisplayCard from './DisplayCard'
import { useUsersContext } from '../../context/UserContext';

export default function DisplayUsers() {
    let users = [{
        id: "wHaT1D",
        name: "What Name",
        age: 20
    }]
    let { usersList, updateUser, deleteUser } = useUsersContext();
    function userList() {
        let list = [];
        if (usersList) {
            usersList.map((user, index) => {
                list.push(<DisplayCard item={user} key={index} editItem={updateUser} deleteItem={deleteUser} />)
            })
        }
        else {
            users.map((user, index) => {
                list.push(<DisplayCard item={user} key={index} />)
            })
        }

        return list;
    }
    return (
        <div>
            {usersList && usersList.length > 0 ?
                <table className='row'>
                    <thead className='row'>
                        <tr className='row'>
                            <th className='col-3'>ID</th>
                            <th className='col-3'>Name</th>
                            <th className='col-2'>Age</th>
                            <th className='col-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='row'>
                        {userList()}
                    </tbody>
                </table>
                :
                <h1>No list to display.</h1>
            }
        </div>
    )
}
