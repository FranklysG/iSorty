import styled from "styled-components";
import BannerGirl from "../../assets/banner-girl.png";

export const Container = styled.div`
  width: 45rem;
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

export const Label = styled.strong`
  font-size: 2.6rem;
  line-height: 3.6rem;
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