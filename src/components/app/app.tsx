import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../../common/enums/enums";
import {News} from "../news/news";

import './styles.css'
import {Header} from "../common/header/header";
import {Footer} from "../common/footer/footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={AppRoutes.root} element={<News/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
