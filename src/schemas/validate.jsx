import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/; 
const phoneRules = /^\+?[0-9]{10,}$/
export const basicSchema = yup.object().shape({
    name: yup
    .string()
    .min(5, "El nombre debe tener minimo 5 caracteres.").
    required("Requerido"),

    lastname: yup
    .string()
    .min(5, "El apellido debe tener minimo 5 caracteres.")
    .required("Requerido"),
    
    email: yup
    .string()
    .email("Por favor ingrese un email valido")
    .required("Requerido"),
    
    telefono:yup
    .string()
    .min(5, "El numero debe tener minimo 5 caracteres.")
    .max(20, "El numero debe tener maximo 20 caracteres.")
    .matches(phoneRules,{"message":"Solo puede ingresar numeros del 0 al 9."})
    .required("Requerido"),
    
    password: yup
    .string()
    .min(5, "La contraseña debe tener minimo 5 caracteres.")
    .matches(passwordRules,{"message":"Cree una contraseña mas segura."})
    .required("Requerido"),
    
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir").required("Requerido")
})