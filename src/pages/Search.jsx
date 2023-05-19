import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/StyleHome.css";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;
function Search() {
  const location = useLocation();
  const { query } = location.state;
  const [searchedMovieList, setSearchedMovieList] = useState({});
  const [resultName, setResultName] = useState("");

  useEffect(() => {
    async function searchMovie() {
      try {
        const response = await axios.get(
          `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
        );
        console.log(JSON.stringify(response.data.results));
        setSearchedMovieList(response.data.results);
      } catch (error) {
        alert(error);
      }
    }
    setResultName(query);
    searchMovie();
  }, [query]);

  const PopularMovieCard = ({ title, poster, to }) => (
    <Card
      as={Link}
      to={to}
      className="Card-component"
      variant="outline-warning"
      style={{
        width: "18rem",
        margin: "10px",
        background: "rgb(30, 80, 150)",
        outlineColor: "rgb(221, 189, 47)",
        outlineStyle: "outset",
      }}
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${poster}`}
      />
      <Card.Body style={{ color: "black" }}>
        <Card.Title style={{ color: "white" }}>
          <h4 className="text-center">{title}</h4>
        </Card.Title>
      </Card.Body>
    </Card>
  );

  return (
    <>
      <Header />
      <Container>
        <h2 className="text-warning p-4">Result Found: {resultName}</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {searchedMovieList.length > 0 &&
            searchedMovieList.map((movie, i) => (
              <PopularMovieCard
                key={i}
                title={movie.title}
                poster={movie.poster_path}
                to={`/detail/${movie.id}`}
              />
            ))}
        </div>
      </Container>
    </>
  );
}

export default Search;
