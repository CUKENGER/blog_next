
import styles from './styles.module.scss'
import React, { ChangeEvent, FC } from 'react';

interface InputStringProps{
  setValue: (e:string) => void;
  value: string;
  isRequired?: boolean;
  isPassword?: boolean;
  placeholder?: string
}

const InputString: FC<InputStringProps> = ({setValue, value, isRequired=true, isPassword=false, placeholder}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <input 
      type={isPassword ? 'password' : 'text'} 
      className={styles.input}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      required={isRequired}
      placeholder={placeholder}
    />
  );
}

export default InputString;
