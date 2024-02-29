import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithOtp({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (supabase.auth.getSession()){
      navigate ("/")
    }
  }, [navigate]);

  /* return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button> Send </button>
      </form>
    </div>
  ); */
  return (
    <div className="contenedor">
      <p className="logo">TaleBox</p>
      <div className="login-reg-panel">
        <div className="login-info-box" style={{display: 'none'}}>
          <h2>¿Tienes una cuenta?</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <label id="label-register" htmlFor="log-reg-show">Inicia sesión</label>
        </div>

        <div className="register-info-box">
          <h2>¿No tienes una cuenta?</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <label id="label-login" htmlFor="log-login-show">Regístrate</label>
          <input type="radio" name="active-log-panel" id="log-login-show" />
        </div>

        <div className="white-panel">
          <div className="login-show show-log-panel">
            <h2>Inicia Sesión</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input type="button" value="Confirmar" id="btnLogin" onClick={handleSubmit} />
            </form>
          </div>
          <div className="register-show">
            <h2>Regístrate</h2>
            <input type="button" value="Regístrate" id="btnRegistrarse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
