import { AuthFormProps, SIGN_IN_FORM } from "./forms";
import { LANDING_PAGE_MENU, MenuProps } from "./menus";

type ConstantPros = {
    landingPageMenu: MenuProps[],
    signInForm: AuthFormProps[]
}

export const GROUP_CONSTANTS: ConstantPros = {
    landingPageMenu: LANDING_PAGE_MENU,
    signInForm: SIGN_IN_FORM,
}