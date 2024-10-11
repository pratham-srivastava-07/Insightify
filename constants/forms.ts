export type AuthFormProps = {
    id: string
    type: "email" | "text" | "password"
    inputType: "select" | "input"
    options?: { value: string; label: string; id: string }[]
    label?: string
    placeholder: string
    name: string
  }

  export const SIGN_IN_FORM: AuthFormProps[] = [
    {
      id: "1",
      inputType: "input",
      placeholder: "Email",
      name: "email",
      type: "email",
    },
    {
      id: "2",
      inputType: "input",
      placeholder: "Password",
      name: "password",
      type: "password",
    },
  ]