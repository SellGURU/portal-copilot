import { Auth } from "@/api"
import { useApp } from "@/hooks"
import { useNavigate } from "react-router-dom"

const Login  = () => {
    const appContext= useApp()
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <button onClick={() => {
                    Auth.login().then(res => {
                        appContext.login(res.data.token)
                        navigate('/')
                    })
                }} className="w-[200px] text-white text-[12px] h-[40px] bg-blue-500">login</button>
            </div>
        </>
    )
}

export default Login