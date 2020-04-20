document.addEventListener("DOMContentLoaded", e => {
    uiService.registerListeners()
    uiService.initialAction(state.initalCities,units.unit)
  })