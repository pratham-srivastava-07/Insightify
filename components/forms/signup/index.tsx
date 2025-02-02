"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { GROUP_CONSTANTS } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input"; // Import Input from your UI library
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
};

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function SignUpForm() {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-10">
        {GROUP_CONSTANTS.signUpForm.map((field) => (
          <FormField
            key={field.id}
            control={form.control}
            name={field.name as keyof SignupFormValues} 
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label || field.name}</FormLabel>
                <FormControl>
                  {field.type === "email" || field.type === "password" || field.type === "text" ? (
                    <Input
                      className="rounded-full"
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

       <div className="pt-5">
          <Button type="submit" className="w-full rounded-full">
            Sign Up
          </Button>
       </div>
      </form>
    </Form>
  );
}

export default SignUpForm;
