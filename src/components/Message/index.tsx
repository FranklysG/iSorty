import React from "react";
import Logo from '../../assets/logo.png';
import AvatarFranklys from '../../assets/avatar_franklys.jpg';
import AvatarNattan from '../../assets/avatar_nattan.jpg';
import AvatarVitoria from '../../assets/avatar_vitoria.jpg';
import { MessageListWrapper, MessageList, Messages, MessageContent, MessageUser, UserImage } from "./style";

export function Message() {
  return (
    <MessageListWrapper>
      <img src={Logo} alt="Do While 2021" />

      <MessageList>
        <Messages>
          <MessageContent>
          “Se você quer ser bem sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si.”
          </MessageContent>
          <MessageUser>
            <UserImage>
              <img src={AvatarFranklys} alt="user_name" />
            </UserImage>
            <span>franklysg</span>
          </MessageUser>
        </Messages>

        <Messages>
          <MessageContent>
          “Tenha a coragem de seguir seu coração e intuição. Eles, de certa forma, já sabem o que você realmente quer ser.”
          </MessageContent>
          <MessageUser>
            <UserImage>
              <img src={AvatarNattan} alt="user_name" />
            </UserImage>
            <span>natan.alv_s</span>
          </MessageUser>
        </Messages>

        <Messages>
          <MessageContent>
          “A força não vem de vencer. Suas lutas desenvolvem suas forças. Quando você atravessa dificuldades e decide não se render, isso é força.”
          </MessageContent>
          <MessageUser>
            <UserImage>
              <img src={AvatarVitoria} alt="user_name" />
            </UserImage>
            <span>vitoria.taveira</span>
          </MessageUser>
        </Messages>
        
      </MessageList>
    </MessageListWrapper>
  );
}
