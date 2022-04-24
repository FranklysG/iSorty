import React from "react";
import { Container, UserImage } from "./style";

interface Props {
  user: string;
  avatar: string;
}

export function MessageUser({user, avatar}: Props) {
  return (
    <Container>
      <UserImage>
        <img src={avatar} alt="user_name" />
      </UserImage>
      <span>{user}</span>
    </Container>
  );
}