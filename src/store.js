import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 0,
        task: "Task one",
        done: false
      },
      {
        id: 1,
        task: "Task two",
        done: false
      },
      {
        id: 2,
        task: "Task three",
        done: false
      }
    ]
  },
  getters: {
    doneTasks (state) {
      return state.tasks.filter(task => task.done);
    }
  },
  mutations: {
    newTask (state, task) {
      state.tasks.push({
        id: state.tasks.length,
        task,
        done: false
      });
    },
    removeTask (state, id) {
      state.tasks = state.tasks.filter(task => task.id != id);
    },
    toggleDone (state, id) {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) task.done = !task.done;
        return task;
      });
    }
  }
});
