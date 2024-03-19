
import { useEffect, useState } from 'react';
import './App.css';
import { database } from './firebase/firebase-config';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import AddEntry from './components/add/AddEntry';
import DisplayUsers from './components/display/DisplayUsers';
import { UsersProvider } from './context/UserContext';

function App() {
  const [usersList, setUsersList] = useState([]);
  const dbName = "users";
  const usersCollectionRef = collection(database, dbName)
  async function getUsers() {
    const data = await getDocs(usersCollectionRef)
    setUsersList(data.docs.map((item) => {
      return { ...item.data(), id: item.id }
    }))
  }
  useEffect(() => {
    getUsers();
  }, [])
  async function createUser(item) {
    await addDoc(usersCollectionRef, { name: item.name, age: item.age })
  }
  async function updateUser(item) {
    const userDoc = doc(database, dbName, item.id);
    const newData = {
      name: item.name,
      age: item.age
    }
    await updateDoc(userDoc, newData);
  }
  async function deleteUser(id) {
    const userDoc = doc(database, dbName, id);
    await deleteDoc(userDoc);
  }
  return (
    <div className="App">
      double the dun
      <UsersProvider value={{ usersList, createUser, updateUser, deleteUser }}>
        <AddEntry />
        <DisplayUsers />
      </UsersProvider>

    </div>
  );
}

export default App;
