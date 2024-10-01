import * as c from "@chakra-ui/react";

interface CardProps {
  genre: string;
  year: number;
  poster: string;
}

const Card = ({ genre, year }: CardProps) => {
  return (
    <c.Flex
      direction="column"
      justify="center"
      w="200px"
      h="130px"
      bg="orange"
      borderRadius="8px"
      p="10px"
      border="1px solid black"
    >
      <c.Text color="black" fontSize="1rem" fontWeight="bold">
        {genre}
      </c.Text>
      <c.Text color="black" fontSize="0.75rem">
        {year}
      </c.Text>
    </c.Flex>
  );
};

export default Card;
