---
title: Flask 注入自定义的日志
author: Von
date: 2019-11-26 11:08:14
subtitle: 自定义 flask 日志
header-img:
tags:
    flask
    web
    python

---


# Flask logging

根据官方文档来看，当想要为项目配置日志时，应当在程序启动时尽早进行配置。比如在`flask_app = Flask('api-controller')`之前配置。
如果不配置，flask 会`create_logger`
```
# flask source code 中是这样的
default_handler = logging.StreamHandler(wsgi_errors_stream)
default_handler.setFormatter(
    logging.Formatter("[%(asctime)s] %(levelname)s in %(module)s: %(message)s")
)
# 所以使用缺省配置时

```
如果在操作 `app.logger` 之后配置日志，并且需要 移除缺省的日志记录器，可以导入并移除它:
```
from flask.logging import default_handler

flask_app.logger.removeHandler(default_handler)
```

应用程序代码可以在一个模块中定义和配置父记录器，并在单独的模块中创建（但不配置）子记录器，并且对子记录器的所有调用都将传递给父记录器

比如在`flask`应用中我们的目录为`app`
```
# create logger with app and config it
logging.getLogger("app").setLevel(log_level)

```

