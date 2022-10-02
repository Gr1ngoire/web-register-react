import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../../common/enums/enums";
import {News} from "../news/news";

import './styles.css'
import {Header} from "../common/header/header";
import {Footer} from "../common/footer/footer";
import {Faq} from "../faq/faq";
import {Contacts} from "../contacts/contacts";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={AppRoutes.root} element={<News/>}/>
                <Route path={AppRoutes.faq} element={<Faq/>}/>
                <Route path={AppRoutes.contacts} element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
