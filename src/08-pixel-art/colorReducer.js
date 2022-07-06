export const initialState = '#000';

export const changeColorAction = (color) => {
    return{
        type:"CHANGE_COLOR",
        color: color
    }
}

export const colorReducer = (state, action) => {
    let newColor;
    switch (action.type) {
        case 'CHANGE_COLOR':
            newColor = action.color;
            break;
        default:
            newColor = state;
            break;
    }
    return newColor
}