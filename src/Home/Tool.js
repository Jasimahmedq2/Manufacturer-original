import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Tool.css";
import { motion } from "framer-motion";
const Tool = ({ service }) => {
  const { id } = useParams();
  console.log({ service });
  const { _id, name, image, minimum, available, title, price } = service;
  const navigate = useNavigate();
  const handlePurchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <motion.div
      whileHover={{
        y: -12,
        transition: { duration: 0.5 },
      }}
      className="card hover-body lg:max-w-lg bg-accent text-white shadow-xl relative"
    >
      <figure className=" h-1/3  relative overflow-hidden bg-no-repeat bg-cover w-full">
        <img src={image} alt="Shoes" className="rounded-xl image-style" />
      </figure>
      <div className="card-body items-start mb-4">
        <h2 className="font-bold text-xl">
          Type: <span className="font-bold text-1xl">{name}</span>
        </h2>
        <h2 className="font-bold text-xl">
          Minimum qnt:{" "}
          <span className="font-bold text-1xl">{minimum}</span>
        </h2>
        <h2 className="font-bold text-xl">
          Available qnt: <span className="font-bold text-1xl">{available}</span>
        </h2>
        <h2 className="font-bold text-xl">
          Price: <span className="font-bold text-2xl text-white">{price}</span>
        </h2>

        <h2 className="font-bold text-xl text-start">
          Title: <span className="font-bold text-xl text-white">{title}</span>
        </h2>
        <div>
          <button
            onClick={() => handlePurchase(_id)}
            className="btn bg-gradient-to-r from-primary to-secondary bg-gradient-to-r hover:from-secondary hover:to-primary absolute bottom-0 right-0"
          >
            purchase
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Tool;
