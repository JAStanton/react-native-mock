


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _flattenStyle=require('./flattenStyle');var _flattenStyle2=_interopRequireDefault(_flattenStyle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/StyleSheetPropType.js
 */function StyleSheetPropType(shape){
var shapePropType=_propTypes2.default.shape(shape);
return function(props,propName,componentName){
var newProps=props;
if(props[propName]){
// Just make a dummy prop object with only the flattened style
newProps={};
newProps[propName]=(0,_flattenStyle2.default)(props[propName]);
}for(var _len=arguments.length,rest=Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){rest[_key-3]=arguments[_key];}
return shapePropType.apply(undefined,[newProps,propName,componentName].concat(rest));
};
}

module.exports=StyleSheetPropType;