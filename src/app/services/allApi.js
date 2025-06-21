import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"



//login
export const loginApi =async(reqBody)=>{
    console.log(reqBody);
    
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}


//sign up
export const registerApi =async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/signup`,reqBody,"")
}

//store-qrcode

export const qrDataApi =async(reqBody,reqHeader)=>{
    
    return await commonApi('POST',`${serverUrl}/store-business`,reqBody,reqHeader)
}

// primary template

export const PrimaryTempApi =async(reqHeader)=>{
    
    
    return await commonApi('GET',`${serverUrl}/get-primarytemplates`,"",reqHeader)
}

//secondary template

export const secondaryTempApi =async(reqHeader)=>{
    
    
    return await commonApi('GET',`${serverUrl}/get-secondarytemplates`,"",reqHeader)
}
// primary temp data send

export const sendtempdata =async(reqBody,reqHeader)=>{
    
    
    return await commonApi('POST',`${serverUrl}/store-primary-order-item`,reqBody,reqHeader)
}

// send scondary temp

export const sendtemptwodata =async(reqBody,reqHeader)=>{
    
    
    return await commonApi('POST',`${serverUrl}/store-secondary-order-item`,reqBody,reqHeader)
}

//shipping address sent

export const shippingAddressApi =async(reqBody,reqHeader)=>{
    
    
    return await commonApi('POST',`${serverUrl}/store-shipping-address`,reqBody,reqHeader)
}

//payment verification
export const paymentVerificationApi =async(reqBody,reqHeader)=>{
    
    
    return await commonApi('POST',`${serverUrl}/verify-payment`,reqBody,reqHeader)
}








