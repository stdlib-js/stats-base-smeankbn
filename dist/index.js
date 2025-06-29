"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=n(function(T,s){
var y=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/blas-ext-base-ssumkbn/dist').ndarray;function d(r,e,a,u){return r<=0?NaN:r===1||a===0?e[u]:y(b(r,e,a,u)/r)}s.exports=d
});var o=n(function(g,v){
var k=require('@stdlib/strided-base-stride2offset/dist'),p=i();function l(r,e,a){return p(r,e,a,k(r,a))}v.exports=l
});var c=n(function(h,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),x=i();j(q,"ndarray",x);m.exports=q
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),F=c(),t,f=_(R(__dirname,"./native.js"));E(f)?t=F:t=f;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
