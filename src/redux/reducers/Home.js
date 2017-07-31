import { handleActions } from 'redux-actions'
import { 
	HOME_UPDATE_STATE,
	HOME_RESET_STATE,
	//HOME_COMMON_COMMON_ASKING,
	//HOME_COMMON_FAILURE,
	//HOME_yourMethodName_SUCCESS
} from '@constants/ActionTypes'

/**
 * @description 
 */

/**
 * 取得初始狀態或是用來reset
 */
const initialState = () => ({
	//將資料欄位定義於此
	errors: [],
	name: ''
})

const state = {
	...initialState()
}

export default handleActions({
	[HOME_UPDATE_STATE] : (state, action) => ({
		...state,
		...action.data
	}),
	[HOME_RESET_STATE] : (state, action) => (
		initialState()
	),
	/* 
	// 通用請求處理
	[HOME_COMMON_COMMON_ASKING] : (state, action) => {
	  const { payload , type, errors } = action
	  return {
	    ...state,
	    type,
	  }
	},
	//通用錯誤處理
	[HOME_COMMON_FAILURE] : (state, action) => {
	  const { payload , type, errors } = action
	  return {
	    ...state,
	    type,
	    errors
	  }
	},
	// api 處理範例
	[HOME_yourMethodName_SUCCESS] : (state, action) => {
		const { payload , type, errors } = action
		return {
			...state,
			type,
			errors
		}
	}
	*/
}, state)