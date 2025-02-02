"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { GROUP_CONSTANTS } from "@/constants";


type SignInFormValues = {
  email: string;
  password: string;
};

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const SignInForm = () => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    console.log("Form data", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-10">
        {GROUP_CONSTANTS.signInForm.map((field) => (
          <FormField
            key={field.id}
            control={form.control}
            name={field.name as keyof SignInFormValues} 
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label || field.name}</FormLabel> 
                <FormControl>
                  {field.type === "email" || field.type === "password" || field.type === "text" ? (
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...formField} 
                    />
                  ) : null}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="w-full rounded-full">
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
