import { Container, Spinner } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

import caret from "./../assets/caret.png";

export const colors = {
  primary: "#fff",
  light: "#EDF2F7",
  secondary: "#6a7edf",
  tertiary: "#3c3f78",
  alternate: "#f27389",
  dark: "#111",
  green: "#3CB371",
  lightgreen: "#F0FFF4"
};

export const StyledContainer = styled(Container)`
  background-color: ${colors.primary};
  border-radius: 0.5rem;
`;

export const Welcome = styled.p`
  font-size: 2.3rem;
  justify-content: center;
  height: calc(100vh - 85px);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const StyledButton = styled(Link)`
  width: 16rem;
  padding: 0.3rem;
  border: 0.1rem solid ${colors.secondary};
  border-radius: 0.5rem;
  color: ${colors.secondary};
  font-size: 1.7rem;
  align-self: center;
  margin-top: 2rem;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${colors.secondary};
    text-decoration: none;
    color: ${colors.primary};
  }
`;

// Input stuff

export const StyledInputField = styled.div`
  margin: 1rem auto 2rem auto;
  position: relative;
  width: 80%;
`;

export const StyledInput = styled.input`
  border: 0;
  outline: 0;
  background-color: ${colors.light};
  border-radius: 1rem;
  width: 100%;
  padding-left: 3.5rem;
  padding-right: 3rem;
  height: 3.5rem;
  font-size: 1rem;
  letter-spacing: 0.1rem;

  &:focus {
    border: 0.1rem solid ${colors.secondary};
  }
`;

export const StyledSelect = styled.select`
  border: 0;
  outline: 0;
  border-radius: 1rem;
  width: 100%;
  padding-left: 3.5rem;
  padding-right: 3rem;
  height: 3.5rem;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  appearance: none;
  background: url(${caret}) 96% / 5% no-repeat ${colors.light};

  &:focus {
    border: 0.1rem solid ${colors.secondary};
  }
`;

export const Label = styled.p`
  font-size: 1rem;
  margin-bottom: 0;
`;

export const StyledSubmit = styled.button`
  border-radius: 1rem;
  height: 3.5rem;
  font-size: 1.3rem;
  margin: 1rem auto;
  width: 80%;
  background-color: ${colors.primary};
  border: 0.1rem solid ${colors.secondary};
  color: ${colors.secondary};
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${colors.secondary};
    text-decoration: none;
    color: ${colors.primary};
  }
`;

export const StyledIcon = styled.p`
  position: absolute;
  top: 2.2rem;
  ${(props) => props.postion}: 0.5rem;
  font-size: 1.8rem;
`;

export const InfoIcon = styled.p`
  font-size: 5rem;
  color: ${colors.tertiary};
`;

export const StyledInfo = styled.p`
  font-size: 2rem;
`;

export const Message = styled.p`
  font-size: 0.9rem;
  color: ${colors.alternate};
  margin-top: 2rem;
`;

// Dashboard

export const PortalImage = styled.div`
  background-image: url(${props => props.image});
  height: calc(100vh - 85px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const StyledHead = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  color: ${colors.secondary};
`;

export const StyledSpinner = styled(Spinner)`
  margin-left: 1rem;
`;

export const StyledSubmitLoading = styled.button`
  border-radius: 1rem;
  height: 3.5rem;
  font-size: 1.2rem;
  margin: 1rem auto;
  width: 80%;
  border: 0.1rem solid ${colors.secondary};
  transition: all 0.3s ease-out;
  background-color: ${colors.secondary};
  text-decoration: none;
  color: ${colors.primary};
  opacity: 0.7;
`;