// child_process 监听相同端口，会报错 EADDRINUSE
var http = require('http');
const PORT = 8000;

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello ' + process.pid);
}).listen(PORT, () => {
  console.log(`server is listening: ${PORT}`);
});




/////
// Convert handle object
obj.got.call(this, message, handle, (handle) => {
  handleMessage(message.msg, handle, isInternal(message.msg));
});


listenInCluster(this, null, -1, -1, backlogFromArgs = 0);
function listenInCluster(
  server, address, port, addressType,
  backlog, fd, exclusive
) {}



ipc = new Pipe(PipeConstants.IPC);

[`TMPDIR=/var/folders/qv/4_364d3903v9z0h88b4l1q3h0000gn/T/`, `
__CF_USER_TEXT_ENCODING=0x1F5:0x19:0x34`, `
SHELL=/bin/zsh`, `
HOME=/Users/cocolin`, `
Apple_PubSub_Socket_Render=/private/tmp/com.apple.launchd.rIoAE1n8r8/Render`, `
SSH_AUTH_SOCK=/private/tmp/com.apple.launchd.WEKGmP9ObV/Listeners`, `
PATH=/Users/cocolin/.nvm/versions/node/v10.16.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`, `
LOGNAME=cocolin`, `
XPC_SERVICE_NAME=com.microsoft.VSCode.37764`, `
USER=cocolin`, `
XPC_FLAGS=0x0`, `
ORIGINAL_XDG_CURRENT_DESKTOP=undefined`, `
SHLVL=0`, `
PWD=/`, `
OLDPWD=/`, `
ZSH=/Users/cocolin/.oh-my-zsh`, `
PAGER=less`, `
NODE_CHANNEL_FD=3`, ``]
// envPairs 是子进程启动时的环境变量, 也就是最终转化为 process.env
// options.envPairs.push('NODE_CHANNEL_FD=' + ipcFd); // 设置子进程启动时的环境变量



listenInCluster(this, null, options.port | 0, 4,
  backlog, undefined, options.exclusive);