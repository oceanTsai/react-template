import { GET, POST, PUT, DELETE } from '@constants/Method'
import { 
	NOTFOUND_UPDATE_STATE,
	NOTFOUND_RESET_STATE,
} from '@constants/ActionTypes'

/**
 * 更新多筆欄位
 * 可以減少actions發送次數，
 * 但副作用是程式碼邏輯比較不清楚並且破壞更細粒畫的函式
 */
export const updateState = data => ({ 
	type : NOTFOUND_UPDATE_STATE,
	data
})

export const resetState = () => ({
	type : NOTFOUND_RESET_STATE
})