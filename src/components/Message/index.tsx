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
            is simply dummy text of the printing and typesetting industry. Lorem 
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
            is simply dummy text of the printing and typesetting industry. Lorem 
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
            is simply dummy text of the printing and typesetting industry. Lorem 
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
