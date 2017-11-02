var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);
var _View=require('./View');var _View2=_interopRequireDefault(_View);
var _UIManager=require('../NativeModules/UIManager');var _UIManager2=_interopRequireDefault(_UIManager);
var _ColorPropType=require('../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 *https://github.com/facebook/react-native/blob/master/Libraries/Components/DrawerAndroid/DrawerLayoutAndroid.android.js
 */var DrawerConsts=_UIManager2.default.AndroidDrawerLayout.Constants;var

DrawerLayoutAndroid=function(_React$Component){_inherits(DrawerLayoutAndroid,_React$Component);function DrawerLayoutAndroid(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DrawerLayoutAndroid);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DrawerLayoutAndroid.__proto__||Object.getPrototypeOf(DrawerLayoutAndroid)).call.apply(_ref,[this].concat(args))),_this),_this.

propTypes=_extends({},
_View2.default.propTypes,{
/**
     * Determines whether the keyboard gets dismissed in response to a drag.
     *   - 'none' (the default), drags do not dismiss the keyboard.
     *   - 'on-drag', the keyboard is dismissed when a drag begins.
     */
keyboardDismissMode:_propTypes2.default.oneOf([
'none',// default
'on-drag']),

/**
     * Specifies the background color of the drawer. The default value is white.
     * If you want to set the opacity of the drawer, use rgba. Example:
     *
     * ```
     * return (
     *   <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">
     *   </DrawerLayoutAndroid>
     * );
     * ```
     */
drawerBackgroundColor:_ColorPropType2.default,
/**
     * Specifies the side of the screen from which the drawer will slide in.
     */
drawerPosition:_propTypes2.default.oneOf([
DrawerConsts.DrawerPosition.Left,
DrawerConsts.DrawerPosition.Right]),

/**
     * Specifies the width of the drawer, more precisely the width of the view that be pulled in
     * from the edge of the window.
     */
drawerWidth:_propTypes2.default.number,
/**
     * Specifies the lock mode of the drawer. The drawer can be locked in 3 states:
     * - unlocked (default), meaning that the drawer will respond (open/close) to touch gestures.
     * - locked-closed, meaning that the drawer will stay closed and not respond to gestures.
     * - locked-open, meaning that the drawer will stay opened and not respond to gestures.
     * The drawer may still be opened and closed programmatically (`openDrawer`/`closeDrawer`).
     */
drawerLockMode:_propTypes2.default.oneOf([
'unlocked',
'locked-closed',
'locked-open']),

/**
     * Function called whenever there is an interaction with the navigation view.
     */
onDrawerSlide:_propTypes2.default.func,
/**
     * Function called when the drawer state has changed. The drawer can be in 3 states:
     * - idle, meaning there is no interaction with the navigation view happening at the time
     * - dragging, meaning there is currently an interaction with the navigation view
     * - settling, meaning that there was an interaction with the navigation view, and the
     * navigation view is now finishing its closing or opening animation
     */
onDrawerStateChanged:_propTypes2.default.func,
/**
     * Function called whenever the navigation view has been opened.
     */
onDrawerOpen:_propTypes2.default.func,
/**
     * Function called whenever the navigation view has been closed.
     */
onDrawerClose:_propTypes2.default.func,
/**
     * The navigation view that will be rendered to the side of the screen and can be pulled in.
     */
renderNavigationView:_propTypes2.default.func.isRequired,

/**
     * Make the drawer take the entire screen and draw the background of the
     * status bar to allow it to open over the status bar. It will only have an
     * effect on API 21+.
     */
statusBarBackgroundColor:_ColorPropType2.default}),_this.


mixins=[_NativeMethodsMixin2.default],_this.

statics={
positions:DrawerConsts.DrawerPosition},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DrawerLayoutAndroid,[{key:'openDrawer',value:function openDrawer()


{
// do nothing
}},{key:'closeDrawer',value:function closeDrawer()

{
// do nothing
}},{key:'render',value:function render()

{
return null;
}}]);return DrawerLayoutAndroid;}(_react2.default.Component);



module.exports=DrawerLayoutAndroid;