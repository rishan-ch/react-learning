//excercise from react
export default function RecipeList() {
    const recipes = [{
        id: 'greek-salad',
        name: 'Greek Salad',
        ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
      }, {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
      }, {
        id: 'hummus',
        name: 'Hummus',
        ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
      }];

    const recipeList = recipes.map(recipe => 
      <div>
        <h2>{recipe.name}</h2>
        <ul>
            {recipe.ingredients.map(ing=>
            <li>{ing}</li>)}
        </ul>
      </div>);
  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}


// export default function List(){

//     //structuring the data 
//     //array of objects
//     const peoples =[
//         {id : 0,
//             fname : "rishan",
//             college : "islington",
//         },
//         {id : 1,
//             fname : "ashish",
//             college : "islington",
//         },
//         {id : 2,
//             fname : "shreyash",
//             college : "trinity",
//         },
//         {id : 3,
//             fname : "swagat",
//             college : "trinity",
//         }
//     ];
    
//     const islington = peoples.filter(students => students.college === "trinity");
//     const listOfpeople = islington.map(addPeople => 
//         <ul>
//             <li>Name : {addPeople.fname} College : {addPeople.college}</li>
//         </ul>
//     );

//     return listOfpeople;
// }