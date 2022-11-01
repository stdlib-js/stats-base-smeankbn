// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";import s,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssumkbn@v0.0.9-esm/index.mjs";function r(e,n,r){return e<=0?NaN:1===e||0===r?n[0]:t(s(e,n,r)/e)}function d(e,s,r,d){return e<=0?NaN:1===e||0===r?s[d]:t(n(e,s,r,d)/e)}e(r,"ndarray",d);export{r as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
