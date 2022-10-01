import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../../common/enums/enums";
import {News} from "../news/news";

import './styles.css'

function App() {
  return (
    <>
      <Routes>
        <Route path={AppRoutes.root} element={<News/>} />
      </Routes>
    </>
  );
}

export default App;
