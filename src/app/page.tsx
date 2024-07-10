'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "@/store/store";
import { login, register } from "@/store/slices/auth";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const error = useSelector((state: AppState) => state.auth.error);
  const loading = useSelector((state: AppState) => state.auth.loading);
  const token = useSelector((state: AppState) => state.auth.token);

  const dispatch = useDispatch<AppDispatch>();

  const handleRegister = (email: string, password: string) => {
    dispatch(register({ email, password }));
  };

  const handleLogin = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  return (
    <main className={styles.main}>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!token && (
          <div>
            <h2>Register</h2>
            <button onClick={() => handleRegister('test@example.com', 'password123')}>
              Register
            </button>
            <h2>Login</h2>
            <button onClick={() => handleLogin('test@example.com', 'password123')}>
              Login
            </button>

          </div>
        )}
        {token && <p>Token: {token}</p>}
      </div>
      <button onClick={() => router.push('auth/authorization')}>
        to auth
      </button>
      <button onClick={() => router.push('auth/registration')}>
        to reg
      </button>
    </main>
  );
}
