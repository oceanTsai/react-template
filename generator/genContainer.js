/**
 * @author 
 * @name
 * @description 用來產生一個Container
 *  gulp genContainer --out home/myTest  --tmp general
 *  gulp genContainer --out home/myTest
 */

const replace = require('gulp-replace')	//處理檔案內容
const rename = require("gulp-rename")
const clc = require('cli-color')				//支援console.log 輸出顏色
const error = clc.red.bold
const notice = clc.blue
const warn = clc.yellow
const {getOutFilePath, getScrTmpFilePath, TYPE} = require('./common.js')

module.exports = (gulp, prevInfo) => {
	gulp.task('genContainer', () => {
		const elementType = TYPE.CONTAINER
		const { outInfo, tmpInfo } = prevInfo()		
		const outFilePath = getOutFilePath(elementType, 'src/container/',  outInfo)
		if(outFilePath){
			gulp.src(getScrTmpFilePath(elementType, tmpInfo))
						.pipe(replace(/\$\{fileName\}/g, outInfo.fileName))
						.pipe(replace(/\$\{actionsFile\}/g, `${outInfo.dir}/${outInfo.fileName}`))
						.pipe(replace(/\$\{stateScope\}/g, outInfo.stateScope))
						.pipe(rename(`${outInfo.fileName}.jsx`))
						.pipe(gulp.dest(outFilePath))
		}else{
			console.log(error('container 已經存在檔案無法建立！'))
		}
	})
}