import React, { Component } from "react";
import Header from "../../components/header";
import MenuSecundario from "../../components/menuSecundario";
import {Carrousel, GruposAlojamiento} from "../../components/cards/cards";
import InfiniteScroll from 'react-infinite-scroll-component';
import "./main.css";
import API from "../../utils/API";



class Main extends Component {
    state = {
        todosAlojamientos:[],
        transform:0,
        estancias:[],
        experiencias:[],
        fetchonscroll:[],
        valor: 0, valorfin: 6, handlefetchstate:0
    }
 
    componentDidMount = () => {
        API.getAlojamientos()
          .then(res => this.setState({ todosAlojamientos: res.data }))
          .catch(err => console.log(err, "ERROR API.GETtODOSsAlojamientos"))

        API.getEstancias()
          .then(res => this.setState({ estancias: res.data }))
          .catch(err => console.log(err, "ERROR API.GETtODOSeSTANCIAS"))
        
        API.getExperiencias()
          .then(res => this.setState({ experiencias: res.data }),()=>this.fetchinicialdata())
          .catch(err => console.log(err, "ERROR API.GETtODOSeXPERIENCIAS"))
    }

    handleCarrouselTransform = () => {
        this.setState({ transform: this.state.transform - 250 })
    }

    fetchinicialdata = () => {
        this.setState({ fetchonscroll: this.state.experiencias.slice(1,6) })
    }
    
    fetchMoreData = () => {
        this.setState({valor: this.state.valor +6, valorfin: this.state.valorfin+6})
    
        setTimeout(() => {
          this.setState({ handlefetchstate: this.state.handlefetchstate +6,
            fetchonscroll: ( this.state.fetchonscroll.concat( this.state.estancias.slice((this.state.valor + 6), (this.state.valorfin + 6)) ) ),
          });
        }, 1500);
    };


