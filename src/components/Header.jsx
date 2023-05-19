import React, { useState, useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import axios from "axios";
import "../styles/StyleNavbar.css";
import NavbarSearch from "./NavbarSearch";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

function Header() {
  const [detail1, setDetail1] = useState({});
  const [detail2, setDetail2] = useState({});
  const [detail3, setDetail3] = useState({});

  useEffect(() => {
    async function getDetail() {
      try {
        const response = await axios.get(
          `${baseUrl}/movie/373571?api_key=${apiKey}&language=en-US`
        );
        const response2 = await axios.get(
          `${baseUrl}/movie/76600?api_key=${apiKey}&language=en-US`
        );
        const response3 = await axios.get(
          `${baseUrl}/movie/505642?api_key=${apiKey}&language=en-US`
        );
        setDetail1(response.data);
        setDetail2(response2.data);
        setDetail3(response3.data);
      } catch (error) {
        alert(error);
      }
    }

    getDetail();
  }, []);

  return (
    <>
      <NavbarSearch />
      <Carousel>
        <Carousel.Item>
          <img
            className="Carousel-img d-block w-100"
            src={`https://image.tmdb.org/t/p/original${detail1?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detail1?.title}</h2>
            <p className="Movie-caption-text">{detail1?.overview}</p>
            <Button className="Movie-caption-button" variant="warning">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Carousel-img d-block w-100"
            src={`https://image.tmdb.org/t/p/original${detail2?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detail2?.title}</h2>
            <p className="Movie-caption-text">{detail2?.overview}</p>
            <Button className="Movie-caption-button" variant="warning">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Carousel-img d-block w-100"
            src={`https://image.tmdb.org/t/p/original${detail3?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detail3?.title}</h2>
            <p className="Movie-caption-text">{detail3?.overview}</p>
            <Button className="Movie-caption-button" variant="warning">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Header;
