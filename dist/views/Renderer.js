const template = Handlebars.compile($(`#search-results-template`).html())
export class Renderer{
  renderResults(data){
    const serchHTML = template({ data })
    $('#results').empty().append(serchHTML)
    console.log(data)
  }
}