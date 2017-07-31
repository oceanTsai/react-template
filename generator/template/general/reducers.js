import { handleActions } from 'redux-actions'
import { 
	${prefix}_UPDATE_STATE,
	${prefix}_RESET_STATE,
	//${prefix}_COMMON_COMMON_ASKING,
	//${prefix}_COMMON_FAILURE,
	//${prefix}_yourMethodName_SUCCESS
} from '@constants/ActionTypes'

/**
 * @description 
 */

/**
 * 取得初始狀態或是用來reset
 */
const initialState = () => ({
	//將資料欄位定義於此
	errors: []
})

const state = {
	...initialState()
}

export default handleActions({
	[${prefix}_UPDATE_STATE] : (state, action) => ({
		...state,
		...action.data
	}),
	[${prefix}_RESET_STATE] : (state, action) => (
		initialState()
	),
	/* 
	// 通用請求處理
	[${prefix}_COMMON_COMMON_ASKING] : (state, action) => {
	  const { payload , type, errors } = action
	  return {
	    ...state,
	    type,
	  }
	},
	//通用錯誤處理
	[${prefix}_COMMON_FAILURE] : (state, action) => {
	  const { payload , type, errors } = action
	  return {
	    ...state,
	    type,
	    errors
	  }
	},
	// api 處理範例
	[${prefix}_yourMethodName_SUCCESS] : (state, action) => {
		const { payload , type, errors } = action
		return {
			...state,
			type,
			errors
		}
	}
	*/
}, state)