import React from "react";
import "./menusecundario.css";


function MenuSecundario(props) {
  return (
    <div className="gridA">
        <h3 className="tituloseccion">{props.titulo}</h3>
        <div className="row menu-secundario-span">
            <div className="col-sm-5 col-menusecundario">
                 <img className="menusecundario-imagen"  src="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="menu-alojamientos"/> 
            </div>
            <div className="col-sm-6 col-menusecundario">
                <button className="menusecundario-boton">Alojamientos</button>
            </div>
        </div>
        <div className="row menu-secundario-span">
            <div className="col-sm-5 col-menusecundario">
                 <img className="menusecundario-imagen"  src="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="menu-alojamientos"/> 
            </div>
            <div className="col-sm-6 col-menusecundario">
                <button className="menusecundario-boton">Experiencias</button>
            </div>
        </div>
        <div className="row menu-secundario-span">
            <div className="col-sm-5 col-menusecundario">
                 <img className="menusecundario-imagen"  src="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?t=r:w375-h250-sfit,e:fjpg-c80" alt="menu-alojamientos"/> 
            </div>
            <div className="col-sm-6 col-menusecundario">
                <button className="menusecundario-boton">Restaurantes</button>
            </div>
        </div>
        <br/><br/><br/><br/><br/>
        <div className="gridAint1">
            <h3 className="tituloseccion">{props.titulo2}</h3>
            <p className="subtituloseccion">Una nueva selección de alojamientos de calidad y comodidad verificadas</p>
            <div className="gridAint1int2">
                <img className="menusecundario-imagen2" src="https://a0.muscache.com/4ea/air/v2/pictures/ea6285d9-5352-4447-b13d-b39bfc92dfe5.jpg?t=c:w1131-h343,r:w1131-h343-sfit,e:fjpg-c75" alt="menu-plus"/> 
                <div className="gridAint1int2int1">
                    <img className="menusecundario-imagen3" src="http://lupiphoto.com/wp-content/uploads/2018/03/Capture-1-1-300x150.jpg" alt="menu-plus-logo"/> 
                    <button className="menusecundario-boton2">DESCUBRE ALOJAMIENTOS  ></button>
                </div>
            </div>
        </div>



    </div>
  );
}

export default MenuSecundario;
