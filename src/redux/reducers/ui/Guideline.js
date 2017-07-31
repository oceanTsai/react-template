import { handleActions } from 'redux-actions'
import { 
	GUIDELINE_UPDATE_STATE,
	GUIDELINE_RESET_STATE,
	//GUIDELINE_COMMON_COMMON_ASKING,
	//GUIDELINE_COMMON_FAILURE,
	//GUIDELINE_yourMethodName_SUCCESS
} from '@constants/ActionTypes'

/**
 * @description 
 */

/**
 * 取得初始狀態或是用來reset
 */
const initialState = () => ({
	//將資料欄位定義於此
	errors : []
})

const state = {
	...initialState()
}

export default handleActions({
	[GUIDELINE_UPDATE_STATE] : (state, action) => ({
		...state,
		...action.data
	}),
	[GUIDELINE_RESET_STATE] : (state, action) => (
		initialState()
	),
	/* 
	// 通用請求處理
	[GUIDELINE_COMMON_COMMON_ASKING] : (state, action) => {
	  const { payload , type, errors } = action
	  return {
	    ...state,
	    type,
	  }
	},
	//通用錯誤處理
	[GUIDELINE_COMMON_FAILURE] : (state, action) => {
	  const { payload , type, errors } = action
	  return {
	    ...state,
	    type,
	    errors
	  }
	},
	// api 處理範例
	[GUIDELINE_yourMethodName_SUCCESS] : (state, action) => {
		const { payload , type, errors } = action
		return {
			...state,
			type,
			errors
		}
	}
	*/
}, state)