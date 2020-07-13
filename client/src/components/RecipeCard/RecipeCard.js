import React from "react";
import { Card, Rating, Image, Responsive, Container } from "semantic-ui-react";

// const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;

const RecipeCard = (props) => {
  const recipes = props.recipes.map((recipe) => {
    let link = "/recipe/" + recipe.id
    return (
      <Card key={recipe.id} as="a" href={link}>
        <Image
          src={recipe.image}
          wrapped
          ui={false}
          target="_blank"
        />
        <Card.Content>
          <Card.Header>{recipe.title}</Card.Header>
          <Card.Meta>
            <span>
              {recipe.categories.map((category) => category.category + " ")}
            </span>
          </Card.Meta>
          <Card.Description>{recipe.description}</Card.Description>
          <Card.Meta>
            <span>Submitted by: {recipe.createdBy}</span>
          </Card.Meta>
        </Card.Content>
        {/* <Card.Content>{extra}</Card.Content> */}
      </Card>
    );
  });
  return (
    <Container>
      <Responsive maxWidth="780">
        <Card.Group itemsPerRow={1}>{recipes}</Card.Group>
      </Responsive>
      <Responsive minWidth="601">
        <Card.Group itemsPerRow={3}>{recipes}</Card.Group>
      </Responsive>
    </Container>
  );
};
export default RecipeCard;
