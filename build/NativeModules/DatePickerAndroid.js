// TODO(lmr): figure out a good way to have separate responses like "dismissed" vs "set".
var DatePickerAndroid={
open:function open(options){
return Promise.resolve().then({action:'dismissedAction'});
}};


module.exports=DatePickerAndroid;