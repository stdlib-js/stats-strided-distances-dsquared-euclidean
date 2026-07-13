"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var d=t(function(z,v){
var E=require('@stdlib/blas-ext-base-drss/dist').ndarray;function j(e,r,a,u,i,s,n){return e<=0?NaN:E(e,r,a,u,i,s,n)}v.exports=j
});var y=t(function(A,c){
var o=require('@stdlib/strided-base-stride2offset/dist'),m=d();function R(e,r,a,u,i){var s=o(e,a),n=o(e,i);return m(e,r,a,s,u,i,n)}c.exports=R
});var p=t(function(B,l){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=y(),O=d();_(f,"ndarray",O);l.exports=f
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),q,x=g(b(__dirname,"./native.js"));h(x)?q=k:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
