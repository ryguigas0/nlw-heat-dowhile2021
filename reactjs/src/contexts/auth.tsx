// Context -> send data across all components inside this component
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode
}

type AuthResponse = {
    token: string,
    user: {
        id: string,
        avatar_url: string,
        name: string,
        login: string
    }
}

type User = {
    id: string,
    login: string,
    avatar_url: string,
    name:string
}

type AuthContextData = {
    user: User | null // If its not authenticated do null
    signInURL: string,
    signOut: () => void // No args and no return function
}

export function AuthProvider(props: AuthProvider) {

    const [user, updateUser] = useState<User | null>(null)

    const signInURL = `https://github.com/login/oauth/authorize?scope=user&client_id=7998de5b6b7e13c3d51a`

    async function signIn(githubCode: string) {
        
        const response = await api.post<AuthResponse>("authenticate", {
            code: githubCode
        })
        
        const { token, user } = response.data
        
        localStorage.setItem("@dowhile:token", token) // Even when user closes the browser, the token is there

        api.defaults.headers.common.authorization = `Bearer ${token}`

        updateUser(user)
    }

    function signOut(){
        updateUser(null)
        localStorage.removeItem("@dowhile:token")
    }

    // Get user from token in browser storage
    useEffect(() => {
        const token = localStorage.getItem("@dowhile:token")

        if (token) {
            // Places the authorization token for accessing user profile
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get("profile").then(resp => updateUser(resp.data as User))
        }
    }, [])

    // Get user from code in url
    useEffect(() => {
        const url = window.location.href
        const hasGithubCode = url.includes('?code=')

        if (hasGithubCode) {
            const [urlWithoutCode, userCode] = url.split('?code=')

            window.history.pushState({}, '', urlWithoutCode)

            signIn(userCode)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signInURL, user, signOut }}>
            { props.children}
        </AuthContext.Provider >
    )
}
