var _mockery=require('mockery');var _mockery2=_interopRequireDefault(_mockery);var _underscore=require('underscore');var _underscore2=_interopRequireDefault(_underscore);var _react=require('react');var _react2=_interopRequireDefault(_react);var _sinon=require('sinon');var _sinon2=_interopRequireDefault(_sinon);var _defineGlobalProperty=require('./defineGlobalProperty');var _defineGlobalProperty2=_interopRequireDefault(_defineGlobalProperty);var _createMockComponent=require('./createMockComponent');var _createMockComponent2=_interopRequireDefault(_createMockComponent);var _NativeModules=require('./NativeModules');var _NativeModules2=_interopRequireDefault(_NativeModules);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}require('./babel');_mockery2.default.enable({warnOnReplace:false,warnOnUnregistered:false});(0,_defineGlobalProperty2.default)('__DEV__',true);_underscore2.default.mapObject(require('../haste-map.json').hasteMap,function(val,key){_mockery2.default.registerSubstitute(key,val);});_mockery2.default.registerMock('ensureComponentIsNative',function(){return true;});_mockery2.default.registerMock('requireNativeComponent',_sinon2.default.spy(function(viewName){return function(props){return _react2.default.createElement(viewName,props,props.children);};}));_mockery2.default.registerMock('ErrorUtils',require('./mocks/ErrorUtils'));_underscore2.default.forEach(Object.keys(_NativeModules2.default),function(mod){_mockery2.default.registerMock(mod,_NativeModules2.default[mod]);});_mockery2.default.registerMock('NativeModules',_NativeModules2.default);var mockPropRegistry={};_mockery2.default.registerMock('ReactNativePropRegistry',{register:_sinon2.default.spy(function(id){return id;}),getByID:_sinon2.default.spy(function(){return mockPropRegistry;})});_underscore2.default.forEach(_createMockComponent.MOCK_COMPONENTS,function(component){_mockery2.default.registerMock(component,(0,_createMockComponent2.default)(component));});_mockery2.default.registerMock('ListViewDataSource',require('./mocks/ListViewDataSource'));_mockery2.default.registerMock('ListView',require('./mocks/ListView'));_mockery2.default.registerMock('AsyncStorage',require('./mocks/AsyncStorage'));require('./image-compiler');(0,_defineGlobalProperty2.default)('Promise',require('promise'));(0,_defineGlobalProperty2.default)('regeneratorRuntime',require('regenerator-runtime/runtime'));