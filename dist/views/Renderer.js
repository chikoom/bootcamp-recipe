const template = Handlebars.compile($(`#search-results-template`).html())
export class Renderer{
  renderResults(data){
    $('#input-search').val('')
    const serchHTML = template({ data })
    $('#results').empty().append(serchHTML)
  }
}