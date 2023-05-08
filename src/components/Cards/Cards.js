import React, { useState } from "react";
import styles from "./Cards.module.scss";
import { Button, Modal } from "react-bootstrap";

const Card = ({
  id,
  name,
  image,
  location,
  status,
  origin,
  species,
  gender,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div key={id} className={`${styles.flipCard} col-4 mb-4 position-relative`}>
      <div className={styles.cards}>
        <div className={styles.flipCardFront}>
          <img src={image} alt="" className={`${styles.img} img-fluid`} />
          <div className={styles.content}>
            <div className="fs-3 fw-bold mb-4">{name}</div>
            <div className="">
              <div className="fs-5 fw-bold">From:</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <Button variant="success" onClick={handleShowModal}>
            More Info
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} alt="" className="img-fluid" />
          <div className="fs-5 fw-bold">{status}</div>
          <div className="fs-5">{species}</div>
          <div className="fs-5">{gender}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status, origin, species, gender } = x;
      return (
        <Card
          key={id}
          id={id}
          name={name}
          image={image}
          location={location}
          status={status}
          origin={origin}
          species={species}
          gender={gender}
        />
      );
    });
  } else {
    display = "No Matches For Your Search";
  }

  return <div className="row">{display}</div>;
};

export default Cards;
