import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { URL } from "../components/utils/utils";
import { containerStyle } from "@/components/utils/utils";

export default function HomePage() {
  const [localPhotos, setLocalPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`${URL}?query=clothes&page=${page}`, {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH}`,
        },
      });

      const data = await response.json();
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      const updatedPhotos = data.results.map((photo) => ({
        ...photo,
        isFavorite: storedFavorites.some((fav) => fav.id === photo.id),
      }));

      setLocalPhotos((prev) => [...prev, ...updatedPhotos]);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  function toggleFavorite(id) {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorited = storedFavorites.some((photo) => photo.id === id);

    let updatedFavorites;

    if (isAlreadyFavorited) {
      updatedFavorites = storedFavorites.filter((photo) => photo.id !== id);
    } else {
      const photoToAdd = localPhotos.find((photo) => photo.id === id);
      if (photoToAdd) {
        updatedFavorites = [...storedFavorites, photoToAdd];
      }
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setLocalPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !isAlreadyFavorited } : photo
      )
    );
  }
  console.log(localPhotos);

  return (
    <>
      <div style={containerStyle}>
        {localPhotos.map((photo, index) => (
          <Card
            isFavorite={photo.isFavorite}
            key={photo.id}
            imgSrc={photo.urls.regular}
            imgAlt={photo.url}
            userName={`${photo.user.first_name}  ${photo.user.last_name}`}
            creditUrl={photo.user.portfolio_url}
            isLast={index === localPhotos.length - 1}
            newLimit={() => setPage(page + 1)}
            toggleFavorite={() => toggleFavorite(photo.id)}
            description={photo.description}
            alt_description={photo.alt_description}
          />
        ))}
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { URL } from "../components/utils/utils";
import { containerStyle } from "@/components/utils/utils";

export default function HomePage() {
  const [localPhotos, setLocalPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`${URL}?query=clothes&page=${page}`, {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH}`,
        },
      });

      const data = await response.json();
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      const updatedPhotos = data.results.map((photo) => ({
        ...photo,
        isFavorite: storedFavorites.some((fav) => fav.id === photo.id),
      }));

      setLocalPhotos((prev) => [...prev, ...updatedPhotos]);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  function toggleFavorite(id) {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorited = storedFavorites.some((photo) => photo.id === id);

    let updatedFavorites;

    if (isAlreadyFavorited) {
      updatedFavorites = storedFavorites.filter((photo) => photo.id !== id);
    } else {
      const photoToAdd = localPhotos.find((photo) => photo.id === id);
      if (photoToAdd) {
        updatedFavorites = [...storedFavorites, photoToAdd];
      }
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setLocalPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !isAlreadyFavorited } : photo
      )
    );
  }
  console.log(localPhotos);

  return (
    <>
      <div style={containerStyle}>
        {localPhotos.map((photo, index) => (
          <Card
            isFavorite={photo.isFavorite}
            key={photo.id}
            imgSrc={photo.urls.regular}
            imgAlt={photo.url}
            userName={`${photo.user.first_name}  ${photo.user.last_name}`}
            creditUrl={photo.user.portfolio_url}
            isLast={index === localPhotos.length - 1}
            newLimit={() => setPage(page + 1)}
            toggleFavorite={() => toggleFavorite(photo.id)}
            description={photo.description}
            alt_description={photo.alt_description}
          />
        ))}
      </div>
    </>
  );
}
