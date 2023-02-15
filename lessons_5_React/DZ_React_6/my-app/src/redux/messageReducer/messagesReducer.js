const initialState = {
    messages: []
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'delete':
            return {
                ...state,
                messages: state.messages.filter((message) => message.id !== action.payload)
            }

        case 'add':
            return {
                ...state,
                message: [...state.messages, action.payload]
            }

        default:
            return state
    }
}