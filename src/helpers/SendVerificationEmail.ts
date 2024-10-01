import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string,

):Promise<ApiResponse>{

    try {

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'hello world',
            react: VerificationEmail({username,otp:verifyCode})
          });
          
        return {
            success:true,
            message:"verification email send successfully"
        }        
    } catch (emailErrors) {
        console.error("Error sending verification email",emailErrors)
        return {
            success:false,
            message:"Failed to send verification email"
        }
    }
}