import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Aggiungi questi

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.list);
  const isFav = favourites.some((fav) => fav._id === data._id);

  return (
    <Row
      className="mx-0 mt-3 p-3 bg-secondary"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link
          to={`/${data.company_name}`}
          className="text-white text-decoration-none"
        >
          {data.company_name}
        </Link>
      </Col>
      <Col xs={9} className="d-flex align-items-center">
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="text-white fw-bold flex-grow-1"
        >
          {data.title}
        </a>
        <i
          className={`bi ${isFav ? "bi-heart-fill" : "bi-heart"} text-white`}
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isFav) {
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data,
              });
            } else {
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data,
              });
            }
          }}
        ></i>
      </Col>
    </Row>
  );
};

export default Job;
