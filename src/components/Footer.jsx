import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #f8f9fa;
  color: #6c757d;
  font-size: 14px;
`;

const TeamList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const TeamListItem = styled.li`
  margin-right: 10px;
  font-weight: 500;
`;

export function Footer() {
  return (
    <FooterDiv>
      <TeamList>
        <TeamListItem>Team Members:</TeamListItem>
        <TeamListItem>Suraj Patil</TeamListItem>
        <TeamListItem>Dhruv Sawant</TeamListItem>
        <TeamListItem>Piyush Shah</TeamListItem>
        <TeamListItem>Shreya Sandhashive</TeamListItem>
        <TeamListItem>Khushi Raval</TeamListItem>
      </TeamList>
    </FooterDiv>
  );
}
