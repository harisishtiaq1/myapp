import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Button, TextField } from "@mui/material";
import { Form } from "react-bootstrap";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);
  const postData = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
      })
      .then((res) => console.log(title))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <Container>
        <Form>
          <Box
            sx={{ display: "flex", flexDirection: "column", mt: 2, padding: 2 }}
          >
            <TextField
              label="Title"
              id="title"
              sx={{ mb: 2 }}
              onChange={(e) => setTitle(e.target.value)}
            ></TextField>
            <TextField
              label="Body"
              id="body"
              onChange={(e) => setBody(e.target.value)}
            ></TextField>
            <Button onClick={postData} sx={{ mt: 2 }}>
              Post Data
            </Button>
          </Box>
        </Form>
      </Container>
      <div className="grid">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
