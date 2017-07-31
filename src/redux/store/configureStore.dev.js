import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import history from '@history/history'
import rootReducer from '@reducers/index'
import api from '@middlewares/api'

const reduxRouterMiddleware = routerMiddleware(history)

const logger = createLogger({ collapsed: false }) //logger 展開控制

const middlewares = [
	thunk,
	api,
	reduxRouterMiddleware,
	//logger
]

export default function configureStore (initialState) {
	const store = createStore(
		rootReducer, 
		initialState, 
		compose(
	  	applyMiddleware(...middlewares)
	  	//applyMiddleware()
	))

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index').default
			store.replaceReducer(nextRootReducer)
		})
	}
	return store
}
