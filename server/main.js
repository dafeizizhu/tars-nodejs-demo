var TarsServer = require('@tars/rpc/protal').server
var TRom = require('./NodeJsCommImp.js').TRom

var svr = new TarsServer()
svr.initialize(process.env.TARS_CONFIG || './TRom.NodeJsTestServer.config.conf', server => {
  server.addServant(TRom.NodeJsCommImp, server.Application + '.' + server.ServerName + '.NodeJsCommObj')
  console.log(`${server.Application}.${server.ServerName} started`)
})
svr.start()

