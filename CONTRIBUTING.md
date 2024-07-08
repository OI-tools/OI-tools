# 贡献指南

欢迎提交 PR，贡献代码或者提供建议。任何贡献都是具有价值的！

## 开发环境

我们需要您的开发环境具有 [Node.js 20.x](https://nodejs.org/en/), [Python 3.x](https://www.python.org/) 和 [Git](https://git-scm.com/) 环境。并且已经安装了 [Pipenv](https://pipenv.pypa.io/en/latest/)。你可以使用以下命令安装 Pipenv:

```bash
pip install pipenv
```

## 克隆仓库

首先，请 Fork 本项目。并执行以下命令克隆到本地：

```bash
git clone https://your_username/OI-tools/OI-tools.git

cd OI-tools

# 安装依赖
pipenv install
npm install
```

接下来，添加一个分支，你便可以开始你的工作了。

## 添加修改

现在是时候对代码库进行修改了。无论是修复错误、添加新功能还是改进文档，都欢迎您的贡献。确保您的更改是清晰的，并且其他人可以理解您的代码。

请在修改时注意以下几点：

1. 做到良好的代码习惯；
2. 本项目使用 [Prettier](https://prettier.io/) 作为代码格式化工具。你可以在项目根目录下运行 `npx prettier . --write` 来格式化代码。
3. 确保您的代码是有一定效率的，且错误反馈信息良好。

## 测试修改

做出修改后，重要的是要对其进行测试，以确保它们按预期工作，并且不会引入新问题。运行以下命令以测试您的修改：

```bash
pipenv run mkdocs serve    # 启动本地服务器，查看修改效果
# pipenv run mkdocs build  # 或者说在 site 目录下生成静态页面
npx prettier . --check     # 检查代码格式
```

## 提交修改

接下来，Commit 你的修改，并推送到你的 Fork。然后，开启一个 Pull Request，就可以等待管理员审核了。

本项目使用 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 作为提交规范，遵从规范的 PR 可能会更容易被 Merge～
