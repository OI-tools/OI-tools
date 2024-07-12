import os
def on_page_content(html, page, config, files):
    res = html
    if(os.path.exists(os.path.join("docs", page.url[: -1] + '.js'))):
        res += '<script src="../' + page.url[: -1].split('/')[-1] + '.js"></script>'
    if(os.path.exists(os.path.join("docs", page.url[: -1] + '.css'))):
        res += '<link rel="stylesheet" href="../' + page.url[: -1].split('/')[-1] + '.css">'
    return res