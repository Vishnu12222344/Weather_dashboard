import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centers content vertically */
  min-height: 100vh; /* Ensures full height */
  width: 100vw; /* Ensures full width */
  padding: 20px;
  box-sizing: border-box; /* Prevents overflow issues */
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export const SearchBar = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows elements to wrap on small screens */
  gap: 10px;
  margin-top: 10px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px; /* Keeps it well-sized on large screens */

  @media (max-width: 600px) {
    width: 90%; /* Adjusts for mobile screens */
  }
`;

export const InputBox = styled.input`
  padding: 10px;
  font-size: 16px;
  flex-grow: 1; /* Makes input expand */
  min-width: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

export const Card = styled.div`
  margin-top: 20px;
  background: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const ForecastWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows items to adjust on mobile */
  gap: 10px;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column; /* Stacks forecast items vertically */
    align-items: center;
  }
`;

export const ForecastBox = styled.div`
  background: white;
  color: black;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 120px;

  @media (max-width: 600px) {
    width: 90%; /* Makes it larger on small screens */
  }
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: red;
  margin-top: 10px;
`;
