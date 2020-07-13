export class APIManager{
  getRecipes(query){
    return $.get(`/recipes/${query}`)
  }
}