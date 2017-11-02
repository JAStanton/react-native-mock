var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ViewAccessibility=require('./ViewAccessibility');var _ViewAccessibility2=_interopRequireDefault(_ViewAccessibility);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);
var _ViewPropTypes=require('../propTypes/ViewPropTypes');var _ViewPropTypes2=_interopRequireDefault(_ViewPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/View/View.js
 */var AccessibilityTraits=_ViewAccessibility2.default.AccessibilityTraits,AccessibilityComponentTypes=_ViewAccessibility2.default.AccessibilityComponentTypes;

var forceTouchAvailable=false;

var statics={
AccessibilityComponentType:AccessibilityComponentTypes,
AccessibilityTraits:AccessibilityTraits,
/**
   * Is 3D Touch / Force Touch available (i.e. will touch events include `force`)
   * @platform ios
   */
forceTouchAvailable:forceTouchAvailable};var


View=function(_React$Component){_inherits(View,_React$Component);function View(){var _ref;var _temp,_this,_ret;_classCallCheck(this,View);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=View.__proto__||Object.getPrototypeOf(View)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes=_ViewPropTypes2.default,_this.

mixins=[_NativeMethodsMixin2.default],_this.

statics=_extends({},
statics),_temp),_possibleConstructorReturn(_this,_ret);}_createClass(View,[{key:'render',value:function render()


{
return null;
}}]);return View;}(_react2.default.Component);


module.exports=View;