const template = Handlebars.compile($(`#search-results-template`).html())
const ERRORS = {
  0: 'Please Enter Ingredient To Search',
  1: 'Sorry - No Results'
}
export class Renderer{
  renderResults(data) {
    $('#input-ingredient').val('')
    if (data.length === 0) this.renderError(1)
    else $('#results').empty().append(template({ data }))
  }
  renderError(errNumber) {
    $('#results').empty().append($(`<p class="error">${ERRORS[errNumber]}</p>`))
  }
}