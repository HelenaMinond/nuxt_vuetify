//state 
export const state = () => ({
  personajes: []
})

//mutations
export const mutations = {
  showData(state, payload) {
    state.personajes = payload;
  }
}

//actions
export const actions = {
  async getData ({ commit }) {
    const url = 'https://rickandmortyapi.com/api/character';
    try {
      const data = await this.$axios.$get(url)
      const array = data.results;
      //console.log(array);
      commit("showData", array);
    } catch (error) {
      console.log(error);
    }
  }
}