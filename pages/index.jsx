"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MdMailOutline as MailIcon,
  MdOutlineRemoveRedEye as HiddenIcon,
  MdRemoveRedEye as ShowIcon,
} from "react-icons/md";
import { FaApple as AppleIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <main className="flex items-center justify-center w-lvw h-lvh">
      <div className="flex flex-col items-center bg-contentBg py-8 px-4 rounded-md shadow shadow-zinc-800 border border-zinc-800">
        <div className="border border-zinc-800 bg-contentBg p-2 w-14 h-14 flex items-center justify-center rounded-md shadow-lg">
          <p className="font-logoFont text-3xl">dk</p>
        </div>

        <h2 className="mt-8 text-2xl">Welcome Back</h2>
        <span className="mt-2 text-sm text-zinc-500">
          Don&apos;t have an account yet?{" "}
          <button className="text-sm font-semibold text-white">Sign up</button>
        </span>

        <div className="flex items-center bg-background mt-8 py-2.5 px-4 w-full min-w-80 rounded border border-zinc-800">
          <MailIcon className="text-zinc-400 text-xl" />
          <input
            className="bg-inherit text-zinc-400 placeholder-zinc-600 ml-3 text-sm w-full"
            type="email"
            placeholder="email address"
          />
        </div>

        <div className="flex items-center bg-background mt-2 py-2.5 px-4 w-full min-w-80 rounded border border-zinc-800">
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <ShowIcon className="text-zinc-400 text-xl" />
            ) : (
              <HiddenIcon className="text-zinc-400 text-xl" />
            )}
          </button>

          <input
            className="bg-inherit text-zinc-400 placeholder-zinc-600 ml-3 text-sm w-full"
            type={showPassword ? "text" : "password"}
            placeholder="••••••"
          />
        </div>

        <button
          onClick={handleLogin}
          className="text-center text-sm font-semibold transition bg-indigo-600 hover:bg-indigo-800 mt-6 p-2 w-full min-w-80 rounded border border-indigo-800"
        >
          Login
        </button>

        <div className="flex items-center justify-center my-6 w-full gap-2">
          <hr className="border flex-1 border-zinc-800" />
          <span className="text-sm font-bold text-zinc-600">OR</span>
          <hr className="border flex-1 border-zinc-800" />
        </div>

        <div className="grid grid-cols-2 gap-x-2.5 w-full">
          <button className="flex items-center justify-center p-2 rounded bg-detailBg shadow shadow-zinc-800 border border-zinc-800">
            <AppleIcon className="text-white" />
          </button>
          <button className="flex items-center justify-center p-2 rounded bg-detailBg shadow shadow-zinc-800 border border-zinc-800">
            <GoogleIcon className="text-white" />
          </button>
        </div>
      </div>
    </main>
  );
}
