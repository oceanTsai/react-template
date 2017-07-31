/**
 * @author 
 * @name
 * @description
 */
const path = require('path') 						//這是node的path解析
const isExists = require('file-exists') //檢查檔案存在與否
const replace = require('gulp-replace')	//處理檔案內容
const rename = require("gulp-rename")
const clc = require('cli-color')				//支援console.log 輸出顏色
const error = clc.red.bold
const notice = clc.blue
const warn = clc.yellow

const getType = () => ({
	ACTION 		 : 'actions',
	REDUCERS 	 : 'reducers',
	COMPONENTS : 'components',
	CONTAINER  : 'container'
})

const getExt = () => ({
	[TYPE.ACTION] 		: '.js',
	[TYPE.REDUCERS] 	: '.js',
	[TYPE.COMPONENTS] : '.jsx',
	[TYPE.CONTAINER] 	: '.jsx'
})

const TYPE = getType()
const EXT = getExt()

const resolve = dir => ( path.join(__dirname, '..', dir))


//取得樣板路徑，若找不著會使用預設樣板
const getScrTmpFilePath = (type, tmpInfo) => {
	const ext = EXT[type]
	const defaultPath = resolve(`generator/template/general/${type}${ext}`)
	if(!tmpInfo){
		return defaultPath 
	}else{
		let queryPath = tmpInfo.dir == '' ? tmpInfo.name  : `${tmpInfo.dir}/${tmpInfo.name}`
		return isExists.sync(`generator/template/${queryPath}/${type}${ext}`)
			? resolve(`generator/template/${queryPath}/${type}${ext}`) 
			: defaultPath
	}
}

//取得輸出路徑
const getOutFilePath = (type, prefixDir, outInfo) => {
	const ext = EXT[type]
	const hasDir = outInfo.dir == '' 
	const checkPath = hasDir
		? `${prefixDir}${outInfo.fileName}${ext}`
		: `${prefixDir}${outInfo.dir}/${outInfo.fileName}${ext}`
	
	return isExists.sync(checkPath)
		? null
		: hasDir 
			? prefixDir
			: `${prefixDir}${outInfo.dir}/`
	
}

module.exports = {
	getOutFilePath,
	getScrTmpFilePath,
	TYPE : getType()
};