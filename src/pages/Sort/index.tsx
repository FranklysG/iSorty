import React from "react";
import { Post } from "../../components/Post";
import { Raffle } from "../../components/raffle";
import { Container } from "./style";

export function Sort() {
  return (
    <Container>
      <Raffle />
      <Post />
    </Container>
  );
}