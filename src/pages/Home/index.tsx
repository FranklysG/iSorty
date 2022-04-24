import React from "react";
import { Login } from "../../components/Login";
import { Message } from "../../components/Message";
import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <Message />
      <Login />
    </Container>
  );
}