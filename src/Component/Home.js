import React from 'react'
import Authcontext from './Cotext/Authcontext';
import { useNavigate } from 'react-router-dom';
import { useContext,useEffect } from 'react';
function Home() {
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);
  useEffect(() => {
    !user && navigate("/login", { replace: true });
  }, []);
  return (
    <>
      <div className="jumbotron">
        <h1>Welcome {user ? user.name : null}</h1>
        <hr className="my-4" />
        <a className="btn btn-info" href="#" role="button">
          Add Contacts
        </a>
      </div>
    </>
  );
}

export default Home