var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);
var _View=require('./View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/ActivityIndicator/ActivityIndicatorIOS.ios.js
 */var ActivityIndicatorIOS=function(_React$Component){_inherits(ActivityIndicatorIOS,_React$Component);function ActivityIndicatorIOS(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ActivityIndicatorIOS);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ActivityIndicatorIOS.__proto__||Object.getPrototypeOf(ActivityIndicatorIOS)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes=_extends({},
_View2.default.propTypes,{
/**
     * Whether to show the indicator (true, the default) or hide it (false).
     */
animating:_propTypes2.default.bool,
/**
     * The foreground color of the spinner (default is gray).
     */
color:_propTypes2.default.string,
/**
     * Whether the indicator should hide when not animating (true by default).
     */
hidesWhenStopped:_propTypes2.default.bool,
/**
     * Size of the indicator. Small has a height of 20, large has a height of 36.
     */
size:_propTypes2.default.oneOf([
'small',
'large']),

/**
     * Invoked on mount and layout changes with
     *
     *   {nativeEvent: { layout: {x, y, width, height}}}.
     */
onLayout:_propTypes2.default.func}),_this.


mixins=[_NativeMethodsMixin2.default],_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ActivityIndicatorIOS,[{key:'render',value:function render()

{
return null;
}}]);return ActivityIndicatorIOS;}(_react2.default.Component);


module.exports=ActivityIndicatorIOS;