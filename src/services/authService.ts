import API from "@/http/api";
import { redirect } from "next/dist/server/api-utils";
import { toast } from "react-toastify";
 interface RegisterUserParams {
    name: string;
    surname: string;
    nickname: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  interface LoginUserParams {
    email: string;
    password: string;
  }
export default async function AuthRegisterService({name,surname,nickname,email,password,confirmPassword} : RegisterUserParams){
    const userData = {
        name,
        surname,
        nickname,
        email,
        password,
        confirmPassword
    }
    try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${API.register}`,
          {
            method: 'POST',
            ...config,
            body: JSON.stringify(userData),
          },
        );
        if (response.status === 400) {
          console.log(response)
        }
        else if (response.ok) {
          return response.json()
        }
      } catch (error) {
        console.log(error)
      }
}




export const authLoginService  = async function({email,password} : LoginUserParams){
    const loginData = {
        email,
        password
    }
    try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}${API.login}`,
          {
            method: 'POST',
            ...config,
            body: JSON.stringify(loginData),
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          console.log(errorData)
        }
        else{
          const data = await response.json();
          localStorage.setItem('userToken',data.token)
          return data
        }
      } catch (error) {
        console.log(error);
        
      }
}


