import React from "react";
import Listeencheres from "./components/Listeencheres";
import Historique from './components/Historique';
import Ficheenchere from './components/Ficheenchere';
import Formulaire from './components/Formulaire';
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Listeencheres />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/listeenchere" element={<Listeencheres />} />
          <Route path="/ficheenchere/:idenchere" element={<Ficheenchere />} />
          <Route path="/formulaire" element={<Formulaire />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;