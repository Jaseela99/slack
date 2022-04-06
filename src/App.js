import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Spinner from "react-spinkit";

//components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth);
  //to show a spinner while the page is loading
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src={
              "https://www.pngkey.com/png/full/984-9844126_slack-new-slack-logo-png.png"
            }
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return (
    <div className="App">
      {/* if user is not loggged in */}
      {!user ? (
        <Login />
      ) : (
        /* if logged in then to home page */
        <>
          <Header />
          {/* body part */}
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

//styling
const AppBody = styled.div`
  display: flex;
  height: 100%;
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
