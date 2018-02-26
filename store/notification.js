export const state = () => ({ style: 'notification ', message: '' })

export const mutations = {
    show(state, message) {
        state.style += ` ${message.style}`
        state.message = message.text
    },
    clear(state) {
        state.style = 'notification'
        state.message = ''
    }
}