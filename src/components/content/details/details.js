import React from "react";
import SajalImage from "../../assets/Self.png";

const Details = () => {
  return (
    <>
      <div className="details">
        <div className="details-image">
          <img src={SajalImage} alt="Sajal Birla" />
        </div>
        <div className="details-description">
          <div className="details-description-header">About Me </div>
          <div className="details-description-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
