import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "../../common/enums/enums";
import {News} from "../news/news";

import './styles.css'
import {Header} from "../common/header/header";
import {Footer} from "../common/footer/footer";
import {Faq} from "../faq/faq";
import {Contacts} from "../contacts/contacts";
import {Students} from "../students/students";
import {SignUp} from "../sign-up/sign-up";
import {SignIn} from "../sign-in/sign-in";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={AppRoutes.root} element={<News/>}/>
                <Route path={AppRoutes.faq} element={<Faq/>}/>
                <Route path={AppRoutes.contacts} element={<Contacts/>}/>
                <Route path={AppRoutes.students} element={<Students/>}/>
                <Route path={AppRoutes.signUp} element={<SignUp/>}/>
                <Route path={AppRoutes.signIn} element={<SignIn/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
