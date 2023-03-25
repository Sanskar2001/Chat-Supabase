//https://tolfqltgkpxssndwbypv.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbGZxbHRna3B4c3NuZHdieXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2NDIxNzAsImV4cCI6MTk5NTIxODE3MH0.t95wKdPSVbO1rZ6UDef2UyUyR5P6m4faFle0rvgDqRw

import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
export const supabase = createClient('https://tolfqltgkpxssndwbypv.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbGZxbHRna3B4c3NuZHdieXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2NDIxNzAsImV4cCI6MTk5NTIxODE3MH0.t95wKdPSVbO1rZ6UDef2UyUyR5P6m4faFle0rvgDqRw');
export function signUpWithEmailAndPassword(userEmail,userPassword)
{
    const {data,error}=supabase.auth.signUp(
        {
          email: userEmail,
          password: userPassword
        }
      ).then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log(error);
      })

      console.log(data);
}
export function signInWithEmailAndPassword(userEmail,userPassword)
{
    const {data,error}=supabase.auth.signUp(
        {
          email: userEmail,
          password: userPassword
        }
      ).then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log(error);
      })

      console.log(data);
}

export async function loginWithEmailAndPassword(userEmail,userPassword)
{
   const {data,error}=await supabase.auth.signInWithPassword({
    email: userEmail,
    password: userPassword
  }).then((data)=>{
    
    console.log(data);
    return data;
    
  }).catch((error)=>{
    console.log("This is error: ");
  })
  console.log("Error: "+error);
}