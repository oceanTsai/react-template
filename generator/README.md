genCode.js 主要入口程式
common.js 用來得取輸出路徑與樣板所在路徑共用工具函式
genAction.js 產生action
genReducers 產生reducers
genView 產生view



指令
gelp genPage --out home/first --tmp generator
gulp genAction --out home/first --tmp generator
gulp genReducers --out home/first --tmp generator
gulp genView --out home/first --tmp generator


--tmp 可以省略，預設使用generator樣板

--redux 有此參數代表 view 將使用 redux 綁定

