import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState([]);
  const getData = (url) => {
    return fetch(url, {
      headers: {
        "x-api-key": "reqres_22896dc304864dd588527ba8934372b6",
      },
    }).then((res) => res.json());
  };

  useEffect(() => {
    fetchandGetUser("https://reqres.in/api/users");
  }, []);
  const fetchandGetUser = async (url) => {
    try {
      const data = await getData(url);
      console.log(data.data);
      setUser(data.data);

      //   setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>User Page</h1>
      <hr />

      {user.map((el) => (
        <div
          style={{ border: "1px solid red", margin: "20px", padding: "20px" }}
        >
          <img src={el.avatar} alt="photo" />
          <h2>Id: {el.id}</h2>
          <h3>
            Name: {el.first_name} {el.last_name}
          </h3>
          <h4>Email: {el.email}</h4>
          {/* <button>More Info</button> */}
          <Link to={`/user/${el.id}`}>More Info</Link>
        </div>
      ))}
    </div>
  );
}
// avatar: "https://reqres.in/img/faces/1-image.jpg";
// email: "george.bluth@reqres.in";
// first_name: "George";
// id: 1;
// last_name: "Bluth";
