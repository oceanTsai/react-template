
以下兩個是給gencode解析符號
//${import}
//${append}


### router 動態載入範例
/* dynamic load example
{
  path: '/async',
  getComponent (nextState, cb) {
    (async () => {
      const view = await import('views/AsyncView')
      cb(null, view.default)
    })()
  }
}
}*/