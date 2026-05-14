import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FROM_FAVOURITE } from "../redux/actions/index";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list);
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
                    dispatch({
                      type: REMOVE_FROM_FAVOURITE,
                      payload: fav._id,
                    })
                  }
                >
                  Rimuovi
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-3">
            <Link to="/" className="btn btn-primary">
              Torna alla Home
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
