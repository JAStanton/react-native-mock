var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var UNSENT=0;
var OPENED=1;
var HEADERS_RECEIVED=2;
var LOADING=3;
var DONE=4;var

XMLHttpRequest=(_temp=_class=function(){function XMLHttpRequest(){_classCallCheck(this,XMLHttpRequest);this.






UNSENT=UNSENT;this.
OPENED=OPENED;this.
HEADERS_RECEIVED=HEADERS_RECEIVED;this.
LOADING=LOADING;this.
DONE=DONE;this.









readyState=UNSENT;this.

status=0;this.
timeout=0;}_createClass(XMLHttpRequest,[{key:"open",value:function open(






method,url,async){
}},{key:"send",value:function send(

data){
}},{key:"abort",value:function abort()

{
}}]);return XMLHttpRequest;}(),_class.UNSENT=UNSENT,_class.OPENED=OPENED,_class.HEADERS_RECEIVED=HEADERS_RECEIVED,_class.LOADING=LOADING,_class.DONE=DONE,_temp);


module.exports=XMLHttpRequest;