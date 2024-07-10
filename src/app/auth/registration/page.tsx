'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import { useInput } from '@/hooks/useInput'
import InputString from '@/components/InputString'

export default function RegistrationPage() {

  const email = useInput('', {isEmpty: true , isEmail: true})
  const login = useInput('', { isEmpty: true, minLength: 5})
  const password = useInput('', {isEmpty: true, minLength: 8})
  const repeatPassword = useInput('', {isEmpty: true,passwordMatch: password.value, minLength: 8})

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_title}>
          Registration
        </div>
        <form className={styles.form}>
          <InputString
            setValue={email.setValue}
            value={email.value}
            placeholder='example@email.com'
          />
          {email.isEmpty && (<p>empty</p>)}
          {email.emailError && (<p>emailError</p>)}
          <InputString
            setValue={login.setValue}
            value={login.value}
            placeholder='Your login'
          />
          {login.isEmpty && (<p>empty</p>)}
          {login.minLengthError && (<p>length</p>)}
          <InputString
            setValue={password.setValue}
            value={password.value}
            isPassword={true}
            placeholder='Password'
          />
          {password.isEmpty && (<p>empty</p>)}
          {password.minLengthError && (<p>length</p>)}
          <InputString
            setValue={repeatPassword.setValue}
            value={repeatPassword.value}
            isPassword={true}
            placeholder='Repeat password'
          />
          {repeatPassword.isEmpty && (<p>empty</p>)}
          {repeatPassword.minLengthError && (<p>length</p>)}
          {!repeatPassword.passwordMatchError && (<p>passMatch</p>)}
          <button type='submit' className={styles.btn}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}