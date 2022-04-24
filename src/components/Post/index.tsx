import React from "react";
import PostImg from "../../assets/post.jpg";
import { FaEllipsisV } from "react-icons/fa";

import AvatarFranklys from "../../assets/avatar_franklys.jpg";
import { Container, Header, MessageUser, UserImage } from "./styled";

export function Post() {
  return (
    <Container>
      <Header>
        <MessageUser>
          <UserImage>
            <img src={AvatarFranklys} alt="user_name" />
          </UserImage>
          <span>franklysg</span>
        </MessageUser>
        <FaEllipsisV size={18} />
      </Header>
      <img src={PostImg} className="post" alt="psot-instagram" />
    </Container>
  );
}
