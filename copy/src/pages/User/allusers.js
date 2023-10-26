import axios from "axios";
import React, { useEffect, useState } from "react";

function Allusers() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await axios.get("http://localhost:4000/api/v1/users");
      setuser(data.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <table class="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Date Of Birth</th>
          <th scope="col">Gender</th>
          <th scope="col">Phone</th>
        
                  </tr>
      </thead>
      <tbody>
        {user &&
          user.map((user, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.dateofbirth}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
      
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Allusers;
