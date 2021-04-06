import { INCREMENT, DECREMENT, RESET, ADD_EVENT, ALL_RESET, CYOI_RESET, KORE_RESET, AHO, CLICK } from '../actions/index'
import axios from 'axios';
import { useEffect } from 'react'

const reducer = (state = [], action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { ...state, count: 0 };
        case ADD_EVENT:
            const event = {
                check: action.check, title: action.title, body: action.body, comment: action.comment
            };
            const id = state.length + 1;
            return [...state, { id, ...event }];
        case ALL_RESET:
            return [];//← return [...state.length = ""];
        case AHO:
            const ahoninaru = state.count + 1;
            if (ahoninaru % 3 == 0) {
                return { count: state.count + 11 };
            }
            else {
                if (ahoninaru > 13) {
                    return { count: state.count - 9 };
                }
                else {
                    return { count: state.count + 1 };
                }
            };

        case CYOI_RESET:
            console.log(state, "クリック前");
            console.log(action.id, "クリックしたid");
            const newdata = state.filter(state => {
                return state.id !== action.id;
            });
            console.log(newdata);
            return newdata;

        // case KORE_RESET:
        //     console.log(state, "クリック前");
        //     const newkore = state.filter(state => {
        //         return state.id !== state.checked;//?????????
        //     });
        //     console.log(newkore, "newkore");
        //     return newkore;

        default:
            return state;

    }
}
export default reducer;