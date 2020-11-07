import { createStore , applyMiddleware, compose} from "redux";
import Reducers from "../Reducers";
import createSagaMiddleware from 'redux-saga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    return createStore(
        Reducers,
        compose(
            applyMiddleware(sagaMiddleware),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
};

const myStore = configureStore();

export default myStore;