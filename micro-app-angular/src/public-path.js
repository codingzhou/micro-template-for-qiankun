if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  console.log('angular public path', window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  debugger;
} else {
  __webpack_public_path__ = "http://localhost:10200/";
  console.log('angular public else path', __webpack_public_path__);
  debugger;
}
