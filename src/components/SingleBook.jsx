import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{
            border: this.state.selected
              ? "3px solid rgb(178, 178, 178)"
              : "3px solid rgba(0, 0, 0, 0)",
          }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
          </Card.Body>
          {this.state.selected && (
            <CommentArea
              asin={book.asin}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </Card>
      </>
    );
  }
}

export default SingleBook;
