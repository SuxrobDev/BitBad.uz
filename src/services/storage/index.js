const setKey =(key,value) => {
    if(window.localStorage && key && value){
        window.localStorage.setItem(key,value);
    }
}


const   getKey = (key) => {
    if(!window.localStorage || !key){
        return;
    }
    return window.localStorage.getItem(key);
}


const removeKey = (key) => {
    if(window.localStorage && key){
        window.localStorage.removeItem(key);
    }
}

export {setKey,getKey,removeKey};