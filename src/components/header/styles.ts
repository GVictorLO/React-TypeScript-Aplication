import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';


export const styledHeader = styled.header`
  background-color: #2E948A;
  height: 60px;
  display: flex;
  width: 100%;
`

export const navbarStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const logoImg = styled.img`
  height: 70px;
  width: auto;
`
export const styledLink = styled(LinkRoute)`
  color: white;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  `