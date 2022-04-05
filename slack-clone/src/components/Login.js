import React from 'react'
import styled from 'styled-components'
import {Button} from "@material-ui/core"
import {auth,provider} from "../firebase"


function Login() {
    const signIn =(e)=>{
    e.preventDefault()
    auth.signInWithPopup(provider)
    .catch(
      (error)=>alert (error.message)
      )
       
    }
  return (
    <LoginContainer>
        <LoginInContainer>
            <img src={"https://www.pngkey.com/png/full/984-9844126_slack-new-slack-logo-png.png"} alt=""/>
        </LoginInContainer>
      <h1>Sign in to Group talks</h1>
      <p>groups.slack.com</p>
      <Button onClick={signIn}>
          Sign in with Google
      </Button>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div `
height:100vh;
display:grid;
place-items:center;
`
const LoginInContainer = styled.div `
padding:100px;
text-align:center;
background-color:white;


>img {
    object-fit:contain;
    height:100px;
    margin:bottom:40px;
}
> button {
    margin-top:50px;
    text-transform:inherit !important;
    color:white;
    background-color:0a8d48 !important;
}
`