 render() {
  return (
    <span>
        <Header>
            <div style={{boxShadow: '0 12px 100px rgba(0,0,0,0.65)', width:'90%',backgroundColor:'white', borderRadius: '6px'}}>
                <span style={{color: '#636262', fontSize: '21px',position: 'absolute',top: '70%', left: '2%'}}>
                    <i className="fas fa-search"></i>
                </span>
                <input type="text" className="header-lugarAbuscar" name="lugarAbuscar" value="   Surf en Los Ángeles"/>
                <span style={{color: '#636262', fontSize: '12px', fontWeight: 'bold', position: 'absolute',top: '65%', left: '47%'}}>
                    FECHAS
                </span>
                <input type="text" className="header-fechaAbuscar" name="fechaAbuscar" value="dd/mm/aaaa"/>
                <span style={{color: '#636262', fontSize: '12px', fontWeight: 'bold', position: 'absolute',top: '65%', left: '69%'}}>
                    HUÉSPEDES
                </span>
                <input type="text" className="header-huespedAbuscar" name="huespedAbuscar" value="1 huésped"/>
            </div>
            <button className="header-botonAbuscar">
                <span style={{color: 'white', fontSize: '30px'}}>
                    <i className="fas fa-search"></i>
                </span>
            </button>
        </Header>
        <div className="contenedor-general">
            <MenuSecundario
                titulo="Descubre Airbnb"
                titulo2="Presentamos Airbnb Plus"
            />
            <Carrousel
                carrouselClickNext={this.handleCarrouselTransform}
            >
                <div className="gridB-carrousel" style={{transform:`translate(${this.state.transform}px,0px)`}}>
                    {this.state.todosAlojamientos.map(elementos =>  (
                        <div className="gridBint1" key={elementos._id}>
                            <img className="carrousel-imagen" src={elementos.image} alt="opciones-ciudades"/> 
                            <div className="carrousel-texto">
                                <p className="carrousel-texto-ciudad">{elementos.ciudad}</p>
                                <p className="carrousel-texto-precio">${elementos.precio}/promedio por noche</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Carrousel>

            <InfiniteScroll
            dataLength={this.state.fetchonscroll}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4><div className="loader"></div><div className="loader"></div><div className="loader"></div></h4>}
            scrollableTarget="scrollableDiv"
            >
            {/* -----------------------------------BLOQUES ON SCROLL DOWN */}
            <GruposAlojamiento
                destino= "Alojamientos en Tokio"
            >
                {this.state.estancias.filter((resultado) => resultado.pais === "Tokio")
                .map(resultado=>(        
                    <div className="gridCint1">
                        <img className="grupos-alojamiento-imagen" src={resultado.image} alt="alojamientos-especificos" data-key={resultado.key}/> 
                        <p className="grupos-alojamiento-titulo">{resultado.title} · {resultado.ciudad}</p>
                        <p className="grupos-alojamiento-descripcion">{resultado.description}</p>
                        <p className="grupos-alojamiento-rating">
                            <span style={{color: '#008489', fontSize: '7px', verticalAlign:'middle'}}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            {resultado.valoraciones} · Superhost
                        </p>
                    </div>
                ))}
                <p className="grupos-alojamiento-vermas">
                    Mostrar todo (más de 9000)
                    <span style={{color: '#008489', fontSize: '15px',position: 'absolute', marginLeft:'5px', marginTop:'2px'}}>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </p>
            </GruposAlojamiento>
            <GruposAlojamiento
                destino= "Experiencias en Tokio"
            >
                {this.state.experiencias.filter((resultado) => resultado.pais === "Tokio")
                .map(resultado=>(        
                    <div className="gridCint1">
                        <img className="grupos-alojamiento-imagen" src={resultado.image} alt="alojamientos-especificos"/> 
                        <p className="grupos-alojamiento-titulo">{resultado.title}</p>
                        <p className="grupos-alojamiento-descripcion">{resultado.description}</p>
                        <p className="grupos-alojamiento-rating">
                            <span style={{color: '#008489', fontSize: '7px', verticalAlign:'middle'}}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            {resultado.valoraciones}
                        </p>
                    </div>
                ))}
                <p className="grupos-alojamiento-vermas">
                    Mostrar todo (más de 6000)
                    <span style={{color: '#008489', fontSize: '15px',position: 'absolute', marginLeft:'5px', marginTop:'2px'}}>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </p>
            </GruposAlojamiento>

            {this.state.valor > 6 ? (
            <span>           
             <GruposAlojamiento
                destino= "Alojamientos en París"
            >
                {this.state.estancias.filter((resultado) => resultado.pais === "Francia")
                .map(resultado=>(        
                    <div className="gridCint1">
                        <img className="grupos-alojamiento-imagen" src={resultado.image} alt="alojamientos-especificos"/> 
                        <p className="grupos-alojamiento-titulo">{resultado.title} · {resultado.ciudad}</p>
                        <p className="grupos-alojamiento-descripcion">{resultado.description}</p>
                        <p className="grupos-alojamiento-rating">
                            <span style={{color: '#008489', fontSize: '7px', verticalAlign:'middle'}}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            {resultado.valoraciones} · Superhost
                        </p>
                    </div>
                ))}
                <p className="grupos-alojamiento-vermas">
                    Mostrar todo (más de 9000)
                    <span style={{color: '#008489', fontSize: '15px',position: 'absolute', marginLeft:'5px', marginTop:'2px'}}>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </p>
            </GruposAlojamiento>
            <GruposAlojamiento
                destino= "Experiencias en Paris"
            >
                {this.state.experiencias.filter((resultado) => resultado.pais === "Francia")
                .map(resultado=>(        
                    <div className="gridCint1">
                        <img className="grupos-alojamiento-imagen" src={resultado.image} alt="alojamientos-especificos"/> 
                        <p className="grupos-alojamiento-titulo">{resultado.title}</p>
                        <p className="grupos-alojamiento-descripcion">{resultado.description}</p>
                        <p className="grupos-alojamiento-rating">
                            <span style={{color: '#008489', fontSize: '7px', verticalAlign:'middle'}}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                            {resultado.valoraciones}
                        </p>
                    </div>
                ))}
                <p className="grupos-alojamiento-vermas">
                    Mostrar todo (más de 6000)
                    <span style={{color: '#008489', fontSize: '15px',position: 'absolute', marginLeft:'5px', marginTop:'2px'}}>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </p>
            </GruposAlojamiento>
            </span>
            ):(null)}
            {/* -----------------------------------BLOQUES ON SCROLL DOWN */}
            </InfiniteScroll>




        </div>




      
    </span>
        );
    }
}

export default Main;

