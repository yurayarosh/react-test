import axios from 'axios'

 const instance = axios.create({
   baseURL: 'https://react-test-c7da4.firebaseio.com'
 })

 export default instance