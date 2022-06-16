import React from 'react';
import MainPage from "./pages/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditPage from "./pages/EditPage";

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<MainPage/>}/>
              <Route path={'/edit/:id'} element={<EditPage/>}/>
          </Routes>
      </BrowserRouter>

  );
}

