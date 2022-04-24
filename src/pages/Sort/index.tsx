import React from "react";
import { Message } from "../../components/Message";
import { Post } from "../../components/Post";
import { Container } from "./style";

export function Sort() {
  return (
    <Container>
      <Message />
      <Post />
    </Container>
  );
}