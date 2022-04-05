import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

function SidebarOptions({ Icons, Title, addChannelOption, id }) {
  //dispatch action in react components
  const dispatch = useDispatch();
  //when nw channel is added
  const addChannel = () => {
    const channelName = prompt("Enter the channel name");
  //adds channel to collection
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  //if the channel already exists =>dispatches the action to enter the existing channel
  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };
  return (
    /* to add or select channel */
    <SidebarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icons && <Icons fontSize="small" style={{ padding: 10 }} />}
      {/* if icons exist or not */}
      {Icons ? (
        <h3>{Title}</h3>
      ) : (
        <SidebarOptionsChannel>
          <span>#</span>
          {Title}
        </SidebarOptionsChannel>
      )}
    </SidebarOptionsContainer>
  );
}

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 2px;
  :hover {
    background-color: #4c3a50;
    opacity: 0.8;
    cursor: pointer;
  }
  > h3 {
    font-weight: 400;
  }
  > h3 > span {
    padding: 14px;
  }
`;
const SidebarOptionsChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
