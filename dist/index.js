"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=t(function(z,v){
var E=require('@stdlib/blas-ext-base-drss/dist').ndarray;function j(r,e,a,u,i,s,n){return r<=0?NaN:E(r,e,a,u,i,s,n)}v.exports=j
});var y=t(function(A,c){
var o=require('@stdlib/strided-base-stride2offset/dist'),m=d();function R(r,e,a,u,i){var s=o(r,a),n=o(r,i);return m(r,e,a,s,u,i,n)}c.exports=R
});var p=t(function(B,l){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=y(),O=d();_(f,"ndarray",O);l.exports=f
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),q,x=g(b(__dirname,"./native.js"));h(x)?q=k:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
