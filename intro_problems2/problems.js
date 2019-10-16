function titleize(names, cb){
  let arr = names.map(name => {
    return `Mx. ${name} Jingleheimer Schmidt`
  })
  cb(arr);
}


const callback = function(arr){
  arr.forEach(el => {
    console.log(el);
  })
}

titleize(["Mary", "Brian", "Leo"], callback);