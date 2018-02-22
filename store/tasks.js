export const state = () => ({ list: [], counter: 0 })

export const mutations = {
    add(state, task) {
        state.list.push({
            id: ++state.counter,
            text: task,
            done: false
        })
    },
    remove(state, task) {
        state.list.splice(state.list.indexOf(task), 1)
    },
    toggle(state, done) {
        done = !done
            // if (done) {

        // }
    }
}