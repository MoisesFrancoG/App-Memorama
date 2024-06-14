import "./Card.css";
import Image from "../atoms/Image";
function Card({ image, animated, handleClick }) {
  return (
    <div
      className="card-block"
      onClick={() => !image.flipped && !animated && handleClick(image)}
    >
      <div
        className={`card-block-inner ${image.flipped && "card-block-flipped"}`}
      >
        <div className="card-block-front"></div>
        <div className="card-block-back">
          <Image image={image.image} />
        </div>
      </div>
    </div>
  );
}

export default Card;
