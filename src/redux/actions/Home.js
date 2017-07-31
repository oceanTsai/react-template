import { GET, POST, PUT, DELETE } from '@constants/Method'
import { 
	HOME_UPDATE_STATE,
	HOME_RESET_STATE,
	//HOME_COMMON_ASKING, 
	//HOME_yourMethodName_SUCCESS, 
	//HOME_COMMON_FAILURE
} from '@constants/ActionTypes'

/**
 * 更新多筆欄位
 * 可以減少actions發送次數，
 * 但副作用是程式碼邏輯比較不清楚並且破壞更細粒畫的函式
 */
export const updateState = data => ({ 
	type : HOME_UPDATE_STATE,
	data
})

export const resetState = () => ({
	type : HOME_RESET_STATE
})

export const ajaxTest = (data) => ({
	type : [
		'HOME_COMMON_ASKING',
		'HOME_AJAXZTEST_SUCCESS', 
		'HOME_COMMON_FAILURE'
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