import React from "react";
import "./header.css";


function Header(props) {
  return (
    <div className="row header-row">
        <div className="contenedor-header-fondo">
            <img className="header-fondo"  src="https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/e4914d86-8b68-4360-b0bc-7588c1b14ad3.jpg" alt="header-fondo"/>
        </div>
        <div className="col-md-12 contenedor-header-textos">
            <div className="row brand">
                <img className="brand-img" src="https://press.airbnb.com/wp-content/uploads/sites/4/2017/01/airbnb_horizontal_lockup_white_web.png?fit=2945%2C1321" alt="logo"/>
            </div>
            <div className="row navegacion">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Conviértete en anfitrión</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Ayuda</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="/">Regístrate</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link" href="/">Iniciar sesión</a>
                    </li> 
                </ul>
            </div>
            <div className="row header-info">
                <h1>Planea tu próximo viaje</h1>
                <div className="row header-info-buscador">
                    {props.children}
                </div>
            
            </div>

          {/* <Ver onClick={()=>props.viewBook({...props})}/>   */}

      
        </div>
    </div>
  );
}

export default Header;


