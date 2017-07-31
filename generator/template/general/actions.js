import { GET, POST, PUT, DELETE } from '@constants/Method'
import { 
	${prefix}_UPDATE_STATE,
	${prefix}_RESET_STATE,
	//${prefix}_COMMON_ASKING, 
	//${prefix}_yourMethodName_SUCCESS, 
	//${prefix}_COMMON_FAILURE
} from '@constants/ActionTypes'

/**
 * 更新多筆欄位
 * 可以減少actions發送次數，
 * 但副作用是程式碼邏輯比較不清楚並且破壞更細粒畫的函式
 */
export const updateState = data => ({ 
	type : ${prefix}_UPDATE_STATE,
	data
})

export const resetState = () => ({
	type : ${prefix}_RESET_STATE
})

/*
export const ajaxDemo = (data) => ({
	type : [
		${prefix}_COMMON_ASKING, 
		${prefix}_yourMethodName_SUCCESS, 
		${prefix}_COMMON_FAILURE
	],
	method : GET,
	uri : '',
	data
})
*/