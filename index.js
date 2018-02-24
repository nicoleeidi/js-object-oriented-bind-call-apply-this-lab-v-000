function justInvoke(fn){
  return fn()
}
function setThisWithCall(fn, thisValue, arg){
  let thisValue= {}
  return fn.call(thisValue,arg)
}
