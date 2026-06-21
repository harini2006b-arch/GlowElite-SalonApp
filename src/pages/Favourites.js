import React, { useState, useEffect } from "react";

function Favorites() {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {

    const savedSalons =
      JSON.parse(
        localStorage.getItem("favourites")
      ) || [];

    setFavourites(savedSalons);

  }, []);

  const removeFavourite = (id) => {

    const updatedSalons =
      favourites.filter(
        (salon) => salon.id !== id
      );

    setFavourites(updatedSalons);

    localStorage.setItem(
      "favourites",
      JSON.stringify(updatedSalons)
    );
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "120px 40px",
        color: "white"
      }}
    >

      <h1
        style={{
          marginBottom: "10px"
        }}
      >
        ❤️ Favorite Salons
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          marginBottom: "40px"
        }}
      >
        Your luxury salon collection.
      </p>

      {favourites.length === 0 ? (

        <div>

          <h3>
            No Favorites Yet 😔
          </h3>

          <p>
            Explore salons and add them to your favourites.
          </p>

        </div>

      ) : (

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px"
          }}
        >

          {favourites.map((salon) => (

            <div
              key={salon.id}
              style={{
                background: "#1e293b",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.3)"
              }}
            >

              <img
                src={salon.image}
                alt={salon.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div
                style={{
                  padding: "20px"
                }}
              >

                <h3>
                  {salon.name}
                </h3>

                <p>
                  📍 {salon.location}
                </p>

                <p>
                  ⭐ {salon.rating}
                </p>

                <p>
                  🏆 Luxury Score {salon.score}
                </p>

                <button
                  onClick={() =>
                    removeFavourite(
                      salon.id
                    )
                  }
                  style={{
                    background:
                      "#ff4d6d",
                    color: "white",
                    border: "none",
                    padding:
                      "10px 20px",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                    marginTop:
                      "10px"
                  }}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default Favorites;