import useUser from "../../hooks/useUser"
import { useNavigate } from "react-router-dom"
import {  useEffect } from "react"

const onRedirecting = () => {
    <>
        <div>
            <h1>
                Redirecting you to the login page...
            </h1>
        </div>
    </>
}

const withRedirectIfAuth = (Component, options) => {
    return (props) => {
        const { user, isLoading} = useUser()
        const {redirectTo} = options
        const navigate = useNavigate()
        
        useEffect(() => {
            if (!user || isLoading) return
            let redirectPath;
            if (redirectTo) {
                redirectPath = redirectTo
            } else {
                redirectPath = "/dashboard"
            }
            navigate(redirectPath)
        },[user, isLoading]
        )

        if (isLoading) return <div>Loading...</div>
        if (!user) return <Component user={user} {...props} />

        return onRedirecting()
    }
}

export default withRedirectIfAuth;