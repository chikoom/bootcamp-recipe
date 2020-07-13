import { Renderer } from '../views/Renderer.js'
import { APIManager } from '../models/APIManager.js'

const renderer = new Renderer()
const apiManager = new APIManager()

$('#btn-search').on('click', function() {
  const searchQuery = $('#input-ingredient').val()
  if(searchQuery.length > 0) 
    apiManager.getRecipes(searchQuery).then( result => {
      renderer.renderResults(result)
    })
  else 
    renderer.renderError(0)
})

$('#results').on('click', '.recipe-image', function() {
  console.log($(this).closest('.recipe-container').find('.ingredient-single').first().text())
})