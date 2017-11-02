var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Headers=function(){


function Headers(){_classCallCheck(this,Headers);
this._headers=[];
}_createClass(Headers,[{key:"append",value:function append(

name,value){
var normalName=name.toLowerCase();
this._headers.push({name:normalName,value:value});
}},{key:"delete",value:function _delete(

name){
var normalName=name.toLowerCase();
this._headers=this._headers.filter(function(pair){return pair.name!==normalName;});
}},{key:"entries",value:function entries()

{
return this._headers.entries();
}},{key:"get",value:function get(

name){
var normalName=name.toLowerCase();
var header=this._headers.find(function(pair){return pair.name===normalName;});
return header?header.value:undefined;
}},{key:"getAll",value:function getAll(

name){
var normalName=name.toLowerCase();
var headers=this._headers.filter(function(pair){return pair.name===normalName;});
return headers.map(function(pair){return pair.value;});
}},{key:"has",value:function has(

name){
var normalName=name.toLowerCase();
return this.get(normalName);
}},{key:"keys",value:function keys()

{
return this._headers.map(function(pair){return pair.name;});
}},{key:"set",value:function set(

name,value){
var normalName=name.toLowerCase();
this.delete(normalName);
this.append(normalName,value);
}},{key:"values",value:function values()

{
return this._headers.map(function(pair){return pair.value;});
}}]);return Headers;}();


module.exports=Headers;