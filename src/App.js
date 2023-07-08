import logo from './logo.svg';
import './App.css';

import Header from './Component/Header';
import { Routes as Switch, Route } from "react-router-dom";
import Layout from './Component/Layout';
import Home from './Component/Home';
import Logi from "./Component/Logi";
import Register from "./Component/Register";
import { AuthContextProvider } from './Component/Cotext/Authcontext';
import { ToastContextProvider } from "./Component/Cotext/Toastcotext";
import Createcontact from "./Component/Createcontact";
import Allc from './Component/Allc';
import EditContact from './Component/EditContact';

function App() {
  return (
    <>
    <ToastContextProvider>
    <AuthContextProvider>
    <Layout>
      <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Logi/>}/>
            <Route path="/register" element={<Register/>}></Route>
             <Route path="/mycontacts" element={<Allc/>}></Route>
            <Route path="/create" element={<Createcontact/>}></Route>
           
            <Route path="/edit/:id" element={<EditContact />} />
          </Switch>
          </Layout>
          </AuthContextProvider>
          </ToastContextProvider>
    </>
  );
}

export default App;
