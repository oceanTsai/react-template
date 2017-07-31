import { GET, POST, PUT, DELETE } from '@constants/Method'
import { 
	GUIDELINE_UPDATE_STATE,
	GUIDELINE_RESET_STATE,
	//GUIDELINE_COMMON_ASKING, 
	//GUIDELINE_yourMethodName_SUCCESS, 
	//GUIDELINE_COMMON_FAILURE
} from '@constants/ActionTypes'

/**
 * 更新多筆欄位
 * 可以減少actions發送次數，
 * 但副作用是程式碼邏輯比較不清楚並且破壞更細粒畫的函式
 */
export const updateState = data => ({ 
	type : GUIDELINE_UPDATE_STATE,
	data
})

export const resetState = () => ({
	type : GUIDELINE_RESET_STATE
})

/*
export const ajaxDemo = (data) => ({
	type : [
		GUIDELINE_COMMON_ASKING, 
		GUIDELINE_yourMethodName_SUCCESS, 
		GUIDELINE_COMMON_FAILURE
	],
	method : GET,
	uri : '',
	data
})
*/