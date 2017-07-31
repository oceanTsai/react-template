import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from '@redux/store/configureStore'
import App from './App'
import '@css/semantic/semantic.min.css'
const store = configureStore()

const renderApp = (app) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
			{app}
			</Provider>			
		</AppContainer>,
		document.getElementById('root')
	)
}

renderApp(<App></App>)

if (module.hot) {
	module.hot.accept('./App', () => renderApp(<App></App>))
}

/*
if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./APP').default; // eslint-disable-line
		renderApp(<NextApp/>);
	})
}
*/
