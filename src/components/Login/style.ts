import styled from "styled-components";
import BannerGirl from "../../assets/banner-girl.png";

export const Container = styled.div`
  height: 100vh;
  text-align: center;

  background: #17171a url(${BannerGirl}) no-repeat center top;
  padding: 44rem 8rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const SignInWithInstagram = styled.a`
  background: #ffcd1e;
  margin-top: 3.2rem;
  padding: 0 4rem;
  height: 5.6rem;
  color: #09090a;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter .2s;

  svg {
    margin-right: 1.6rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`