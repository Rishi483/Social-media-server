const success=(statusCode,result)=>{
    return {
        status:'ok',
        statusCode,
        result.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']),
        result
    }
}
const error=(statusCode,message)=>{
    return {
        status:'error',
        statusCode,
        message
    }
}
module.exports={success,error};
