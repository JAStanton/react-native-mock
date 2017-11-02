var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _StyleSheetPropType=require('../propTypes/StyleSheetPropType');var _StyleSheetPropType2=_interopRequireDefault(_StyleSheetPropType);
var _NativeMethodsMixin=require('../mixins/NativeMethodsMixin');var _NativeMethodsMixin2=_interopRequireDefault(_NativeMethodsMixin);
var _EdgeInsetsPropType=require('../propTypes/EdgeInsetsPropType');var _EdgeInsetsPropType2=_interopRequireDefault(_EdgeInsetsPropType);
var _ImageStylePropTypes=require('../propTypes/ImageStylePropTypes');var _ImageStylePropTypes2=_interopRequireDefault(_ImageStylePropTypes);
var _ImageResizeMode=require('../propTypes/ImageResizeMode');var _ImageResizeMode2=_interopRequireDefault(_ImageResizeMode);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Image/Image.ios.js
 */var Image=function(_React$Component){_inherits(Image,_React$Component);function Image(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Image);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Image.__proto__||Object.getPrototypeOf(Image)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes={
style:(0,_StyleSheetPropType2.default)(_ImageStylePropTypes2.default),
/**
     * `uri` is a string representing the resource identifier for the image, which
     * could be an http address, a local file path, or the name of a static image
     * resource (which should be wrapped in the `require('./path/to/image.png')` function).
     */
source:_propTypes2.default.oneOfType([
_propTypes2.default.shape({
uri:_propTypes2.default.string}),

// Opaque type returned by require('./image.jpg')
_propTypes2.default.number]),

/**
     * A static image to display while loading the image source.
     * @platform ios
     */
defaultSource:_propTypes2.default.oneOfType([
_propTypes2.default.shape({
uri:_propTypes2.default.string}),

// Opaque type returned by require('./image.jpg')
_propTypes2.default.number]),

/**
     * When true, indicates the image is an accessibility element.
     * @platform ios
     */
accessible:_propTypes2.default.bool,
/**
     * The text that's read by the screen reader when the user interacts with
     * the image.
     * @platform ios
     */
accessibilityLabel:_propTypes2.default.string,
/**
     * When the image is resized, the corners of the size specified
     * by capInsets will stay a fixed size, but the center content and borders
     * of the image will be stretched.  This is useful for creating resizable
     * rounded buttons, shadows, and other resizable assets.  More info on
     * [Apple documentation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets)
     * @platform ios
     */
capInsets:_EdgeInsetsPropType2.default,
/**
     * Determines how to resize the image when the frame doesn't match the raw
     * image dimensions.
     *
     * 'cover': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal
     * to or larger than the corresponding dimension of the view (minus padding).
     *
     * 'contain': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal to
     * or less than the corresponding dimension of the view (minus padding).
     *
     * 'stretch': Scale width and height independently, This may change the
     * aspect ratio of the src.
     *
     * `repeat`: Repeat the image to cover the frame of the view. The
     * image will keep it's size and aspect ratio. (iOS only)
     *
     */
resizeMode:_propTypes2.default.oneOf(_ImageResizeMode2.default),
/**
     * A unique identifier for this element to be used in UI Automation
     * testing scripts.
     */
testID:_propTypes2.default.string,
/**
     * Invoked on mount and layout changes with
     * `{nativeEvent: {layout: {x, y, width, height}}}`.
     */
onLayout:_propTypes2.default.func,
/**
     * Invoked on load start
     */
onLoadStart:_propTypes2.default.func,
/**
     * Invoked on download progress with `{nativeEvent: {loaded, total}}`
     * @platform ios
     */
onProgress:_propTypes2.default.func,
/**
     * Invoked on load error with `{nativeEvent: {error}}`
     * @platform ios
     */
onError:_propTypes2.default.func,
/**
     * Invoked when load completes successfully
     */
onLoad:_propTypes2.default.func,
/**
     * Invoked when load either succeeds or fails
     */
onLoadEnd:_propTypes2.default.func},_this.


mixins=[_NativeMethodsMixin2.default],_this.

statics={
resizeMode:_ImageResizeMode2.default,
getSize:function getSize(uri,success,failure){

},
prefetch:function prefetch(uri){

}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Image,[{key:'render',value:function render()


{
return null;
}}]);return Image;}(_react2.default.Component);


module.exports=Image;