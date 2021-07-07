function loadingStartHandler () {
  document.querySelector('.loading').classList.add('loading-open')
}
function loadingOverHandler () {
  document.querySelector('.loading').classList.remove('loading-open')
}
export { loadingStartHandler, loadingOverHandler }
