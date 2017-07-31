import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import history from '@history/history'
import rootReducer from '@reducers/index'
import api from '@middlewares/api'

const reduxRouterMiddleware = routerMiddleware(history)

const middlewares = [
	thunk,
	api,
	reduxRouterMiddleware
]

export default function configureStore (initialState) {
	const store = createStore(
		rootReducer, 
		initialState, 
		compose(
	  	applyMiddleware(...middlewares)
	  	//applyMiddleware()
	))
	return store
}
