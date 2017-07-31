/**
 * @author 
 * @name
 * @description 用來修改router內容
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
 	gulp.task('combineRd', () => {
 		const { outInfo } = prevInfo()
		const viewPath = outInfo.dir ? `@reducers/${outInfo.dir}/${outInfo.fileName}` : `@reducers/${outInfo.fileName}`
		const inputStream = fs.createReadStream(resolve('src/redux/reducers/index.js'))
		const lineReader = readline.createInterface({ input: inputStream })
		var canModify = true
		lineReader.on('line', function(line) {
			if(line.match(viewPath) != null){
				canModify = false
				lineReader.close()
			}
		})

		lineReader.on('close', function() {
			if(canModify){
				//gulp.src(resolve('src/redux/reducers/index.js'))
				//		.pipe(rename('history.js'))
				//		.pipe(gulp.dest(resolve('src/redux/reducers/')))
				
				gulp.src(resolve('src/redux/reducers/index.js'))
						.pipe(replace(/\/\/\$\{import\}/g, `import ${outInfo.stateScope} from '${viewPath}'\n//\${import}`))
						.pipe(replace(/\/\/\$\{combine\}/g,` ${outInfo.stateScope},\n  //\${combine}`))
						.pipe(gulp.dest(resolve('src/redux/reducers/')))
			}
		  //process.exit(0)
		})
 	})
 }