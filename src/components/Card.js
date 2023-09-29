import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import LazyLoad from "react-lazy-load";

export default function Card({
  creditUrl,
  imgAlt,
  imgSrc,
  userName,
  newLimit,
  isLast,
  toggleFavorite,
  isFavorite,
  description,
  alt_description,
}) {
  const [isHovering, setIsHovered] = useState(false);
  const cardRef = useRef();

  const photoWrapper = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    width: "230px",
    marginBottom: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    margin: "10px",
  };

  const image = {
    width: "100%",
    maxHeight: "180px",
    display: "block",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const overlay = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    color: "#fff",
    display: isHovering ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
  };

  const contentWrapper = {
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box",
    maxWidth: "100%",
  };

  const textStyle = {
    textAlign: "center",
    margin: "5px 0",
    fontWeight: "600",
  };

  const textStyleUserName = {
    textAlign: "center",
    fontStyle: "italic",
    margin: "5px 0",
  };

  const lineStyle = {
    width: "60px",
    height: "2px",
    background: "white",
    margin: "0 auto",
  };

  useEffect(() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(cardRef.current);
  }, [isLast, newLimit, cardRef]);

  return (
    <div
      ref={cardRef}
      style={photoWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={overlay}>
        <div style={contentWrapper}>
          <p style={textStyle}>{description ? description : alt_description}</p>
          <div style={lineStyle}></div>
          <p style={textStyleUserName}>{userName}</p>
          <Button
            name={isFavorite ? "Remove Favorite" : "Favorite"}
            onClick={toggleFavorite}
          />
        </div>
      </div>
      <a href={creditUrl} target="_blank">
        <LazyLoad maxHeight={200}>
          <img src={imgSrc} alt={imgAlt} style={image} loading="lazy" />
        </LazyLoad>
      </a>
    </div>
  );
}
