// In single-spa, the assets need to be loaded from a dynamic location,
// instead of hard coded to `/assets`. We use webpack public path for this.
// See https://webpack.js.org/guides/public-path/#root

export function assetUrl(url: string): string {
  // @ts-ignore
  const publicPath = __webpack_public_path__;
  const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
  const urlPrefix = url.startsWith('/') ? '' : '/';
  console.log('public, path', `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`);
  return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
}
