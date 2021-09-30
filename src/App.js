import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=> {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //User is logged in
        dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoURL: userAuth.photoURL
        }))
      } else {
        //User in logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      {/* header(top) */} <Header/>

      { !user ? <Login/> : (
          <div className="app__body">
          <Sidebar/> {/* app body(center) */}{/* sidebar(left) */} 
          <Feed />{/* feeds(center) */} 
           <Widgets/>{/* widgets(right) */}
           
           
           </div>
      )}
    </div>
  );
}

export default App;
