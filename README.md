# OI-tools

<!-- PROJECT SHIELDS -->

<p align="center">
  <a href="https://github.com/ZnPdCo/OI-tools">
    <img alt="GitHub followers" src="https://img.shields.io/github/followers/ZnPdCo.svg?style=flat-square"></a>
  <a href="https://github.com/ZnPdCo/OI-tools">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/ZnPdCo/OI-tools.svg?style=flat-square"></a>
  <a href="https://github.com/ZnPdCo/OI-tools">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/ZnPdCo/OI-tools.svg?style=flat-square"></a>
  <a href="https://github.com/ZnPdCo/OI-tools">
    <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/ZnPdCo/OI-tools.svg?style=flat-square"></a>
  <br/>
  <a href="https://github.com/ZnPdCo/OI-tools">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
</p>

<!-- PROJECT LOGO -->
<br />

<p align="center">
  <a href="https://github.com/ZnPdCo/OI-tools">
    <img src="docs/assets/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">OI Tools</h3>
  <p align="center">
    一个开源的 OI 在线工具箱去快速开始你的编码！
    <br />
    <a href="https://znpdco.github.io/OI-tools/"><strong>开始使用 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ZnPdCo/OI-tools/pulls">提交贡献</a>
    ·
    <a href="https://github.com/ZnPdCo/OI-tools/issues">报告 Bug</a>
    ·
    <a href="https://github.com/ZnPdCo/OI-tools/issues">提出新特性</a>
  </p>

</p>

## 部署

本项目目前采用 [MkDocs](https://github.com/mkdocs/mkdocs) 及其主题 [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) 进行渲染。

当然，也可以在本地部署。（**需要安装 Python3**）

```bash
git clone https://znpdco.github.io/OI-tools.git --depth=1

cd OI-tools

# 安装 mkdocs 以及我们使用的主题 Material for MkDocs
pip install mkdocs-material

# 两种方法（选其一即可）：
# 1. 运行一个本地服务器，访问 http://127.0.0.1:8000 可以查看效果
pipenv run mkdocs serve -v

# 2. 在 site 文件夹下得到静态页面
pipenv run mkdocs build -v

# 获取 mkdocs 的命令行工具的说明（解释了命令和参数的含义）
pipenv run mkdocs --help
```

### 离线版

可以使用 `gh-pages` 分支的内容

```bash
git clone https://znpdco.github.io/OI-tools.git -b gh-pages
```

本地启动一个 http 服务器可能会更方便一些。

```bash
# 如果是 python3
python3 -m http.server
# 如果是 python2
python2 -m SimpleHTTPServer
# 有些环境下找不到名叫 python3/python2 的可执行文件，不妨运行 python 试试
```

### 版权声明

除特别注明外，项目中除了代码部分均采用 GPL-3.0 许可证。
