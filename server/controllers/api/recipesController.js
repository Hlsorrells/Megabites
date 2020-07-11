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
    const dbCategoryArray = await db.Category.findAll({})
    const catList = dbCategoryArray.map(({ dataValues }) => { return { id: dataValues.id, category: dataValues.category } })
    const existing = [];
    categories.forEach(({ category }) => {
        const catIndex = catList.findIndex(c => c.category === category)
        if (catIndex >= 0) {
            existing.push(catList[catIndex].id);
        } else {
            //create new category and push to existing
            db.Category.create({ category })
                .then(existing.push(category))
        }
    })



    const dbIngredientArray = await db.Ingredient.findAll({})

    // Create the entry in Recipe table    
    // await db.Recipe.create(
    //     { title, image, description, prepTime, cookTime, servings, directions, categories, ingredients, createdBy: req.user.username },
    //     { include: [{ model: db.Category, as: "categories" }, { model: db.Ingredient, as: "ingredients" }] }
    // )
    // .then(
    //     db.User.setRecipes([recipe.id])
    // )
    // .then(recipe => res.json(recipe))
    // .catch(err => res.json(err));

});

module.exports = recipesController;
