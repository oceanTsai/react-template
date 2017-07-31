/**
 * @author 
 * @name
 * @description
 *  gulp genHelp
 */
 const clc = require('cli-color')
 const cli = clc.blue
 const warn = clc.yellow
 const notice = clc.green
 const ex = clc.magenta

 module.exports = (gulp) => {
 	gulp.task('genHelp', () => {
 		console.log(warn('------------------------------------------------------------'))
 		console.log(warn('			gen code 說明	'))
 		console.log(warn('------------------------------------------------------------'))
 		console.log(notice('產生一個頁面使用 genPage'))
 		console.log(notice('--out 	用於指定路產出徑名稱，必填'))
 		console.log(notice('--tmp 	用於指定gencode樣板,預設general,可省略'))
 		console.log(notice('--pure 	用於指定產出頁面是否使用pure components可省略。預設使用container當做頁面')) 
 		console.log(ex('範例'))
 		console.log(cli('gulp genPage --out home/myTest  --tmp general --pure'))
 		console.log(cli('gulp genPage --out home/myTest  --tmp general'))
 		console.log(cli('gulp genPage --out home/myTest'))
 		console.log('')
 		console.log(notice('產生一個components 使用 genComponent'))
 		console.log(notice('--tmp 	用於指定gencode樣板,預設general,可省略'))
 		console.log(ex('範例'))
 		console.log(cli('gulp genComponent --out home/myTest  --tmp general'))
 		console.log(cli('gulp genComponent --out home/myTest '))
 		console.log('')
 		console.log(notice('產生一個container 使用 genContainer'))
 		console.log(notice('--tmp 	用於指定gencode樣板,預設general,可省略'))
 		console.log(ex('範例'))
 		console.log(cli('gulp genContainer --out home/myTest  --tmp general'))
 		console.log(cli('gulp genContainer --out home/myTest '))
 	})
 }