import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!supabase.auth.getSession()) {
      navigate("/Login");
    }
  }, [navigate]);
 
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
    </div>
  );
}

export default Home;
