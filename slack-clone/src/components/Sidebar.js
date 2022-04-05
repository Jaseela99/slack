import React from "react";
import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import {useCollection} from "react-firebase-hooks/firestore"
import {db,auth} from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth";

//icons
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import MessageIcon from "@material-ui/icons/Comment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import GroupIcon from "@material-ui/icons/Group"
import AppsIcon from "@material-ui/icons/Apps"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"


function Sidebar() {

  const [user] = useAuthState(auth)

//Retrieve and monitor  collection value in Cloud Firestore. =>takes in rooms
//Returns a firestore.QuerySnapshot (if a query is specified), =>channels
//a boolean to indicate if the data is still being loaded and any firestore.=>loading
//FirestoreError returned by Firebase when trying to load the data.=>error

  const [channels,loading,error] =useCollection(db.collection("rooms"))
  
  return (
    <SidebarContainer>
      {/* header part */}
      <SidebarHeader>
        <SidebarInfo>
          <h2>Group Talks</h2>
          <h3>
            <FiberManualRecordIcon />
            Jaseela Jaleel
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      {/* icons for sidebar menus */}
      <SidebarOptions Icons={MessageIcon} Title="Threads"/>
      <SidebarOptions Icons={InboxIcon} Title="New Messages"/>
      <SidebarOptions Icons={DraftsIcon} Title="Saved Items"/>
      <SidebarOptions Icons={BookmarkBorderIcon} Title="Channel Browser"/>
      <SidebarOptions Icons={GroupIcon} Title="Groups"/>
      <SidebarOptions Icons={AppsIcon} Title="Apps"/>
      <SidebarOptions Icons={FileCopyIcon} Title="FileBrowser"/>
      <SidebarOptions Icons={ExpandLessIcon} Title="Show Less"/>
       <hr/>
      <SidebarOptions Icons={ExpandMoreIcon} Title="Channels"/>
      <hr/>
      {/* add new channel */}
      <SidebarOptions Icons={AddIcon} addChannelOption Title="Add Channel"/>
         {channels?.docs.map((doc)=>(
        <SidebarOptions 
        key={doc.id} 
        id={doc.id}
        Title={doc.data().name}/>
        ))}
       
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.3;
  background-color: var(--slack-color);
  color: white;
  border-top: 1px solid #4c3a50;
  margin-top: 50px;
  max-width: 260px;
  >hr{
    margin:10px 0px 10px 0px;
    border:1px solid #4c3a50;

  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #4c3a50;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #4c3a50;
    background-color: white;
    border-radius: 20px;
    font-size: 18px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 12px;
    color: green;
    margin: 1px;
  }
`;
