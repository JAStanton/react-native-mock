var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _EdgeInsetsPropType=require('../propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _View=require('./View');var _View2=_interopRequireDefault(_View);
var _ScrollView=require('./ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);
var _WebViewManager=require('../NativeModules/WebViewManager');var _WebViewManager2=_interopRequireDefault(_WebViewManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var RCT_WEBVIEW_REF='webview';

var NavigationType={
click:_WebViewManager2.default.NavigationType.LinkClicked,
formsubmit:_WebViewManager2.default.NavigationType.FormSubmitted,
backforward:_WebViewManager2.default.NavigationType.BackForward,
reload:_WebViewManager2.default.NavigationType.Reload,
formresubmit:_WebViewManager2.default.NavigationType.FormResubmitted,
other:_WebViewManager2.default.NavigationType.Other};


var JSNavigationScheme=_WebViewManager2.default.JSNavigationScheme;var

WebView=function(_React$Component){_inherits(WebView,_React$Component);function WebView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,WebView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=WebView.__proto__||Object.getPrototypeOf(WebView)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes=_extends({},
_View2.default.propTypes,{
url:_propTypes2.default.string,
html:_propTypes2.default.string,
/**
     * Function that returns a view to show if there's an error.
     */
renderError:_propTypes2.default.func,// view to show if there's an error
/**
     * Function that returns a loading indicator.
     */
renderLoading:_propTypes2.default.func,
/**
     * Invoked when load finish
     */
onLoad:_propTypes2.default.func,
/**
     * Invoked when load either succeeds or fails
     */
onLoadEnd:_propTypes2.default.func,
/**
     * Invoked on load start
     */
onLoadStart:_propTypes2.default.func,
/**
     * Invoked when load fails
     */
onError:_propTypes2.default.func,
/**
     * @platform ios
     */
bounces:_propTypes2.default.bool,
/**
     * A floating-point number that determines how quickly the scroll view
     * decelerates after the user lifts their finger. You may also use string
     * shortcuts `"normal"` and `"fast"` which match the underlying iOS settings
     * for `UIScrollViewDecelerationRateNormal` and
     * `UIScrollViewDecelerationRateFast` respectively.
     *   - Normal: 0.998
     *   - Fast: 0.9 (the default for iOS WebView)
     * @platform ios
     */
decelerationRate:_ScrollView2.default.propTypes.decelerationRate,
/**
     * @platform ios
     */
scrollEnabled:_propTypes2.default.bool,
automaticallyAdjustContentInsets:_propTypes2.default.bool,
contentInset:_EdgeInsetsPropType2.default,
onNavigationStateChange:_propTypes2.default.func,
startInLoadingState:_propTypes2.default.bool,// force WebView to show loadingView on first load
style:_View2.default.propTypes.style,

/**
     * Used on Android only, JS is enabled by default for WebView on iOS
     * @platform android
     */
javaScriptEnabled:_propTypes2.default.bool,

/**
     * Used on Android only, controls whether DOM Storage is enabled or not
     * @platform android
     */
domStorageEnabled:_propTypes2.default.bool,

/**
     * Sets the JS to be injected when the webpage loads.
     */
injectedJavaScript:_propTypes2.default.string,

/**
     * Sets whether the webpage scales to fit the view and the user can change the scale.
     * @platform ios
     */
scalesPageToFit:_propTypes2.default.bool,

/**
     * Allows custom handling of any webview requests by a JS handler. Return true
     * or false from this method to continue loading the request.
     * @platform ios
     */
onShouldStartLoadWithRequest:_propTypes2.default.func,

/**
     * Determines whether HTML5 videos play inline or use the native full-screen
     * controller.
     * default value `false`
     * **NOTE** : "In order for video to play inline, not only does this
     * property need to be set to true, but the video element in the HTML
     * document must also include the webkit-playsinline attribute."
     * @platform ios
     */
allowsInlineMediaPlayback:_propTypes2.default.bool}),_this.


statics={
JSNavigationScheme:JSNavigationScheme,
NavigationType:NavigationType},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(WebView,[{key:'getWebViewHandle',value:function getWebViewHandle()


{
// TODO(lmr): React.findNodeHandle
return _react2.default.findNodeHandle(this.refs[RCT_WEBVIEW_REF]);
}},{key:'reload',value:function reload()

{
// do nothing
}},{key:'goForward',value:function goForward()

{
// do nothing
}},{key:'goBack',value:function goBack()

{
// do nothing
}},{key:'render',value:function render()

{
return null;
}}]);return WebView;}(_react2.default.Component);


module.exports=WebView;