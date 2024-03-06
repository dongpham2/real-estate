import background from "../../assets/signin-bg-img.jpg";
// import  "./sign.css"
import {useForm} from 'react-hook-form'
import {DevTool} from "@hookform/devtools"

type FormValues   = {
  username: string;
  password: string;
}

const SignIn = () => {
  const form = useForm<FormValues>()
  const {register, handleSubmit, control, watch, formState :{errors}} =form

  console.log(watch("username"))
  // const username = watch("username")
const onSubmit = (data:FormValues) =>{
  console.log(data)
}
  return <div>
    
    <img src={background} alt="banner" className="bg-cover h-full w-full absolute bg-no-repeat z-auto" />
    <form className="w-full sm:w-[539px] h-full sm:h-4/5 rounded-lg flex-col absolute bg-white p-10" 
    onSubmit={handleSubmit(onSubmit)} noValidate >
      {/* head */}
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <p className="flex-initial">Welcome to </p>
              <a className="flex-initial px-[3px] text-[--orange-primary]">Homez</a>
            </div>
            <div className="flex flex-col">
              <span className="">No Account?</span>
              <a className="text-[--orange-primary]">Sign Up</a>
            </div>
          </div>
        </div>
        {/* Sign in others */}
        <h1 className="font-semibold text-6xl">Sign in</h1>
        <div className="flex py-[54px]">
          <div className="flex-initial h-[55px] w-[298px] bg-[#E9F1FF] rounded-lg text-blue-400">Sign in with Google</div>
          <span className="flex-initial w-[55px] h-[55px] ml-[21px] bg-blue-200">FB</span>
          <span className="flex-initial w-[55px] h-[55px] ml-[21px] bg-blue-200">Apple</span>
        </div>
{/* Input */}
        <h4 className="font-semibold">Enter your username or email address</h4>
        <input className="flex-1 focus:outline-none w-[451px] h-[57px] rounded-lg border-[1px] border-stone-400 hover:border-[#4285F4] pl-7 username" 
          {...register("username", {
              required:"Username or email is required",
              pattern:{
                value:/[a-zA-Z0-9]/,
                message: "Invalid Username"
              },
              validate: (fieldValue) =>{
                return(
                  fieldValue === "fetch user" || "User is not exist"
                )
              }
            }, 
         
          )} placeholder="Username or email address" />
        <p className="text-red-500">{errors.username?.message}</p>
        
        <h4 className="font-semibold">Enter your Password</h4>
        <input className="flex-1 focus:outline-none w-[451px] h-[57px] rounded-lg border-[1px] border-stone-400 hover:border-[#4285F4] pl-7 password" 
          {...register("password", 
            {
              required:"Password is required"
            }
          )} placeholder="Password" />
        <p className="text-red-500">{errors.password?.message}</p>
        <a className="flex justify-end text-blue-400">Forgot Password</a>
        <div className="flex justify-end">
          <input className="flex bg-[--orange-primary] justify-center text-white rounded-lg h-[54px] w-[236px] signin-button" 
            type="submit" value="Sign In" />
        </div>
        
    </form>
    <DevTool control={control} placement="top-left" />
  </div>;
};

export default SignIn;
