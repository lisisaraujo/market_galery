import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { containerStyle } from "@/components/utils/utils";

export default function Favorites() {
  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteImages(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favoriteImages.filter((image) => image.id !== id);
    setFavoriteImages(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <div style={containerStyle}>
        {favoriteImages.map((photo) => (
          <Card
            isFavorite={true}
            key={photo.id}
            imgSrc={photo.urls.regular}
            imgAlt={photo.alt_description || ""}
            creditUrl={photo.user?.portfolio_url || ""}
            toggleFavorite={() => removeFavorite(photo.id)}
            userName={`${photo.user.first_name}  ${photo.user.last_name}`}
            description={photo.description}
            alt_description={photo.alt_description}
          />
        ))}
      </div>
    </>
  );
}
