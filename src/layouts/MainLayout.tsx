import React from "react";
import styled from "@emotion/styled";

import { Header } from "@modules/Header";
import { Footer } from "@modules/Footer";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <ContainerStyled>
      <Header />
      {children}
      <Footer />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
