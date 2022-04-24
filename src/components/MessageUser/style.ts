import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;

  
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 1px solid #121214;
  }

  span {
    font-size: 1.6rem;
    margin-left: 1.2rem;

    filter: brightness(0.7);
  }
`

export const UserImage = styled.div`
  padding: .2rem;
  background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
  border-radius: 50%;
  line-height: 0;
`