import Vuex from 'vuex';
import GameSettings from './GameSettings';
import GameEngine from './GameEngine';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      GameSettings,
      GameEngine,
    }
  })
}

export default createStore

