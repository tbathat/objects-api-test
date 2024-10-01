import * as c from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/movie-card";
import { MovieInterface } from "../../interfaces/movies-interface";

const Genre = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  useEffect(() => {
    // Função assíncrona para buscar os filmes
    const fetchMovies = async () => {
      try {
        const url = "https://freetestapi.com/api/v1/movies";
        const response = await axios.get(url);
        console.log("Response data: ", response.data); // Logar a resposta completa

        if (response.data && Array.isArray(response.data)) {
          setMovies(response.data); // Armazena os dados no estado se for uma array
        } else {
          console.log("A resposta não é uma array ou está vazia.");
        }
      } catch (e) {
        console.log("Erro ao buscar os filmes: ", e);
      }
    };

    fetchMovies(); // Chama a função ao montar o componente
  }, []);

  return (
    <>
      <c.Flex flexWrap="wrap" gap="10px" pt="25px">
        {movies?.map((movie) => (
          <Card key={movie?.genre} {...movie} />
        ))}
      </c.Flex>
    </>
  );
};

export default Genre;
