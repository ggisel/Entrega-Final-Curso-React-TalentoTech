import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to={"/"}>
      <img src="/images/logo.png" alt="logo-kiosco" />
      </Link>
      <Nav />
    </header>
  );
};