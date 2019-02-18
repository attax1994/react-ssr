/**
 * 渲染初始模板
 * @param title         页面title
 * @param initialState  当前页面的initialState
 * @param content       页面HTML内容
 * @returns {string}
 */
function template(title, initialState = {}, content = "") {
  let scripts = ''
  if (content) {
    /**
     * ssr版本下，初始状态放在window.__STATE__下
     */
    scripts = ` 
                <script id="state" >
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
              `
  } else {
    /**
     * 纯client版本使用bundle.js
     */
    scripts = ` <script id="state" src="/assets/bundle.js"> </script> `
  }
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title> ${title} </title>
    <link href="assets/style.css" rel="stylesheet">
  </head>
  <body>
    <div class="content">
       <div id="app" class="wrap-inner">
          ${content}
       </div>
    </div>
      ${scripts}
  </body>
  </html>
        `
}

module.exports = template