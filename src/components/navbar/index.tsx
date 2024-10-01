import * as c from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlayIcon } from "../../assets/play.icon";

const Navbar = () => {
  return (
    <c.Flex
      position="fixed"
      minH="65px"
      top="0"
      left="0"
      width="100%"
      zIndex="1"
      borderBottom="1px solid #888"
      justify="space-around"
    >
      <c.Flex as={Link} to="/" align="center" gap="16px">
        <c.Icon as={PlayIcon} color="blue" w="1.5rem" h="1.5rem" />
        <c.Heading
          color="#fff"
          fontSize="18px"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Movie Catalogue
        </c.Heading>
      </c.Flex>

      <c.Flex justify="space-around" minW="500px">
        <Link to="/">
          <c.Text>Home</c.Text>
        </Link>
        <Link to="/about">
          <c.Text>About</c.Text>
        </Link>
        <Link to="/contact">
          <c.Text>Contact</c.Text>
        </Link>
      </c.Flex>

      <Link to="/favorites">
        <c.Text>Favorites</c.Text>
      </Link>
    </c.Flex>
  );
};

export default Navbar;
