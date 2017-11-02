var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _EdgeInsetsPropType=require('../propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _View=require('./View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableWithoutFeedback.js
 */var TouchableWithoutFeedback=function(_React$Component){_inherits(TouchableWithoutFeedback,_React$Component);function TouchableWithoutFeedback(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TouchableWithoutFeedback);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TouchableWithoutFeedback.__proto__||Object.getPrototypeOf(TouchableWithoutFeedback)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes={
accessible:_propTypes2.default.bool,
accessibilityComponentType:_propTypes2.default.oneOf(_View2.default.AccessibilityComponentType),
accessibilityTraits:_propTypes2.default.oneOfType([
_propTypes2.default.oneOf(_View2.default.AccessibilityTraits),
_propTypes2.default.arrayOf(_propTypes2.default.oneOf(_View2.default.AccessibilityTraits))]),

/**
     * If true, disable all interactions for this component.
     */
disabled:_propTypes2.default.bool,
/**
     * Called when the touch is released, but not if cancelled (e.g. by a scroll
     * that steals the responder lock).
     */
onPress:_propTypes2.default.func,
onPressIn:_propTypes2.default.func,
onPressOut:_propTypes2.default.func,
/**
     * Invoked on mount and layout changes with
     *
     *   `{nativeEvent: {layout: {x, y, width, height}}}`
     */
onLayout:_propTypes2.default.func,

onLongPress:_propTypes2.default.func,

/**
     * Delay in ms, from the start of the touch, before onPressIn is called.
     */
delayPressIn:_propTypes2.default.number,
/**
     * Delay in ms, from the release of the touch, before onPressOut is called.
     */
delayPressOut:_propTypes2.default.number,
/**
     * Delay in ms, from onPressIn, before onLongPress is called.
     */
delayLongPress:_propTypes2.default.number,
/**
     * When the scroll view is disabled, this defines how far your touch may
     * move off of the button, before deactivating the button. Once deactivated,
     * try moving it back and you'll see that the button is once again
     * reactivated! Move it back and forth several times while the scroll view
     * is disabled. Ensure you pass in a constant to reduce memory allocations.
     */
pressRetentionOffset:_EdgeInsetsPropType2.default,
/**
     * This defines how far your touch can start away from the button. This is
     * added to `pressRetentionOffset` when moving off of the button.
     * ** NOTE **
     * The touch area never extends past the parent view bounds and the Z-index
     * of sibling views always takes precedence if a touch hits two overlapping
     * views.
     */
hitSlop:_EdgeInsetsPropType2.default},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TouchableWithoutFeedback,[{key:'render',value:function render()


{
return null;
}}]);return TouchableWithoutFeedback;}(_react2.default.Component);


module.exports=TouchableWithoutFeedback;