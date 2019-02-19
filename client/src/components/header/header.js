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
                <img className="brand-img" src="https://banner2.kisspng.com/20180404/xwe/kisspng-le-case-del-borgantico-apartment-airbnb-renting-im-logo-5ac51890bd2641.9030904215228663207748.jpg" alt="logo"/>
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


