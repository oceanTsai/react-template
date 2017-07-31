import MainFrame from '@views/MainFrame'
import Home from '@views/Home'
import Notfound from '@views/common/Notfound'
import Test from '@views/common/Test'
//${import}

export const notfound = `${PRE_FIX}/notfound'`
export const test = `${PRE_FIX}/test`

/**
 * @author 
 * @name
 * @description 請勿刪除 錢字號註解
 */

export default [
	{
		path: PRE_FIX ? PRE_FIX : '/',
		component: MainFrame,
		indexRoute: {
			component: Home
		},
		childRoutes: [
			{
				path: notfound,
				component: Notfound
			},
			{
				path: test,
				component: Test
			},
			//${append}
		]
	}
]