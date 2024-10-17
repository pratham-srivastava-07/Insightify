import { AuthFormProps, SIGN_IN_FORM, SIGN_UP_FORM } from "./forms";
import { GROUP_TEMPLATES, LANDING_PAGE_MENU, MenuProps } from "./menus";
import { GROUP_PLACEHOLDER, PlaceholderProps } from "./place";

type ConstantPros = {
    landingPageMenu: MenuProps[],
    signInForm: AuthFormProps[],
    signUpForm: AuthFormProps[],
    groupPlaceholder: PlaceholderProps[]
    templates: MenuProps[]
}

export const GROUP_CONSTANTS: ConstantPros = {
    landingPageMenu: LANDING_PAGE_MENU,
    signInForm: SIGN_IN_FORM,
    signUpForm: SIGN_UP_FORM,
    groupPlaceholder: GROUP_PLACEHOLDER,
    templates: GROUP_TEMPLATES
}

// /constants/index.ts
