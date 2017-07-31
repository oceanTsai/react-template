/**
 * @author 
 * @name
 * @description genCode 入口程式
 *  gulp genPage --out home/myTest
 *  gulp genPage --out home/myTest  --tmp general
 */
const pathParse = require('path-parse')		//路徑解析器
const minimist = require('minimist')			//處理 cli argv
const clc = require('cli-color')					//支援console.log 輸出顏色
const error = clc.red.bold
const notice = clc.blue
const warn = clc.yellow
const genAction = require('./genAction.js')
const genReducers = require('./genReducers.js')
const genView = require('./genView.js')
const genComponent = require('./genComponent.js')
const genContainer = require('./genContainer.js')
const addRouter = require('./addRouter.js')
const addConst = require('./addConst.js')
const combineRd = require('./combineRd.js')
const genHelp = require('./genHelp.js')

//檢查路徑規格
const checkPath = (path) => {
	//let patt = /^[a-zA-Z][a-zA-z0-9\/]*$/g
	//return patt.test(path)
	return true
}

//第一次轉大寫
const firstCharUpperCase = str => (
	str.replace(/^([a-z])/g, (match, $1) => (
		$1 ? $1.toUpperCase()  : ''
	))
)

//第一字轉小寫
const firstCharLowerCase = str => (
	str.replace(	/^([A-Z])/g, (match, $1) => (
		$1 ? $1.toLowerCase()  : ''
	))
)

//取得列舉常數
const pagePrefix = str => (
	str.replace(/([a-z])([A-Z])/g, (match, $1, $2) => (
		$1 ? `${$1}_${$2}` : ''
	)).toUpperCase()
)


const extractFilePath = (filePath, emptyMsg='') => {
	if(filePath && typeof filePath != 'boolean'){
		if(checkPath(filePath)){
			const pathInfo =  pathParse(filePath.toString())
			const { dir, base, ext, name} = pathInfo
			return Object.assign({
				fileName : firstCharUpperCase(name),
				prefix : pagePrefix(name),
				stateScope : name.toLowerCase()
			}, pathInfo)
		}else{
			console.log(error('路徑格式錯誤，格式如： stock/buy'))
		}
	}else{
		console.log(error('請輸入目標路徑，例如 gulp genPage --out home/index'));
	}
}

const extractTmpPath = filePath => {
	if(filePath && typeof filePath != 'boolean'){
		if(checkPath(filePath)){
			return pathParse(filePath.toString())
		}else{
			console.log(error('路徑格式錯誤，格式例如 gulp genPage --out home/index --tmp general'))
		}
	}
}

const prevInfo = () => {
	let argv = minimist(process.argv.slice(2))
	return {
		outInfo : extractFilePath(argv['out']),
		tmpInfo : extractTmpPath(argv['tmp'])	
	}
}

module.exports = gulp => {
	genAction(gulp, prevInfo)
	genReducers(gulp, prevInfo)
	genView(gulp, prevInfo)
	genComponent(gulp, prevInfo)
	genContainer(gulp, prevInfo)
	addRouter(gulp, prevInfo)
	addConst(gulp, prevInfo)
	combineRd(gulp, prevInfo)
	genHelp(gulp)
	gulp.task('genPage', ['genView', 'genAction', 'genReducers', 'addRouter', 'addConst', 'combineRd'], function() {
		//console.log(resolve('src/components'))
	});
};