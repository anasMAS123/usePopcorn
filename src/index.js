import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StartRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating onRatingMovie={setMovieRating} />
//       <p>the rate of the movie is {movieRating} </p>
//     </div>
//   );
// }
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating />
    <StarRating
      maxRating={5}
      defaultRating={3}
      color="red"
      size={32}
      messages={["terrible", "bad", "okey", "good", "amazing"]}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);
