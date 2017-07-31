/**
 * @author
 * @name 
 * @class
 * @description
 */

import { useRouterHistory } from 'react-router'
import { createHistory }    from 'history'

const history = useRouterHistory(createHistory)()

// A singleton history object for easy API navigation
export default history
