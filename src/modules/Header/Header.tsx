import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

import { LINKS, ItemProps } from "./constants";

export function Header() {
  return (
    <HeaderStyled>
      <Link href="/">
        <a>
          <LogoStyled
            src="/black-peak.png"
            alt="Header"
            width="110"
            height="60"
          />
        </a>
      </Link>
      <Menu>
        {LINKS.map((link, index) => (
          <Item key={index} {...link} />
        ))}
      </Menu>
    </HeaderStyled>
  );
}

function Item({ label, href, list }: ItemProps) {
  return (
    <MenuItem>
      <Link
        href={{
          pathname: href,
          query: { title: label },
        }}
      >
        <a>{label}</a>
      </Link>
      {list && (
        <div>
          {list.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      )}
    </MenuItem>
  );
}

const HeaderStyled = styled.header`
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  transition: all 0.25s ease-in-out;
  padding: 0 2rem;
  border-bottom: 1px solid grey;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 770px) {
    height: 4.5rem;
  }

  :hover {
    background-color: #fff;
    color: #000;

    img {
      filter: none;
    }
  }
`;

const LogoStyled = styled(Image)`
  filter: invert(100%);
`;

const Menu = styled.div`
  display: flex;
  height: 100%;
  margin-left: 2rem;
`;

const MenuItem = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  :hover {
    border-bottom: 3px solid grey;

    > div {
      display: flex;
    }
  }

  > div {
    position: absolute;
    top: calc(100% + 3px);
    left: 0;
    display: none;
    flex-direction: column;
    min-width: 170px;
    background-color: white;
    width: 100%;

    > div {
      padding: 1rem;
      border-bottom: 1px solid grey;

      :hover {
        background-color: lightgrey;
      }
    }
  }
`;
