import styled from 'styled-components';
interface ISidebarProps {
  toggle: boolean;
}

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  padding: 4rem 2rem;
  width: 100%;

  max-width: 2000px;

  //span {
  //  margin: 1rem;
  //}
  div {
    ul {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style-type: none;
      padding: 0;
      margin: 0;
      font-size: 1.2rem;
    }
  }

  .btn-menu {
    display: none;
    color: white;
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: 0;
  }
  @media screen and (max-width: 900px) {
    div {
      display: none;
    }
    .btn-menu {
      display: flex;
    }
  }
`;
export const Sidebar = styled.header<ISidebarProps>`
  position: absolute;
  transition: all 0.3s ease;
  right: 0;
  width: 100%;
  height: 100%;
  top: ${(props) => (props.toggle ? '0' : '-100%')};
  opacity: ${(props) => (props.toggle ? '1' : '0')};
  background-color: rgb(24, 24, 24);
  color: white;
  z-index: 1000;
  button {
    color: white;
    font-size: 2.5rem;
    float: right;
    margin: 1rem;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: 0;
  }
  ul {
    font-size: 1.6rem;
    margin-top: 6rem;
    list-style-type: none;
    li {
      margin: 3rem;
    }
    img {
      justify-content: center;
    }
  }
`;
