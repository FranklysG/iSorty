import React from "react";
import Logo from '../../assets/logo.png';
import { MessageList, MessageListWrapper } from "./style";

export function Message() {
  return (
    <MessageListWrapper>
      <img src={Logo} alt="Do While 2021" />

      <MessageList>
        {/* <li key={message.id} className={styles.message}>
          <p className={styles.messageContent}>{message.text}</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src={message.user.avatar_url} alt={message.user.name} />
            </div>
            <span>{message.user.name}</span>
          </div>
        </li> */}
      </MessageList>
    </MessageListWrapper>
  );
}
