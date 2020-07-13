import { Renderer } from '../views/Renderer.js'
import { APIManager } from '../models/APIManager.js'

const renderer = new Renderer()
const apiManager = new APIManager()

$('#btn-serach').on('click', function(){
  const searchQuery = $('#input-ingredient').val()
  if(searchQuery.length > 0){
    apiManager.getRecipes(searchQuery).then( result => {
      if(result.length === 0){
        alert('No results')
      } else {
        renderer.renderResults(result)
      }
    })
  } else {
    alert('Please enter ingredient')
  }
})