import React from "react";
import { FaHatCowboySide } from "react-icons/fa";
import Logo from "../../assets/logo.png";

import AvatarVitoria from "../../assets/avatar_vitoria.jpg";
import AvatarFranklys from "../../assets/avatar_franklys.jpg";
import AvatarNattan from "../../assets/avatar_nattan.jpg";
import {
  Container,
  MakeRaffle,
  Slid,
  MessageContent,
  Messages,
  MessageUser,
  UserImage,
} from "./style";

export function Raffle() {
  return (
    <Container>
      <img src={Logo} alt="Do While 2021" />
      <Slid>
        <MessageUser>
          <UserImage>
            <img src={AvatarVitoria} alt="user_name" />
          </UserImage>
        </MessageUser>
        <MessageUser>
          <UserImage>
            <img src={AvatarFranklys} alt="user_name" />
          </UserImage>
        </MessageUser>
        <MessageUser>
          <UserImage>
            <img src={AvatarNattan} alt="user_name" />
          </UserImage>
        </MessageUser>
      </Slid>
      <Messages>
        <MessageContent>
          is simply dummy text of the printing and typesetting industry. Lorem
        </MessageContent>
        <MessageUser>
          <UserImage>
            <img src={AvatarVitoria} alt="user_name" />
          </UserImage>
          <span>franklysg</span>
        </MessageUser>
      </Messages>
      <MakeRaffle>
        <FaHatCowboySide size={24} />
        Fazer Sorteio
      </MakeRaffle>
    </Container>
  );
}
