import axios from 'axios'
import { GET, POST, PUT, DELETE } from '@constants/Method'
export default store => next => action => {
	const { dispatch } = store
	const {
		type,   //action的種類
		method, //http request type
		uri,    //api對應路徑
		data,   //要發送的資料
	} = action

	if(type.hasOwnProperty('length') && type.length > 0  && typeof type != 'string'){
		const [askinType, successType, failureType] = type
		
		dispatch({
			type : askinType,
			error : [],
			payload : {}
		})
		
		const baseConfig = {
			method : method,
			url : `${API_HOST}/${uri}`
		}

		let config

		if(data){
			switch(method){
				case GET :
					config = {
						...baseConfig,
						params : {
							...data
						}
					}
				default :
				config = {
					...baseConfig,
					data : data
				}
			} 
		}else{
			config = {
				...baseConfig
			}
		}

		const axiosPromise = axios(config)
		.then( res => (
			dispatch({
				type: successType,
				errors : [],
				payload: res
			})
		))
		.catch( err => (
			dispatch({
				type: failureType,
				errors : [{message: 'something error!'}],
				payload: err
			})
		))
		return axiosPromise
	}else{
		return next(action)   
	}
}
