/**
* 进程查看命令: ps命令（Process Status）
* grep(global search regular expression(RE) and print out the line, 全面搜索正则表达式并把行打印出来)
**/

// 查看worker.js的进程
// ps aux | grep worker.js

// 杀死进程
//kill -s 9 pid

// ps aux 输出格式：
// USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND

/**
USER: 进程拥有者
pid
%CPU: 占用的CPU使用率
%MEM：占用的寄存器使用率 
VSZ： 占用的虚拟记忆体大小
RSS：占用的记忆体大小
TTY：终端的次要装置号码 
STAT： 进程的状态【D不可中断、R运行、S终端、T停止、Z僵死】
START： 进程开始事件
TIME： 执行的时间
COMMAND：执行的指令
 */


