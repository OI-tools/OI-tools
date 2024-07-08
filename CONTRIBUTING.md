# 贡献指南

欢迎提交 PR，贡献代码或者提供建议。任何贡献都是具有价值的！

## 开发环境

我们需要您的开发环境具有 [Node.js 20.x](https://nodejs.org/en/), [Python 3.x](https://www.python.org/) 和 [Git](https://git-scm.com/) 环境。并且已经安装了 [Pipenv](https://pipenv.pypa.io/en/latest/)。你可以使用以下命令安装 Pipenv:

```bash
pip install pipenv
```

## 开发指南

首先，请 Fork 本项目。并执行以下命令克隆到本地：

```bash
git clone https://your_username/OI-tools.git

cd OI-tools

# 安装依赖
pipenv install
npm install
```

接下来，添加一个分支，你便可以开始你的工作了。

本项目使用 [Prettier](https://prettier.io/) 作为代码格式化工具。工作完成后，请在项目根目录下运行 `npx prettier . --write` 来格式化代码。接下来，Commit 你的修改，并推送到你的 Fork。然后，开启一个 Pull Request，等待管理员审核。

本项目使用 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 作为提交规范。
