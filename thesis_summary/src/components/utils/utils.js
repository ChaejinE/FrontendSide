const convertFileToBaset64 = async ({file, callbackFunc, callbackArgObject}) => {
    if (!file) {
      console.log("[convertFileToBaset64]\nfile arg is not set");
      return
    }
  
    const reader = new FileReader();
    console.log(file)
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      let base64;
      base64 = e.target.result
      base64 = base64.split("data:application/pdf;base64,");
      base64 = base64?.[1]
      base64 = decodeURIComponent(base64);
      callbackArgObject = { ...callbackArgObject, file: base64 };
      callbackFunc(callbackArgObject);
    }
  
    reader.onerror = () => { 
      console.log("[Reader] Error") 
    }
  }

export default convertFileToBaset64
