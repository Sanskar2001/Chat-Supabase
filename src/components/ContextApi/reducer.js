export const initialState = {
    basket: [],
    user: {name:" ",email:" "}
  };

export const supabase ={
 supabaseUrl: "https://tolfqltgkpxssndwbypv.supabase.co",
supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbGZxbHRna3B4c3NuZHdieXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2NDIxNzAsImV4cCI6MTk5NTIxODE3MH0.t95wKdPSVbO1rZ6UDef2UyUyR5P6m4faFle0rvgDqRw",
supabase: createClient("https://tolfqltgkpxssndwbypv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbGZxbHRna3B4c3NuZHdieXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2NDIxNzAsImV4cCI6MTk5NTIxODE3MH0.t95wKdPSVbO1rZ6UDef2UyUyR5P6m4faFle0rvgDqRw")
}

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
    
          case "SET_USER":
            return {
              ...state,
              user: action.user
            }
      
     
      default:
        return state;
    }
  };
  
  export default reducer;