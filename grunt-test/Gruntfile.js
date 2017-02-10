module.exports = function(grunt) {
    grunt.registerTask('mytask', '一个最简单的任务演示，根据参数打印不同的输出.', function(arg1, arg2) {
        if (arguments.length === 0) {
            grunt.log.writeln('任务' + this.name + ", 没有传参数");
        } else if (arguments.length === 1) {
            grunt.log.writeln('任务' + this.name + ", 有一个参数是" + arg1);
        } else {
            grunt.log.writeln('任务' + this.name + ", 有两个参数分别是" + arg1 + ", " + arg2);
        }
    });
};