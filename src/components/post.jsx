import styled from "styled-components";

export default function Post({ post, posts, setpost, day }) {
  const handleDelete = function () {
    const clone = posts;
    const deleteIndex = posts.findIndex((item) => item.id == post.id);
    console.log(deleteIndex);
    clone.splice(deleteIndex, 1);
    setpost([...clone]);
  };
  return (
    <Container>
      <ContentContainer
        style={{
          backgroundColor: day ? "white" : "black",
          color: day ? "black" : "white",
          border: day ? "solid 1px black" : "solid 1px white",
        }}
      >
        <h1>
          {post.content}{" "}
          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </h1>
      </ContentContainer>
    </Container>
  );
}

const ContentContainer = styled.div`
  border-bottom: solid 1px black;
  padding-inline: 30px;
  padding-block: 15px;

  h1 {
    font-family: Josefin Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .delete-btn {
    text-align: right;
    background-color: red;
    border: none;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    text-align: center;
  }
`;

const Container = styled.div`
  border: solid 1px black;
`;
