import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleUser() {
  const [user, setUser] = useState([]);

  const val = useParams();
  console.log(val);

  const getData = (url) => {
    return fetch(url, {
      headers: {
        "x-api-key": "reqres_22896dc304864dd588527ba8934372b6",
      },
    }).then((res) => res.json());
  };

  useEffect(() => {
    fetchandGetUser(`https://reqres.in/api/users/${val.userId}`);
  }, []);
  const fetchandGetUser = async (url) => {
    try {
      const data = await getData(url);
      console.log(data.data);
      setUser(data.data); // {}

      //   setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>User Page</h1>
      <hr />

      <div style={{ border: "1px solid red", margin: "20px", padding: "20px" }}>
        <img src={user.avatar} alt="photo" />
        <h2>Id: {user.id}</h2>
        <h3>
          Name: {user.first_name} {user.last_name}
        </h3>
        <h4>Email: {user.email}</h4>
        <p>
          Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Rerum quam omnis qui. Excepturi, velit harum! Minima porro
          voluptatibus veniam. Tempore corrupti adipisci alias hic recusandae
          cumque quis natus laboriosam nam.
        </p>

        <br /><br />
        <button>Click</button>
        {/* <button>More Info</button> */}
      </div>
    </div>
  );
}
// avatar: "https://reqres.in/img/faces/1-image.jpg";
// email: "george.bluth@reqres.in";
// first_name: "George";
// id: 1;
// last_name: "Bluth";
