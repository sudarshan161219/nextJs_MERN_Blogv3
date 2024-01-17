import NextAuth from "next-auth";
import { authOptions } from "../../../../utils/auth.js";

export default NextAuth(authOptions);
