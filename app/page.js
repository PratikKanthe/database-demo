"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";


function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div className="container">
        <div className="card">
        <h1>This data is from <span className="letter"><Link href="/about">MYSQL</Link></span></h1>
        {data.map((d, i) => {
          return (
            <div key={i}>
              <p>
                {d.id} {d.name} {d.phone} {d.email}
              </p>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
}


export default Home;