import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/StyleHome.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/movieActions";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async (page) => {
  const response = await axios.get(
    `${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`
  );
  return response.data.results;
};

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const PopularMovieCard = ({ title, poster, to }) => (
    <Card
      variant="outline-warning"
      as={Link}
      to={to}
      style={{
        width: "18rem",
        margin: "10px",
        background: "rgb(30, 80, 150)",
        outlineColor: "rgb(221, 189, 47)",
        outlineStyle: "outset",
      }}
      className="Card-component"
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${poster}`}
      />
      <Card.Body style={{ color: "white" }}>
        <Card.Title style={{ color: "white" }}>
          <h4 className="text-center">{title}</h4>
        </Card.Title>
      </Card.Body>
    </Card>
  );

  return (
    <Container>
      <Row className="mx-4 py-3">
        <Col xs={12} md={8}>
          <div className="Col-popularmovie">
            <h1>Populer Movie</h1>
          </div>
        </Col>
      </Row>

      <div className="d-flex flex-wrap justify-content-center">
        {movies.map((movie, i) => (
          <PopularMovieCard
            key={i}
            title={movie.title}
            poster={movie.poster_path}
            to={`/detail/${movie.id}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
