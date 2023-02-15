const initialState = {
    posts: [
        {
            id: 1,
            title: 'Avtomobile'
        },

        {
            id: 2,
            title: 'Telefone'
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                posts: state.posts.filter((item) => item.id !== action.payload)
            }

        default:
            return state
    }
}