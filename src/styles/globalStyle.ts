import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Texto = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial;
  color: #2e6b94;
`
export const StyledButton = styled.button`
  background-color: #2e6b94;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`
export const LinkHome = styled(Link)`
  color: #2E948A;
  font-weight: bold;
  font-size: 18px;
  border: 3px;
  border-color: #2E948A;
  text-decoration: none;
`