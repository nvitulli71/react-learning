import React from "react";
import ReactDom from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.error(error)
  );
  return <div>Latitude: </div>;
};

ReactDom.render(<App />, document.querySelector("#root"));
