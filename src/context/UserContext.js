import {createContext, useContext} from 'react';

export const UsersContext = createContext({
    usersList: {
        id: "n01DF0rY0U",
        name: "No Name For You",
        age: 0
    },
    createUser:(item)=>{},
    updateUser:(item)=>{},
    deleteUser:(id)=>{}
})

export const useUsersContext = () =>{
    return useContext(UsersContext);
}

export const UsersProvider = UsersContext.Provider;