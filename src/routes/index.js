import MainFrame from '@views/MainFrame'
import Notfound from '@views/common/Notfound'
import Test from '@views/common/Test'
import Guideline from '@views/ui/Guideline'
//${import}

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
			component: Guideline
		},
		childRoutes: [
			{
				path: `${PRE_FIX}/notfound'`,
				component: Notfound
			},
			{
				path: `${PRE_FIX}/test`,
				component: Test
			},
			{
				path: `${PRE_FIX}/guideline`,
				component: Guideline
			},
			//${append}
		]
	}
]