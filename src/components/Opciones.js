import React from 'react'

export default class Opciones extends React.Component {

    componentDidMount(){
        console.log("hola");
    }

    handleChangeButtonA = () => {
        const val = "A";
        this.props.alSeleccionar(val);
    }
    handleChangeButtonB = () => {
        const val = "B"
        this.props.alSeleccionar(val);
    }

    render() {
        return (
            <React.Fragment>
                <h1 key={this.props.id} className="historia">{this.props.historia}</h1>

                <div className="opciones">

                    <div className="opcion">
                        <button id="A" className="botones" 
                        onClick={this.handleChangeButtonA}>
                            A
                        </button>
                        <h2>{this.props.opciones[0]}</h2>
                    </div>

                    <div className="opcion">
                        <button id="B" className="botones" 
                        onClick={this.handleChangeButtonB}>
                            B
                        </button>
                        <h2>{this.props.opciones[1]}</h2>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}