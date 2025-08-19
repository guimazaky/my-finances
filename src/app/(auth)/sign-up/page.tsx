"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";

const Page = () => (
  <div className="flex justify-center items-center bg-gradient w-80 h-120 rounded-lg">
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{ fullName: "", email: "", password: "" }}
      onSubmit={() => {}}
    />
  </div>
);

export default Page;
