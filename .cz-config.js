module.exports = {
  types: [
    { value: "feat", name: "feat:     新增功能" },
    { value: "fix", name: "fix:      修复 bug" },
    { value: "docs", name: "docs:     文档变更" },
    {
      value: "style",
      name: "style:    代码格式（不影响功能，例如空格、分号等格式修正）",
    },
    {
      value: "refactor",
      name: "refactor: 代码重构（不包括 bug 修复、功能新增）",
    },
    { value: "perf", name: "perf:     性能优化" },
    { value: "test", name: "test:     添加、修改测试用例" },
    {
      value: "build",
      name: "build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）",
    },
    { value: "ci", name: "ci:       修改 CI 配置、脚本" },
    {
      value: "chore",
      name: "chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）",
    },
    { value: "revert", name: "revert:   回滚 commit" },
  ],
  message: {
    type: "请选择提交的类型",
    customScope: "请输入修改的范围(可选)",
    subject: "请简要描述提交(必填)",
    body: "请输入详细描述(可选)",
    footer: "请输入要关闭的issue(可选)",
    confirmCommit: "确认要使用以上信息提交?(y/n)",
  },
};
