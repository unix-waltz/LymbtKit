
const setCookie = (res,token)=>{
 return  res.cookie("refreshToken", token, {
        path: "/",
        maxAge:24 * 60 * 60 * 1000,
        sameSite: "strict",
        httpOnly: true,
        // secure: true,
      });
}
export default setCookie