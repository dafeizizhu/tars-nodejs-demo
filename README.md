# TARS Nodejs Demo

Tars Nodejs Demo, including server implementation, client demo and packaging for Tars

## Build Setup

**Use the same (or almost the same) enviroment the Tars deployed in**

```bash
# server
cd ./server
npm install
node main

# client
cd ./client
npm install
node main
# see something in the console
```
## Tars Deploy

1. App: TRom
2. Server: NodeJsTestServer
3. Obj: NodeJsCommObj
4. port: 14002

```bash
npm install -g tars-deploy
cd ./server
tars-deploy NodeJsTestServer # same as the server name in Tars Management Website
```

Then generate `NodeJsTestServer.tgz` file, use Tars Management Website to publish the package, [an example here](https://github.com/Tencent/Tars/blob/master/Install.md#442-tarsstat部署发布).

## Tree
```
├── NodeJsComm.tars                                     # Tars file
├── client
│   ├── main.js                                         # client entry
│   ├── NodeJsCommProxy.js                              # tars2node --client ../NodeJsComm.tars generated
│   └── package.json
└── server
    ├── main.js                                         # server entry
    ├── NodeJsCommImp.js                                # tars2node --server ../NodeJsComm.tars generated
    ├── NodeJsComm.js                                   # same as abbove
    ├── package.json
    └── TRom.NodeJsTestServer.config.conf               # local debug config, in production use env.TARS_CONFIG instead, see server/main.js
```
