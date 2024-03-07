import background from "../../assets/signin-bg-img.jpg";
import logo from "../../assets/logoM.png";
import {useForm} from 'react-hook-form'
import {DevTool} from "@hookform/devtools"
import { FacebookIcon, AppleIcon, GoogleIcon} from "../../assets/icons/icons";
import { Link  } from "react-router-dom";
import { Button } from "../../components/Button";

interface SignInFormTypes {
  username: string;
  password: string;
}

const SignIn = () => {
  // const navigate = useNavigate();
  const form = useForm<SignInFormTypes>()
  const {register, handleSubmit, control, watch, formState :{errors}} =form

  const username = watch("username")
  const password = watch("password")
  const onSubmit = (data:SignInFormTypes) =>{
    username === data.username && password === data.password ? "": ""

  }

  return <div className="flex">
    {/* bg-cover h-full w-full absolute bg-no-repeat z-auto */}
    <img src={background} alt="banner" className=" bg-cover block overflow-hidden  h-full w-full absolute bg-no-repeat z-auto" />
    <div className="hidden absolute sm:flex top-[3%] left-[2%] flex items-center mr-2">
      <img alt="logo" src={logo} className=" p-2 mr-2 rounded-2xl bg-orange-primary"/>
      <h3 className="text-base font-semibold sm:text-xl">homez</h3>
    </div>
    
    <form className="w-full sm:w-[539px] h-full sm:h-auto rounded-lg flex-col absolute bg-white p-10 bg-opacity-[75%] right-0 sm:top-[10%] sm:mr-[5%]" 
    onSubmit={handleSubmit(onSubmit)} noValidate >
      {/* head */}
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <p className="flex-initial text-[22px] font-medium">Welcome to </p>
              <Link to="/home" className="flex-initial px-[3px] text-[22px] font-medium text-orange-primary">Homez</Link>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px]">No Account?</span>
              <Link to="/signup" className="text-orange-primary text-[14px]">Sign Up</Link>
            </div>
          </div>
        </div>
        {/* Sign in others */}
        <h1 className="font-semibold text-5xl">Sign in</h1>
        <div className="flex py-14 justify-between">
          <Button className="flex h-[55px] w-[298px] bg-[--google-button-background] font-medium rounded-lg text-blue-400 items-center justify-center">
            <GoogleIcon/>
            Sign in with Google
            </Button>
            <Button className="flex w-[55px] h-[55px] justify-center items-center bg-white">
              <FacebookIcon/>
            </Button>
            <Button className="flex w-[55px] h-[55px] justify-center items-center bg-white">
              <AppleIcon/>
            </Button>
        </div>
{/* Input */}
        <h4 className="font-medium pb-3 text-base sm:text-xl">Enter your username or email address</h4>
        <input className="flex-1 focus:outline-none w-full h-[57px] rounded-lg border-[1px] border-[--border-color] hover:border-[#4285F4] pl-7 text-base sm:text-xl" 
          {...register("username", {
              required:"Username or email is required",
              pattern:{
                value:/^[a-zA-Z0-9]/,
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
        
        <h4 className="font-medium pt-11 pb-3 text-base sm:text-xl">Enter your Password</h4>
        <input className="flex-1 focus:outline-none w-full h-[57px] rounded-lg border-[1px] border-stone-400 hover:border-[#4285F4] pl-7 text-base sm:text-xl" 
          {...register("password", 
            {
              required:"Password is required"
            }
          )} placeholder="Password" />
        <p className="text-red-500">{errors.password?.message}</p>
 {/* Forgot password */}
        <div className="flex justify-end mb-10">
          <Button className="flex justify-end font-medium text-blue-400 mt-3 text-base sm:text-xl hover:bg-transparent">Forgot Password</Button>
        </div>
{/* Submit */}
        <div className="flex justify-end">
          <input className="flex bg-[--orange-primary] bg-opacity-100 justify-center text-white rounded-lg h-[54px] w-[236px] text-base sm:text-xl hover:bg-[--hover-orange-primary]" 
            type="submit" value="Sign In" />
        </div>
    </form>
    <DevTool control={control} placement="top-left" />
  </div>;
};

export default SignIn;
