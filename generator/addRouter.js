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
 	gulp.task('addRouter', () => {
 		const { outInfo } = prevInfo()
		const viewPath = outInfo.dir ? `${outInfo.dir}/${outInfo.fileName}` : outInfo.fileName
		const inputStream = fs.createReadStream(resolve('src/routes/index.js'))
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
				//gulp.src(resolve('src/routes/index.js'))
				//		.pipe(rename('history.js'))
				//		.pipe(gulp.dest(resolve('src/routes/')))

				gulp.src(resolve('src/routes/index.js'))
						.pipe(replace(/\/\/\$\{import\}/g, `import ${outInfo.fileName} from '@views/${viewPath}'\n//\${import}`))
						.pipe(replace(/\/\/\$\{append\}/g,
							`{
				path: '/${viewPath.toLowerCase()}',
				component: ${outInfo.fileName}
			},
			//\${append}`
						))
						.pipe(gulp.dest(resolve('src/routes/')))
			}
		  //process.exit(0)
		})
 	})
 }