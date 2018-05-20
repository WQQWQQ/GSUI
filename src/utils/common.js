const deepCopy = source => {
    let sourceCopy;
    if(source instanceof Array) {
        sourceCopy = [];
    }
    else if(source instanceof Function) {
        return source;
    }
    else if(source instanceof Object) {
        sourceCopy = {};
    }
    else {
        return source;
    }
    for(let i in source) {
        if(source.hasOwnProperty(i)) {
            sourceCopy[i] = source[i] instanceof Object ? deepCopy(source[i]) : source[i];
        }
    }
    return sourceCopy;
};

const throttle=(fn=()=>{},delay=200,atLeast=300)=>{
    let timer=null;
    let previous=null;
    return ()=>{
        let now=new Date();
        if(!previous) previous=now;
        if(now-previous>atLeast){
            fn();
            previous=now;
            clearTimeout(timer);
        }else{
            clearTimeout(timer);
            timer=setTimeout(()=>{
                fn();
                previous=null;
            },delay);
        }
    };
};

export{
    deepCopy,
    throttle
};