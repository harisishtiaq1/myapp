import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Button,
  TextField,
  Grid,
  Typography,
} from "@mui/material";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
      console.log("data here", res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  const handleData = (event) => {
    let temp = {
      title: title,
      body: body,
    };
    let newArray = [...myData];
    newArray.push(temp);
    setMyData(newArray, );
    console.log("onSubmit", myData);
  };
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Container>
        <Typography variant="h5" component="h1">
          Axios Post and Get data
        </Typography>
        {isError !== "" && <h2>{isError}</h2>}

        <Grid container item xs={8}>
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
            <Button
              variant="contained"
              onClick={(event) => handleData(event)}
              sx={{ mt: 2 }}
            >
              Post Data
            </Button>
          </Box>
        </Grid>
      </Container>
      <div className="grid">
        {myData.map((post) => {
          const { body, title } = post;
          return (
            <div className="card">
              <h2>{title.toUpperCase()}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
