import React from "react";
import Card from "./Card";
import image1 from "../assets/Docker.png";
import image2 from "../assets/kubernetes.png";
import image3 from "../assets/react.png";

const cards =[
  {
    id:1,
    title: "Curso de React",
    image:image1,
    instructor: "Arturo López"
  },

  {
    id: 2,
    title: "Curso de Kubernetes",
    image: image2,
    instructor: "Jorge López"
  },

  {
    id: 3,
    title: "Curso de React",
    image: image3,
    instructor: "Yo Merengues"
  }
]

export default function Cards() {
  return (
    <div className="container d-flex justify-content aling-item-center h-100">
      <div className="row">
        {cards.map((c) => (
          <div className="col-md-4" key={cards.id}>
            <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
            />
          </div>
        ))}
      </div>
         
    </div>
  );
}
