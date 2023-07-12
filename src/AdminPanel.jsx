import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";
import axios from "axios";

// let token = sessionStorage.getItem("authentication");
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJYeG5sV3V2eDdyQldpZkRqTjJxUDktanNTcDQwOVpodVJDYXR2ek9jSjhzIn0.eyJleHAiOjE2ODkxNjA0NjIsImlhdCI6MTY4OTE2MDE2MiwiYXV0aF90aW1lIjoxNjg5MTYwMTYxLCJqdGkiOiJkMDQ1M2I0Yi1jOWMxLTQ1MTItYTQ1YS04ZWVlYmViYjNlZDAiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL2Jhc3N1cmUiLCJhdWQiOiJhdHMtb2lkYyIsInN1YiI6IjNiYzg4ZDkwLTBmMTgtNGZkNy1hOTg3LWY0MWI1ZDBlN2ZjOSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImF0c1JlYWN0Iiwibm9uY2UiOiI3OGIzYmQ2Ni1lZDlhLTQwZTMtYmRiMS1lMzQzOWM0ZjRmODgiLCJzZXNzaW9uX3N0YXRlIjoiM2Q4MDEzMWUtNjcxOS00Mzk5LThlOTEtNDI5YTQyMTJlNDk3IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVzb3VyY2VfYWNjZXNzIjp7ImF0cy1vaWRjIjp7InJvbGVzIjpbImFkbWluIl19LCJhdHNSZWFjdCI6eyJyb2xlcyI6WyJhZG1pbiJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiIzZDgwMTMxZS02NzE5LTQzOTktOGU5MS00MjlhNDIxMmU0OTciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByb2ZpbGUiOiJodHRwczovL2ltZy5mcmVlcGlrLmNvbS9wcmVtaXVtLXBob3RvL2JsdWUtd2F0ZXJfNjkzNTg4LTM1NS5qcGciLCJuYW1lIjoic2FtIGViaSIsInByZWZlcnJlZF91c2VybmFtZSI6InNhbSIsImdpdmVuX25hbWUiOiJzYW0iLCJmYW1pbHlfbmFtZSI6ImViaSIsImVtYWlsIjoic2FtQGdtYWlsLmNvbSJ9.Nm93CJvz95s23kbAXdyA5gMj7Dit4jJLrGiEmWqbwyomPH_3KIRfr0kZQLlTp-AIDrYJXDiFAadlHDE-ywhQwd4kvvu5H2lOouNvrp32AHJFF94VoNz9rUUbAuJB9DRqhcHRs5i6t_UaZBs_9Au9QYf3D-kLGY55b6EfhsCaPsg7XMIdLXti-8VGna6ut7l37zWtI6F2S0Gr_3dXvxB085RBVNzkFZZ9FMC-jsvkRooxba7yzSZIo9gWCXrLJUQxZtqiStQ_dnzl0s079OK6LCn2od2YdkE0TwifYI04PIC07xMjRvDiKgnDmYGF2D1QcwOBsVeUnCpSx5htN9ofgQ";
// axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// axios.defaults.headers.common["Accept"] = "*/*";

const AdminPanel = () => {
  const { logout } = useContext(UserContext);
  const [data, setData] = useState("");

  // useEffect(() => {
  //   // let headers = {
  //   //   Accept: "application.json",
  //   //   Authorization: "Bearer " + token,
  //   // };
  //   // console.log(token);
  //   console.log("useeffect")
  //   try {
  //     let resp = axios
  //       .get("http://localhost:8085/admin/get")
  //       .then((resp) => setData(resp.data));
  //     console.log(resp);
  //   } catch (error) {

  //     console.log("error"+error);
  //   }
  // }, []);

  const apiCall = async () => {
    console.log("api call");
    // let resp = http
    //   .get(`${apiUrl}/admin/get`)
    //   .then((resp) => setData(resp.data));
    // console.log(resp);

    await axios
      .get("http://localhost:8085/admin/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // mode: "no-cors",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={apiCall}>Admin login</button>
      <h1>logged in as admin {data}</h1>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

export default AdminPanel;
