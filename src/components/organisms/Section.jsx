import Card from "../molecules/Card_box";
import "./Section.css";

function Section({ imagenes, animated, handleClick }) {
  return (
    <>
      <div className="board">
        {imagenes.map((image, i) => {
          return (
            <Card
              key={`${i}_${image.image}`}
              image={image}
              animated={animated}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}

export default Section;
