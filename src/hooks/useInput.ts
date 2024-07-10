import { ChangeEvent, useEffect, useState } from "react"
import useValidation, { ValidTerms } from "./useValidations"


export const useInput = (initialValue: string, validations: ValidTerms) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value, validations)

    useEffect(() => {
        // Добавляем проверку соответствия паролей, если есть соответствующее правило
        if (validations.passwordMatch) {
            valid.passwordMatchError = value !== validations.passwordMatch;
        }
    }, [value, validations.passwordMatch]);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value)
        if (!isDirty) {
            setIsDirty(true); // Устанавливаем isDirty в true после первого изменения
        }
    }

    const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        setValue,
        onBlur,
        isDirty,
        ...valid
    }
}