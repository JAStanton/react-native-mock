var _sinon=require('sinon');var _sinon2=_interopRequireDefault(_sinon);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function execute(fun,context,args){return fun.apply(context,args);}function reportError(error){throw error;}module.exports={apply:execute,applyWithGuard:execute,guard:_sinon2.default.spy(function(callback){return callback;}),inGuard:_sinon2.default.spy(function(){return true;}),reportError:reportError,setGlobalHandler:_sinon2.default.spy(function(){return undefined;})};