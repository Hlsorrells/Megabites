import React from "react";
import {Card, Rating, Image} from "semantic-ui-react"


const extra = <Rating icon="star" defaultRating={3} maxRating={5} />

const RecipeCard = () => (
    <Card>
      {/* This cards <a> link needs to be routing the user to the appropriate recipe which will be displayed on the FullRecipe page */}
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
)

export default RecipeCard;

// const CardLayout = (props) => {
//   const recipeArea = props.recipes.map(recipe => {
//     return(
//       <Card>
//           <Image
//             src={require("../../assets/images/burger1.jpg")}
//             wrapped
//             ui={false}
//             as="a"
//             href="https://www.thewholesomedish.com/the-best-classic-burger/"
//             target="_blank"
//           />
//           <Card.Content>
//             <Card.Header>{recipe.title}</Card.Header>
//             <Card.Meta>
//               <span>{recipe.category}</span>
//             </Card.Meta>
//             <Card.Description>
//               {recipe.description}
//             </Card.Description>
//             <Card.Meta>
//               <span>
//                 Submitted by: <strong>{recipe.createdBy}</strong>
//               </span>
//             </Card.Meta>
//           </Card.Content>
//           <Card.Content>{extra}</Card.Content>
//         </Card>
//     )
//   })

//   return (
//     <Container className="test">
//       <Card.Group className="background" itemsPerRow={3}>
//         {recipeArea}
//       </Card.Group>
//     </Container>
//   );
// };

// export default CardLayout;