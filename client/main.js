var TarsClient = require('@tars/rpc/protal').client
var TRom = require('./NodeJsCommProxy.js').TRom

var host = process.argv[2] || '127.0.0.1'

var prx = TarsClient.stringToProxy(
  TRom.NodeJsCommProxy,
  `TRom.NodeJsTestServer.NodeJsCommObj@tcp -h ${host} -p 14002 -t 60000`
)

var success = result => {
  console.log(`result.response.costtime: ${result.response.costtime}`)
  console.log(`result.response.return: ${result.response.return}`)
  console.log(`result.response.arguments.stResult: ${JSON.stringify(result.response.arguments.stResult)}`)
}

var error = result => {
  console.log(`result.response.costtime: ${result.response.costtime}`)
  console.log(`result.response.error.code: ${result.response.error.code}`)
  console.log(`result.response.error.message: ${result.response.error.message}`)
}

var stUser = new TRom.User_t()
stUser.id = 3
stUser.score = 99
stUser.name = 'tencent-mig'

prx.getall(stUser).then(success, error).done()
