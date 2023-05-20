import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Carousel } from "react-bootstrap";
import NavbarSearch from "../components/NavbarSearch";

import "../styles/StyleDetail.css";
import { toast } from "react-toastify";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

function Detail() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getMe = async (id) => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.REACT_APP_API}/v1/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data.data;
        setUser(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            return (window.location.href = "/login");
          }
          toast.error(error.message);
        }
      }
    };
    getMe(params.id);
  });

  const [detailMovie, setDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getDetail() {
      try {
        const response = await axios.get(
          `${baseUrl}/movie/${params.id}?api_key=${apiKey}&language=en-US`
        );
        setDetail(response.data);
        console.log(response.data);
      } catch (error) {
        alert(error);
      }
    }

    getDetail();
  }, [params]);

  return (
    <>
      <NavbarSearch />
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="Carousel-img d-block w-100"
            src={`https://image.tmdb.org/t/p/original${detailMovie?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detailMovie?.title}</h2>
            <p className="Movie-genres">
              {detailMovie?.genres &&
                detailMovie?.genres?.length > 0 &&
                detailMovie?.genres?.map((genre, i) => {
                  return i === detailMovie?.genres.length - 1
                    ? genre.name
                    : `${genre.name}, `;
                })}
            </p>
            <p className="Movie-caption-text">{detailMovie?.overview}</p>
            <Button className="Movie-caption-button" variant="warning">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Detail;
