import React from 'react'
import styled from "styled-components"
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "../firebase"
//Icons
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"


function Header() {
    const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
        {/* Leftside */}
        <HeaderLeft>
            {/* signout when clicked on profile photo */}
            <HeaderAvatar
            onClick={()=>auth.signOut()}
            alt={user?.displayName}
            src={user?.photoURL}/>
            <AccessTimeIcon/>
        </HeaderLeft>
        {/* Search bar */}
        <HeaderSearch>
         <SearchIcon/>
         <input type="text" placeholder="Search"/>
        </HeaderSearch>
        {/* right side */}
        <HeaderRight>
            <HelpOutlineIcon/>
        </HeaderRight>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
display:flex;
position:fixed;
width:100%;
align-items:center;
padding:6px 0;
background-color:var(--slack-color);
justify-content:space-between;
color:white;


`
const HeaderLeft = styled.div`
display:flex;
flex:0.3;
align-items:center;
margin-left:20px;
>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;
}
`
const HeaderAvatar =styled(Avatar)`
cursor:pointer;
margin-right:20px;

:hover{
    opacity:0.8;
}
`
const HeaderSearch = styled.div`
display:flex;
flex:0.4;
align-items:center;
opacity:1;
text-align:center;
padding:0 50px;
border-radius:6px;
background-color:#4c3a59;
color:white;
border :1px solid #4c3a59;
>input{
background-color:transparent;
border:none;
text-align:center;
min-width:30vw;
outline:0;
color:white;
}
`

const HeaderRight = styled.div`
display:flex;
flex:0.3;
align-items:flex-end;

>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;
}
`

export default Header