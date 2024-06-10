import React from 'react'
import { useForm } from "react-hook-form"
import { Input } from '../Components/index';
function SignIn() {

  const { register, handleSubmit } = useForm();
  const login = async (data) => {
    console.log(data);
  }
  return (

    <>

      <div className="w-80 min-h-96 rounded-lg p-6 border-black border-2 md:w-96 md:min-h-80">
        <div className="flex flex-col items-center">
          <form action="submit" onSubmit={handleSubmit(login)} className="w-full">
            <h1 className="text-3xl font-bold text-center mb-6 md:text-2xl md:mb-4">Sign In</h1>
            <div className="mb-6 md:mb-4">

              <Input
                laberClass={"inline-block mb-1 pl-1 text-lg font-bold  md:text-base"}
                label={"Email"}
                placeholder={"Enter the valid Email"}
                type={"email"}
                id={"email"}
                className={"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-sm md:px-3 md:py-1.5"}
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  }
                })} />
            </div>
            <div className="mb-6 md:mb-4">


              <Input
                laberClass= {"block text-lg font-semibold mb-2 md:text-base "}
                label={"Password"}
                type="password"
                placeholder="Enter the Paasword"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-sm md:px-3 md:py-1.5"
                {...register("password", {
                  required: true,
                })} />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors md:text-sm md:py-1.5">Sign In</button>
          </form>
        </div>
      </div>



    </>
  )
}

export default SignIn