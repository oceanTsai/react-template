/**
 * @author 
 * @name
 * @description 用來產生一筆Action 
 *  gulp genAction --out home/myTest
 *  gulp genAction --out home/myTest  --tmp general
 */
 const replace = require('gulp-replace')	//處理檔案內容
 const rename = require("gulp-rename")
 const clc = require('cli-color')				//支援console.log 輸出顏色
 const error = clc.red.bold
 const notice = clc.blue
 const warn = clc.yellow
 const {getOutFilePath, getScrTmpFilePath, TYPE} = require('./common.js')

 module.exports = (gulp, prevInfo) => {
 	gulp.task('genAction', () => {
 		const { outInfo, tmpInfo } = prevInfo()		
 		const outFilePath = getOutFilePath(TYPE.ACTION,'src/redux/actions/',  outInfo)
 		if(outFilePath){
 			gulp.src(getScrTmpFilePath(TYPE.ACTION, tmpInfo))
			 			.pipe(replace(/\$\{prefix\}/g, outInfo.prefix))
			 			.pipe(rename(`${outInfo.fileName}.js`))
			 			.pipe(gulp.dest(outFilePath))
 		}else{
 			console.log(error('action 已經存在檔案無法建立！'))
 		}
 	})
 }