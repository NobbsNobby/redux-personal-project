// Core
import { createStore } from "redux";

//Roots
import { rootReducer } from "./rootReducer";

// Middleware
import { enhancedStore, sagaMiddleware } from "./middleware";

import { rootSaga } from "./rootSaga";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);
