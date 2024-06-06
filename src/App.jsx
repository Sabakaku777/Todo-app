import light from "/images/day.jpg";
import { useState } from "react";
import Post from "./components/post";
import styled from "styled-components";
import nighted from "/images/Bitmap.jpg";

function App() {
  const [posts, setpost] = useState([
    {
      id: 1,
      content: "Jog around the park 3x",
    },
    {
      id: 2,
      content: "10 minutes meditation",
    },
    {
      id: 3,
      content: "Read for 1 hour",
    },
    {
      id: 4,
      content: "Pick up groceries",
    },

    {
      id: 5,
      content: "Complete Todo App on Frontend Mentor",
    },
  ]);

  const [content, setContent] = useState("");

  const addContent = function (e) {
    e.preventDefault();
    if (content.trim() !== "") {
      setpost([...posts, { content, id: Math.random() }]);
    }
  };

  const [day, setDay] = useState(true);

  const swtichColor = function () {
    setDay(!day);
  };

  return (
    <body style={{ backgroundColor: "red" }}>
      <BackGroundIMage>
        <img src={day ? light : nighted} />
        <Container>
          <div className="first">
            <h1 className="TODO">TODO</h1>

            <span onClick={swtichColor}>
              {day ? (
                <i class="fa-solid fa-moon"></i>
              ) : (
                <i class="fa-solid fa-sun"></i>
              )}
            </span>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Create a new todo"
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={addContent} className="add-btn">
              Add
            </button>
          </div>

          {posts.map((post) => (
            <Post
              post={post}
              key={post.id}
              posts={posts}
              setpost={setpost}
              day={day}
            />
          ))}
        </Container>
      </BackGroundIMage>
    </body>
  );
}

const BackGroundIMage = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 300px;
  }
`;

const Container = styled.div`
  width: 540px;
  position: absolute;
  top: 100px;
  .first {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    width: 100%;
    font-size: 20px;
    padding-block: 10px;
    padding-left: 20px;
  }
  .input-container {
    margin-top: 30px;
    margin-bottom: 25px;
    display: flex;
  }
  .add-btn {
    padding-inline: 20px;
    font-size: 18px;
    color: white;
    background-color: chartreuse;
    border: none;
  }
  input::placeholder {
    padding-left: 30px;
  }

  .fa-moon {
    font-size: 36px;
    color: white;
  }
  .fa-sun {
    font-size: 36px;
    color: black;
  }

  .TODO {
    width: 167px;
    height: 40px;
    top: 70px;
    color: white;
  }
`;

export default App;
