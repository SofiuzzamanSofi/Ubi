import { authOptions } from "@/workZone/components/libZone/authFn";
import NextAuth from "next-auth/next";

export default NextAuth(authOptions)