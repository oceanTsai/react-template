import { handleActions } from 'redux-actions'
import { 
	TEST_UPDATE_STATE,
	TEST_RESET_STATE,
} from '@constants/ActionTypes'

/**
 * @description 
 */

/**
 * 取得初始狀態或是用來reset
 */
const initialState = () => ({
  //將資料欄位定義於此
  test : ''
})

const state = {
  ...initialState()
}

export default handleActions({
  [TEST_UPDATE_STATE] : (state, action) => ({
    ...state,
    ...action.data
  }),
  [TEST_RESET_STATE] : (state, action) => (
  	initialState()
  )
}, state)