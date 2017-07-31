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

export const ajaxTest = (data) => ({
	type : [
		'NOTFOUND_COMMON_ASKING',
		'NOTFOUND_AJAXZTEST_SUCCESS', 
		'NOTFOUND_COMMON_FAILURE'
	],
	method : GET,
	uri : 'getjson.ashx', //高雄市政府公開資訊
	//data
})

export function twoAjaxTest() {
  return dispatch => {
    return dispatch(ajaxTest()).then(
    		(action)=>{
    			console.log('同步呼叫處理成功 action', action)
    			//success
    			//dispatch(youAjaxCall())
    		},
    		()=>{
    			//err
    		}
      )
  }
}
