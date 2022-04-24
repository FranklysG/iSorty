import styled from "styled-components";

export const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const MessageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 5rem;
`

export const Messages = styled.li`
  max-width: 44rem;

  &:nth-child(2) {
    margin-left: 8rem;
  }

`

export const MessageContent = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
`