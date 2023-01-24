import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import ChoreListPage from "../ChoreListPage/ChoreListPage";
import AuthPage from "../AuthPage/AuthPage";
import NewChorePage from "../NewChorePage/NewChorePage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [chores, setChores] = useState([])

  return (
    <main className="App">
      <span className='even'>Chore</span>
      <span className='odd'>Champ</span>
      { user ?
        <Routes>
          <Route path="/chores" element={<ChoreListPage user={user} setUser={setUser} chores={chores} setChores={setChores} />} />
          <Route path="/chores/new" element={<NewChorePage chores={chores} setChores={setChores}/>} />
        </Routes>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  )
};