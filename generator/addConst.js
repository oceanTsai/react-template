/**
 * @author 
 * @name
 * @description 用來加入通用常數
 */

const path = require('path') 						//這是node的path解析
const replace = require('gulp-replace')	//處理檔案內容
const rename = require("gulp-rename") 	//改名
const clc = require('cli-color')				//支援console.log 輸出顏色
const error = clc.red.bold
const notice = clc.blue
const warn = clc.yellow
const { getOutFilePath } = require('./common.js')
const resolve = dir => ( path.join(__dirname, '..', dir))
const fs = require('fs')
const readline = require('readline')

module.exports = (gulp, prevInfo) => {
 	gulp.task('addConst', () => {
 		const { outInfo } = prevInfo()		
 			
 		const inputStream = fs.createReadStream(resolve('src/redux/constants/ActionTypes.js'))
 		const lineReader = readline.createInterface({ input: inputStream })
 		
 		var canModify = true
 		lineReader.on('line', function(line) {
 			if(line.match(`${outInfo.prefix}_UPDATE_STATE`) != null){
 				canModify = false
 				lineReader.close()
 			}
 		})

 		lineReader.on('close', function(){
 			//do back file
 			gulp.src(resolve('src/redux/constants/ActionTypes.js'))
 					.pipe(rename('history.js'))
 					.pipe(gulp.dest(resolve('src/redux/constants/')))
 			if(canModify){
 				 			gulp.src(resolve('src/redux/constants/ActionTypes.js'))
 				 					.pipe(replace(/\/\/\$\{const\}/g, 
 				 						`export const ${outInfo.prefix}_UPDATE_STATE = '${outInfo.prefix}_UPDATE_STATE'\n`
 				 						.concat(`export const ${outInfo.prefix}_RESET_STATE = '${outInfo.prefix}_RESET_STATE'\n`)
 				 						.concat(`//\${const}`)))
 				 					.pipe(gulp.dest(resolve('src/redux/constants/')))	
 			}
 		})
 	})
}

/**
 			gulp.src(resolve('src/redux/constants/ActionTypes.js'))
 					.pipe(replace(/\/\/\$\{const\}/g, 
 						`export const ${outInfo.prefix}_UPDATE_STATE = '${outInfo.prefix}_UPDATE_STATE'
export const ${outInfo.prefix}_UPDATE_STATE = '${outInfo.prefix}_UPDATE_STATE'
//\${const}
 						`))
 					.pipe(gulp.dest(resolve('src/redux/constants/')))	
*/