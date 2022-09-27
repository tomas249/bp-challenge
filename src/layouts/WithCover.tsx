import React from "react";
import styled from "@emotion/styled";

export type WithCoverProps = {
  children: React.ReactNode;
  title: string;
};

export default function WithCover({ children, title }: WithCoverProps) {
  return (
    <>
      <CoverStyled>{title}</CoverStyled>
      {children}
    </>
  );
}

const CoverStyled = styled.div`
  padding: 12rem 5rem;
  font-size: 2rem;
  font-weight: bold;

  background-image: url("/bg-image-earth.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;

  box-shadow: 0px -750px 500px -500px #000 inset;
  -moz-box-shadow: 0px -750px 500px -500px #000 inset;
  -webkit-box-shadow: 0px -750px 500px -500px #000 inset;
  -o-box-shadow: 0px -750px 500px -500px #000 inset;

  min-height: 350px;

  @media (min-width: 770px) {
    min-height: 675px;
    transition: all 0.5s ease-in-out;
  }
`;
