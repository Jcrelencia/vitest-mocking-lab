import { getName } from "./user.js";

export async function greet() {
     try {
       const name = await getName();
       return `Hello, ${name}!`;
     } catch (err) {
       return "Error 500";
     }
   }
