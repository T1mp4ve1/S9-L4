import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
// import CommentsListTest from "./components/CommentsListTest";

import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <CommentsListTest /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
