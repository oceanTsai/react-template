/**
 * @author 
 * @name
 * @description 用來產生一筆View
 *  gulp genView --out home/myTest
 *  gulp genView --out home/myTest  --tmp general
 * 	gulp genView --out home/myTest  --tmp general --pure
 *	--tmp 指定使用的樣板 預設使用 general
 *	--pure 有加此參數會使用pure component當作view，預設會使用container當作view 
 */

const replace = require('gulp-replace')	//處理檔案內容
const rename = require("gulp-rename")
const clc = require('cli-color')				//支援console.log 輸出顏色
const error = clc.red.bold
const notice = clc.blue
const warn = clc.yellow
const {
	getOutFilePath, 
	getScrTmpFilePath, 
	TYPE
} = require('./common.js')

module.exports = (gulp, prevInfo) => {
	gulp.task('genView', () => {
		let elementType = process.argv.findIndex((param)=>(param == '--pure')) > 0 
			? TYPE.COMPONENTS
			: TYPE.CONTAINER

		const { outInfo, tmpInfo } = prevInfo()		
		const outFilePath = getOutFilePath(elementType, 'src/views/',  outInfo)

		if(outFilePath){
			gulp.src(getScrTmpFilePath(elementType, tmpInfo))
						.pipe(replace(/\$\{fileName\}/g, outInfo.fileName))
						.pipe(replace(/\$\{actionsFile\}/g, `${outInfo.dir}/${outInfo.fileName}`))
						.pipe(replace(/\$\{stateScope\}/g, outInfo.stateScope))
						.pipe(rename(`${outInfo.fileName}.jsx`))
						.pipe(gulp.dest(outFilePath))
		}else{
			console.log(error('view 已經存在檔案無法建立！'))
		}
	})
}