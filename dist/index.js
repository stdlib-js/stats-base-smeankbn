"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=n(function(O,t){
var c=require('@stdlib/number-float64-base-to-float32/dist'),k=require('@stdlib/blas-ext-base-ssumkbn/dist');function l(r,e,a){return r<=0?NaN:r===1||a===0?e[0]:c(k(r,e,a)/r)}t.exports=l
});var v=n(function(g,o){
var p=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/blas-ext-base-ssumkbn/dist').ndarray;function d(r,e,a,u){return r<=0?NaN:r===1||a===0?e[u]:p(y(r,e,a,u)/r)}o.exports=d
});var f=n(function(h,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),x=v();j(q,"ndarray",x);m.exports=q
});var F=require("path").join,R=require('@stdlib/utils-try-require/dist'),T=require('@stdlib/assert-is-error/dist'),_=f(),i,b=R(F(__dirname,"./native.js"));T(b)?i=_:i=b;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
