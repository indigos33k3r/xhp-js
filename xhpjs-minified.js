require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



},{}],"XHPJS":[function(require,module,exports){
function XHPJS(t,e){this.instanceData={},this.instances={},this.elements={},t.forEach(function(t){var e=t[0];this.instanceData[e]=t},this),e.forEach(this.call.bind(this)),t.forEach(function(t){var e=t[0];this.getInstance(e)},this)}XHPJS.prototype={call:function(t){var e=t[0],n=t[1],i=this.mapArguments(t[2]);e=require(e),n=e[n],n.apply(null,i)},mapArgument:function(t){var e=t[0],n=t[1];return"v"==e?n:"e"==e?this.getElement(n):"i"==e?this.getInstance(n):void 0},mapArguments:function(t){return t.map(this.mapArgument,this)},getElement:function(t){return"undefined"==typeof this.elements[t]&&(this.elements[t]=document.getElementById(t)),this.elements[t]},getInstance:function(t){return"undefined"==typeof this.instances[t]&&this.constructInstance(t),this.instances[t]},constructInstance:function(t){var e=this.instanceData[t],n=e[1],i=this.mapArguments(e[2]),s=require(n),r=function(t){return s.apply(this,t)};r.prototype=s.prototype;var a=new r(i);a.__xhpJSModule=n,a.__xhpJSElement=this.getElement(t),this.instances[t]=a}},XHPJS.renderReactElement=function(t,e,n){var i=window.React?window.React:require("react"),s=require(e),r=i.createElement(s,n,null);i.render(r,t)},module.exports=XHPJS;


},{"react":1}]},{},[]);
