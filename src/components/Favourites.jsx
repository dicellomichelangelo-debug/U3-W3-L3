import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.list);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Aziende Preferite</h1>
          <ListGroup>
            {favourites.map((fav) => (
              <ListGroup.Item
                key={fav._id}
                className="d-flex justify-content-between align-items-center"
              >
                <Link to={`/${fav.company_name}`}>{fav.company_name}</Link>
                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: fav })
                  }
                >
                  Rimuovi
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
