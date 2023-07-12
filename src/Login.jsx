// import React, { useState } from "react";
// import { useKeycloak } from "@react-keycloak/web";

// const Login = () => {
//     const {keycloak} = useKeycloak();
//     const [username,setUsername] = useState("");
//     const [password,setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try{
//             await keycloak.login({
//                 username,
//                 password,
//             })
//         }catch(error){
//             window.alert("Login Failure");
//         }
//     };

//     return ( <div>
//         <form onSubmit={handleSubmit} >
//             <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//             <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//             <button type="submit" >Log in</button>
//         </form>
//     </div> );
// }
 
// export default Login;