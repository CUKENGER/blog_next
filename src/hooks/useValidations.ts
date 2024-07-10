import { useEffect, useState } from "react"

export interface ValidTerms{
  isEmpty?:boolean;
  minLength?: number;
  isEmail?: boolean;
  passwordMatch?: string
}

const useValidation = (value: string, validations: ValidTerms) => {

  const [isEmpty, setIsEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordMatchError, setPasswordMatchError] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch(validation) {
        case 'isEmpty':
          value.trim() ? setIsEmpty(false) : setIsEmpty(true)
          break
        case 'minLength':
          if(validations.minLength !== undefined) {
            value.length >= validations.minLength ? setMinLengthError(false) : setMinLengthError(true)
          }
          break
        case 'isEmail':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          emailRegex.test(value) ? setEmailError(false) : setEmailError(true)
          break;
        case "isPasswordMatch":
          if(validations.passwordMatch !== undefined) {
            value === validations.passwordMatch ? setPasswordMatchError(false) : setPasswordMatchError(true)
          }
          break
        default:
          break
      }
    }
  }, [value, validations])

  return {
    isEmpty,
    minLengthError,
    emailError,
    passwordMatchError
  }
}

export default useValidation