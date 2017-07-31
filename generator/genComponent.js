/**
 * @author 
 * @name
 * @description 用來產生一個Component
 *  gulp genComponent --out home/myTest  --tmp general
 *  gulp genComponent --out home/myTest
 */

const replace = require('gulp-replace')	//處理檔案內容
const rename = require("gulp-rename")
const clc = require('cli-color')				//支援console.log 輸出顏色
const error = clc.red.bold
const notice = clc.blue
const warn = clc.yellow
const {getOutFilePath, getScrTmpFilePath, TYPE} = require('./common.js')

module.exports = (gulp, prevInfo) => {
	gulp.task('genComponent', () => {
		const elementType = TYPE.COMPONENTS
		const { outInfo, tmpInfo } = prevInfo()		
		const outFilePath = getOutFilePath(elementType, 'src/components/',  outInfo)

		if(outFilePath){
			gulp.src(getScrTmpFilePath(elementType, tmpInfo))
						.pipe(replace(/\$\{fileName\}/g, outInfo.fileName))
						.pipe(rename(`${outInfo.fileName}.jsx`))
						.pipe(gulp.dest(outFilePath))
		}else{
			console.log(error('components 已經存在檔案無法建立！'))
		}
	})
}