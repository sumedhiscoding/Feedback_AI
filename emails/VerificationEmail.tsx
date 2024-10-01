import React from 'react'
import {
  Html,Head,Font,Preview,Heading,Row,Text
} from "@react-email/components"
 interface VerificationEmailProps{
    username:string,
    otp:string
}

const VerificationEmail = ({username,otp}:VerificationEmailProps) => {
  return (
   <Html lang='en' dir='ltr'>
    <Head>
      <title>Verification Email</title>
      <Font 
      fontFamily='Roboto'
      fallbackFontFamily={'Arial'}
      fontWeight={400}
      fontStyle='normal'
      
      />
    </Head>
    <Preview>Heres your verification Code : {otp}</Preview>
    <Row><Heading as="h2">Hello {username},</Heading></Row>
    <Row><Text>Thank you for Registering please use the following code for registration</Text></Row>
    <Row><Text>{otp}</Text></Row>
    
    
    
      </Html>
  )
}

export default VerificationEmail