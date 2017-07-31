import { handleActions } from 'redux-actions'
import { 
	NOTFOUND_UPDATE_STATE,
	NOTFOUND_RESET_STATE,
} from '@constants/ActionTypes'

/**
 * @description 
 */

/**
 * 取得初始狀態或是用來reset
 */
const initialState = () => ({
	//將資料欄位定義於此
})

const state = {
	...initialState()
}

export default handleActions({
	[NOTFOUND_UPDATE_STATE] : (state, action) => ({
		...state,
		...action.data
	}),
	[NOTFOUND_RESET_STATE] : (state, action) => (
		initialState()
	),
	NOTFOUND_AJAXZTEST_SUCCESS(state, action){
		const { payload , type } = action
		return {
			...state,
			type
		}
	}
}, state)