import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const MakeRaffle = styled.a`
  background: #ffcd1e;
  margin-top: 3.2rem;
  padding: 0 4rem;
  height: 5.6rem;
  color: #09090a;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter .2s;

  svg {
    margin-right: 0.3rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`
export const Slid = styled.div`
  display: flex;

  img {
    width: 20rem !important;
    height: 20rem !important;
    border-radius: 50%;
    border: 1px solid #121214;
    
  }

  div:nth-child(1){
    div {
      position: relative;
      right: -55px;
      top: 15px;

      z-index: -1;

      img {
        width: 16rem !important;
        height: 16rem !important;
      }
    }
  }

  div:nth-child(3){
    div {
      position: relative;
      left: -55px;
      top: 15px;

      z-index: -1;

      img {
        width: 16rem !important;
        height: 16rem !important;
      }
    }
  }
  
`;


export const Messages = styled.div`
  max-width: 44rem;
`

export const MessageContent = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
`

export const MessageUser = styled.div`
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
