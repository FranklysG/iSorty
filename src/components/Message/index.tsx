import React from "react";
import Logo from '../../assets/logo.png';
import AvatarFranklys from '../../assets/avatar_franklys.jpg';
import AvatarNattan from '../../assets/avatar_nattan.jpg';
import AvatarVitoria from '../../assets/avatar_vitoria.jpg';
import { MessageListWrapper, MessageList, Messages, MessageContent } from "./style";
import { MessageUser } from "../MessageUser";

export function Message() {
  return (
    <MessageListWrapper>
      <img src={Logo} alt="Do While 2021" />

      <MessageList>
        <Messages>
          <MessageContent>
            is simply dummy text of the printing and typesetting industry. Lorem 
          </MessageContent>
          <MessageUser user="franklysg" avatar={AvatarFranklys}/>
        </Messages>

        <Messages>
          <MessageContent>
            is simply dummy text of the printing and typesetting industry. Lorem 
          </MessageContent>
          <MessageUser user="natan.alv_s" avatar={AvatarNattan}/>
        </Messages>

        <Messages>
          <MessageContent>
            is simply dummy text of the printing and typesetting industry. Lorem 
          </MessageContent>
          <MessageUser user="vitoria.taveira" avatar={AvatarVitoria}/>
        </Messages>
        
      </MessageList>
    </MessageListWrapper>
  );
}
