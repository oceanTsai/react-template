import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import notfound from '@reducers/common/Notfound'
import test from '@reducers/common/Test'
import home from '@reducers/Home'
//${import}

export default combineReducers({
	 routing: routerReducer,
   notfound,
   test,
   home,
  //${combine}
})
