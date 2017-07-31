import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { 
	Router, 
	//Route,
	//IndexRoute 
} from 'react-router'
import history from '@history/history'
import routes from 'routes'


import MainFrame from '@views/MainFrame'
import Notfound from '@views/common/Notfound'
import Test from '@views/common/Test'

export default class APP extends Component {
	render () {
		return (
				<div className='App'>
			  	<Router 
			  		history={history} 
			  		routes={routes} 
			  		>
			  		{/*
			  		<Route path="/" component={MainFrame}>
			  		  <IndexRoute component={Notfound} />
			  		  <Route path="/common/notfound" component={Notfound} />
			  		  <Route path="/common/test" component={Test}>
			  		    {
			  		    	//<Redirect from="messages/:id" to="/messages/:id" />
			  		    }
			  		  </Route>
			  		</Route>
			  		*/}
			  	</Router>
				</div>
		)
	}
}

APP.proptypes = {
}
