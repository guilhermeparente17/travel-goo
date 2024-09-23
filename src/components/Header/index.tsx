import { FaRegStar } from "react-icons/fa";
import { HeaderContainer, HeaderItem, HeaderItems, HeaderLogo } from "./styles";
import { PiUserCircleLight } from "react-icons/pi";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>Travel Goo</HeaderLogo>

      <HeaderItems>
        <HeaderItem>Home</HeaderItem>
        <HeaderItem>About Us</HeaderItem>
        <HeaderItem>Packages</HeaderItem>
      </HeaderItems>

      <HeaderItems>
        <FaRegStar size="30" color="#FF7A00" />
        <PiUserCircleLight size="30" color="#FFF" style={{margin: '0px 46px'}} />
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
