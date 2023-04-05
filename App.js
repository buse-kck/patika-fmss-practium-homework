import axios from "axios";

async function getData(id){
  const {data:users} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
  const {data:post1}= await axios(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
  
  const userandpost1 = {
    users, post1
  }
  console.log(userandpost1)
} 
 getData(1);

export default getData;
