const recipesController = require("express").Router();

const db = require("../../models");
const { JWTVerifier } = require("../../lib/passport");
const jwt = require("jsonwebtoken");

// Route to retrieve all recipes in db
recipesController.get("/all", (req, res) => {
    db.Recipe.findAll({}, { include: [{ model: db.Category, as: "categories" }, { model: db.Ingredient, as: "ingredients" }] })
        .then(recipe => res.json(recipe))
        .catch(err => res.json(err));
});

// Route to create a new recipe
recipesController.post("/", JWTVerifier, async (req, res) => {
    const { title, image, description, prepTime, cookTime, servings, directions, categories, ingredients } = req.body;

    // Validate categories
    const dbCategoryArray = await db.Category.findAll({});
    const catList = dbCategoryArray.map(({ dataValues }) => { return { id: dataValues.id, category: dataValues.category } });
    const existing = [];
    categories.forEach(({ category }) => {
        // console.log(category)
        const catIndex = catList.findIndex(c => c.category === category)
        if (catIndex >= 0) {
            existing.push(catList[catIndex].id);
        } else {
           //create new category and push to existing
           db.Category.create({category})
           .then(res => existing.push(res.id))
           .catch(err => console.log(err))
        }
    });
    console.log(existing);

    // Validate ingredients
    // const dbIngredientsArray = await db.Ingredient.findAll({});
    // const userIngredients = dbIngredientsArray.map(({ dataValues }) => { return { id: dataValues.id, ingredient: dataValues.ingredient } });
    // const recipeIngredients = [];
    // ingredients.forEach(({ ingredient }) => {
    //     const ingrIndex = userIngredients.findIndex(c => c.ingredient === ingredient);
    //     if (ingrIndex >= 0) {
    //         // Push existing ingredients into the array
    //         recipeIngredients.push(userIngredients[ingrIndex].id);
    //     } else {
    //         // Create new ingredient and push into the array
    //         db.Ingredient.create({ ingredient })
    //         .then(recipeIngredients.push(ingredient));
    //     }
    // })

    // // Create the entry in Recipe table    
    // await db.Recipe.create(
    //     { title, image, description, prepTime, cookTime, servings, directions, createdBy: req.user.username },
    // )
    // // Create association between categories and recipe
    // .then(
    //     await db.User_Recipes.bulkCreate([])
    // )
    // // Create association between ingredients and recipe
    // // Create association between user and recipe
    // // Return the finished recipe back to the client
    // .then(recipe => res.json(recipe))
    // .catch(err => res.json(err));

});

module.exports = recipesController;
