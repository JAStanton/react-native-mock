var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _createMockComponent=require('./createMockComponent');var _createMockComponent2=_interopRequireDefault(_createMockComponent);
var _View=require('./View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var NavigatorSceneConfigType=_propTypes2.default.shape({
gestures:_propTypes2.default.object,
springFriction:_propTypes2.default.number,
springTension:_propTypes2.default.number,
defaultTransitionVelocity:_propTypes2.default.number,
animationInterpolators:_propTypes2.default.object});


var NavigatorSceneConfigs={
PushFromRight:NavigatorSceneConfigType,
FloatFromRight:NavigatorSceneConfigType,
FloatFromLeft:NavigatorSceneConfigType,
FloatFromBottom:NavigatorSceneConfigType,
FloatFromBottomAndroid:NavigatorSceneConfigType,
FadeAndroid:NavigatorSceneConfigType,
HorizontalSwipeJump:NavigatorSceneConfigType,
HorizontalSwipeJumpFromRight:NavigatorSceneConfigType,
VerticalUpSwipeJump:NavigatorSceneConfigType,
VerticalDownSwipeJump:NavigatorSceneConfigType};var


Navigator=function(_React$Component){_inherits(Navigator,_React$Component);function Navigator(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Navigator);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Navigator.__proto__||Object.getPrototypeOf(Navigator)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes={
/**
     * Optional function that allows configuration about scene animations and
     * gestures. Will be invoked with the route and the routeStack and should
     * return a scene configuration object
     *
     * ```
     * (route, routeStack) => Navigator.SceneConfigs.FloatFromRight
     * ```
     */
configureScene:_propTypes2.default.func,

/**
     * Required function which renders the scene for a given route. Will be
     * invoked with the route and the navigator object
     *
     * ```
     * (route, navigator) =>
     *   <MySceneComponent title={route.title} navigator={navigator} />
     * ```
     */
renderScene:_propTypes2.default.func.isRequired,

/**
     * Specify a route to start on. A route is an object that the navigator
     * will use to identify each scene to render. `initialRoute` must be
     * a route in the `initialRouteStack` if both props are provided. The
     * `initialRoute` will default to the last item in the `initialRouteStack`.
     */
initialRoute:_propTypes2.default.object,

/**
     * Provide a set of routes to initially mount. Required if no initialRoute
     * is provided. Otherwise, it will default to an array containing only the
     * `initialRoute`
     */
initialRouteStack:_propTypes2.default.arrayOf(_propTypes2.default.object),

/**
     * Will emit the target route upon mounting and before each nav transition
     */
onWillFocus:_propTypes2.default.func,

/**
     * Will be called with the new route of each scene after the transition is
     * complete or after the initial mounting
     */
onDidFocus:_propTypes2.default.func,

/**
     * Optionally provide a navigation bar that persists across scene
     * transitions
     */
navigationBar:_propTypes2.default.node,

/**
     * Optionally provide the navigator object from a parent Navigator
     */
navigator:_propTypes2.default.object,

/**
     * Styles to apply to the container of each scene
     */
sceneStyle:_View2.default.propTypes.style},_this.


statics={
BreadcrumbNavigationBar:(0,_createMockComponent2.default)('NavigatorBreadcrumbNavigationBar'),
NavigationBar:(0,_createMockComponent2.default)('NavigatorNavigationBar'),
SceneConfigs:NavigatorSceneConfigs},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Navigator,[{key:'render',value:function render()


{
return null;
}}]);return Navigator;}(_react2.default.Component);


module.exports=Navigator;