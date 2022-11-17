import axios from "axios";


export function postUser(payload) {
   
      const Config = {
        method: "post",
        baseURL: 'http://localhost:3001/users',
        data: {
          email: payload.email,
          name: payload.username,
          number: payload.number,
        },
        crossdomain: true
      };
      console.log('confi', Config.data)
        axios(Config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
  
  export function getUsers(){
      return async function (dispatch){
          var json = await axios.get("http://localhost:3001/users/get")
          return dispatch ({
              type: 'GET_USERS',
              payload: json.data
          })
      }
  }