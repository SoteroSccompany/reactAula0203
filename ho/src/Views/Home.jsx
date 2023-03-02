import { useContext } from "react"
import { AuthContext } from "../Context"


const Home = () => {

    const { states } = useContext(AuthContext)


    return(
        <div>
            <h1>{states.name}</h1>
        </div>
    )

}

export default Home