export interface SignupData {
    phone: string;
  }
  
  export interface VerifyData {
    phone: string;
    otp: string;
  }
  
  export interface ApplicationData {
    firstName: string;
    lastName: string;
    email: string;
    resume: string;
  }