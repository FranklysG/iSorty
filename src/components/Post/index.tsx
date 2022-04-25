import React, { useCallback, useEffect } from "react";
import { useComments } from "../../hooks/useComments";

import PostImg from "../../assets/post.jpg";
import AvatarFranklys from "../../assets/avatar_franklys.jpg";
import { Container, Header, MessageUser, UserImage } from "./styled";

export function Post() {
  const { setUrlPost } = useComments();
  
  function handleAddedUrlPost(url: string){
    setUrlPost(url);
  }

  const pasteFunction = useCallback(
    (event: any) => {
      if (event.ctrlKey && event.keyCode === 86) {
        console.log('ctrl');

      }
    },
    []
  );

  useEffect(() => {
    document.addEventListener("keydown", pasteFunction, false);

    return () => {
      document.removeEventListener("keydown", pasteFunction, false);
    };
  }, [pasteFunction]);
  return (
    <Container>
      <Header>
        <MessageUser>
          <UserImage>
            <img src={AvatarFranklys} alt="user_name" />
          </UserImage>
          <span>franklysg</span>
        </MessageUser>
        <input id="codPost" type="text" maxLength={11} onChange={(event) => handleAddedUrlPost(event.target.value)} placeholder="CLCHzYZgcZb"/>
      </Header>
      <img src={PostImg} className="post" alt="psot-instagram" />
    </Container>
  );
}
