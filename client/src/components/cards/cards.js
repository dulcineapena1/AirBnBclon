import React from "react";

export const Carrousel = props => {
  return (
    <span style={{position:'relative'}}>
        <div className="gridB">
            <h3>Recomendado para ti</h3>
            <div className="row-gridB" >
                {props.children}
            </div>
            <div className="arrow-next" onClick={()=>props.carrouselClickNext({...props})} >
                <span style={{color: 'rgb(113, 113, 113)', fontSize: '31px',position: 'absolute',top: '0%', left: '32%'}}>
                    <i className="fas fa-chevron-right"></i>
                </span>
            </div>
        </div>
    </span>
  );
}

export const GruposAlojamiento = props => {
    return (
        <div className="gridC">
            <h3>{props.destino}</h3>
            <div className="row-gridC" >
                {props.children}
            </div>
        </div>
    );
  }


