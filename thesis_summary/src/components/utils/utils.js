const convertFileToBaset64 = async (file) => {
    if (!file) {
      console.log("[convertFileToBaset64] File arg is not set\n", file);
      return
    } else {
      console.log("[convertFileToBaset64] Start to convert")
    }
  
    const readerPromises = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = async () => {
          try {
            let base64 = reader.result;
            base64 = base64.split("data:application/pdf;base64,");
            base64 = base64?.[1]
            base64 = decodeURIComponent(base64);
            resolve(base64);
          } catch (err) {
            console.log("[Reader] Fail to convert to base64\n", err);
          }
        }
    
        reader.onerror = (err) => { 
          console.log("[Reader] Error\n", err);
          reject(err)
        }

        reader.readAsDataURL(file);
      }
    )

    const result = await Promise.all([readerPromises]);
    console.log("[convertFileToBaset64] Success to convert")
    return result[0];
  }

export default convertFileToBaset64
