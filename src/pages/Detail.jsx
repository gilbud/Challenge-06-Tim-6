import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Carousel } from "react-bootstrap";
import NavbarSearch from "../components/NavbarSearch";

import "../styles/StyleDetail.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { detailMovies } from "../redux/actions/detailAction";

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

  const params = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(detailMovies(params.id));
  }, [params]);

  return (
    <>
      <NavbarSearch />
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="Carousel-img d-block w-100"
            src={`https://image.tmdb.org/t/p/original${detail?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption className="Movie-caption">
            <h2 className="Movie-caption-title">{detail?.title}</h2>
            <p className="Movie-genres">
              {detail?.genres &&
                detail?.genres?.length > 0 &&
                detail?.genres?.map((genre, i) => {
                  return i === detail?.genres.length - 1
                    ? genre.name
                    : `${genre.name}, `;
                })}
            </p>
            <p className="Movie-caption-text">{detail?.overview}</p>
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
