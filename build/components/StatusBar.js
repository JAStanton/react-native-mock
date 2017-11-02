var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _ColorPropType=require('../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/StatusBar/StatusBar.js
 */
var _backgroundColor='';
var _barStyle={};
var _hidden=false;
var _networkActivityIndicatorVisible=false;
var _translucent=false;var

StatusBar=function(_React$Component){_inherits(StatusBar,_React$Component);function StatusBar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,StatusBar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=StatusBar.__proto__||Object.getPrototypeOf(StatusBar)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes={
animated:_propTypes2.default.bool,
barStyle:_propTypes2.default.oneOf(['default','light-content']),
backgroundColor:_ColorPropType2.default,
hidden:_propTypes2.default.bool,
networkActivityIndicatorVisible:_propTypes2.default.bool,
showHideTransition:_propTypes2.default.oneOf(['fade','slide']),
translucent:_propTypes2.default.bool},_this.


statics={
setBackgroundColor:function setBackgroundColor(backgroundColor,animated){
_backgroundColor=backgroundColor;
},

setBarStyle:function setBarStyle(barStyle,animated){
_barStyle=barStyle;
},

setHidden:function setHidden(hidden,animated){
_hidden=hidden;
},

setNetworkActivityIndicatorVisible:function setNetworkActivityIndicatorVisible(visible){
_networkActivityIndicatorVisible=visible;
},

setTranslucent:function setTranslucent(translucent){
_translucent=translucent;
},

__getBackgroundColor:function __getBackgroundColor(){
return _backgroundColor;
},

__getBarStyle:function __getBarStyle(){
return _barStyle;
},

__getHidden:function __getHidden(){
return _hidden;
},

__getNetworkActivityIndicatorVisible:function __getNetworkActivityIndicatorVisible(){
return _networkActivityIndicatorVisible;
},

__getTranslucent:function __getTranslucent(){
return _translucent;
}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(StatusBar,[{key:'render',value:function render()


{
return null;
}}]);return StatusBar;}(_react2.default.Component);


module.exports=StatusBar;