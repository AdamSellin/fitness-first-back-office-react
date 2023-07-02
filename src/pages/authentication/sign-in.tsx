import { Button, Card, Label, TextInput } from "flowbite-react";

import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useRef } from 'react';
import { Toast } from 'primereact/toast';

import { authService } from "../../services";

import type { FC } from "react";

const SignInPage: FC = function () {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);
  const { register, handleSubmit, formState } = useForm();

  function onSubmit(data: any) {
    authService.login(data.email, data.password)
      .then((response: any) => {
        if (response.data.data.user.role === 'ADMIN') {
          toast.current?.show({severity:'success', summary: 'Success', detail:'You are logged in', life: 3000});
          localStorage.setItem('token', response.data.data.token.access.token);
          console.log(response);
          navigate('/');
        } else {
          toast.current?.show({ severity: 'error', summary: 'Error', detail: 'You are not authorized to access this page', life: 3000 });
          return;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 h-screen lg:gap-y-12">
      <Toast ref={toast} />
      <Card
        horizontal
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Sign In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              placeholder="name@company.com"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              placeholder="••••••••"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-full lg:w-auto" disabled={formState.isSubmitting}>
              {formState.isSubmitting && 
                <span className="text-white font-medium text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center">
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Loading...
                </span>
              }
              Login to your account
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignInPage;
