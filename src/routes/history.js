import MainFrame from '@views/MainFrame'
import Notfound from '@views/common/Notfound'
import Test from '@views/common/Test'
//${import}

/**
 * @author 
 * @name
 * @description 請勿刪除 錢字號註解
 */

export default [
	{
		path: '/',
		component: MainFrame,
		indexRoute: {
			component: Notfound
		},
		childRoutes: [
			{
				path: '/common/notfound',
				component: Notfound
			},
			{
				path: '/common/test',
				component: Test
			},
			//${append}
		]
	}
]