// 简单的 Babel 插件：将 console.log 转换为 console.warn
module.exports = function() {
  return {
    visitor: {
      // 访问所有的成员表达式（如 console.log）
      MemberExpression(path) {
        // 检查是否是 console.log
        if (
          path.node.object.name === 'console' &&
          path.node.property.name === 'log'
        ) {
          // 将 log 改为 warn
          path.node.property.name = 'warn';
          console.log('✅ 转换成功: console.log -> console.warn');
        }
      }
    }
  };
};
