import background from "../../assets/signin-bg-img.jpg";
import logo from "../../assets/logoM.png";
import {useForm} from 'react-hook-form'
import {DevTool} from "@hookform/devtools"
import { FacebookIcon, AppleIcon, GoogleIcon} from "../../assets/icons/icons";
import { Link  } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

interface SignInFormTypes {
  username: string;
  password: string;
}

const SignIn = () => {
  const form = useForm<SignInFormTypes>()
  const {register, handleSubmit, control, watch, formState :{errors}} =form

  const username = watch("username")
  const password = watch("password")
  const onSubmit = (data:SignInFormTypes) =>{
    username === data.username && password === data.password ? "": ""

  }

  return <div className="flex">
    <img src={background} alt="background" className="bg-cover block overflow-hidden h-full w-full absolute bg-no-repeat z-auto" />
    <div className="hidden absolute sm:flex top-[3%] left-[2%] items-center mr-2">
      <img alt="logo" src={logo} className=" p-2 mr-2 rounded-2xl bg-orange-primary"/>
      <h3 className="text-base font-semibold sm:text-xl">Homez</h3>
    </div>
    
    <form className="w-full sm:w-[539px] h-full sm:h-auto rounded-lg flex-col absolute bg-white p-10 bg-opacity-[75%] right-0 sm:top-[10%] sm:mr-[5%]" 
    onSubmit={handleSubmit(onSubmit)} noValidate >
      {/* head */}
        <div className="flex justify-between">
          <div className="flex">
            <p className="flex-initial text-2xl font-medium">Welcome to </p>
            <Link to="/home" className="flex-initial px-[3px] text-2xl font-medium text-orange-primary">Homez</Link>
          </div>
          <div className="flex flex-col">
            <span className="text-base">No Account?</span>
            <Link to="/signup" className="text-orange-primary text-base">Sign Up</Link>
          </div>
        </div>
        {/* Sign in others */}
        <h1 className="font-semibold text-5xl">Sign in</h1>
        <div className="flex py-14 justify-between gap-2">
          <Button className="flex px-14 py-4 bg-[--blue-primary] font-medium text-blue-400 items-center justify-center">
            <GoogleIcon/>
            <span className="pl-2">Sign in with Google</span>
          </Button>
          <Button size="mdIcon" variant="light">
            <FacebookIcon/>
          </Button>
          <Button size="mdIcon" variant="light">
            <AppleIcon/>
          </Button>
        </div>
{/* Input */}
        <h4 className="font-medium pb-3 text-base sm:text-xl">Enter your username or email address</h4>
        <Input className="h-14 border-[1px] hover:border-[--hover-border] pl-7 text-base sm:text-xl" 
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
        <Input className="h-14 border-[1px] hover:border-[--hover-border] pl-7 text-base sm:text-xl" 
          {...register("password", 
            {
              required:"Password is required"
            }
          )} placeholder="Password" />
        <p className="text-red-500">{errors.password?.message}</p>
 {/* Forgot password */}
        <div className="flex justify-end mb-10">
          <Button className="flex justify-end font-medium text-blue-400 hover:text-blue-300 mt-3 text-base sm:text-xl hover:bg-transparent">Forgot Password</Button>
        </div>
{/* Submit */}
        <div className="flex justify-end">
          <Input className="flex bg-[--orange-primary] bg-opacity-100 justify-center text-white rounded-lg h-[54px] w-[236px] text-base sm:text-xl hover:bg-[--hover-orange-primary]" 
            type="submit" value="Sign In" />
        </div>
    </form>
    <DevTool control={control} placement="top-left" />
  </div>;
};

export default SignIn;
