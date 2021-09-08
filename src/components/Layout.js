import data from './data.json'
import Opciones from './Opciones.js'
import Recordatorios from './Recordatorios.js'
import React from 'react'

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1,
            key: 0,
            option: "",
            histOptions:[]
        }
    }
    searchOnData = (key) => {
        return data.findIndex((val, index) => {
            return data[index].id === key
        })

    }
    onSelectOption = (option) => {
        this.setState({option:option});
        this.setState({histOptions:[option,...this.state.histOptions]});
        this.setState({ counter: this.state.counter + 1 }); 
        const key = (this.state.counter+1) + option.toLowerCase();
        const val = this.searchOnData(key);
        this.setState({key:val});
    }
    
    shouldComponentUpdate(){

        if(this.state.counter<=4){
            return true;
        }else{
            window.alert("Fin");
            return false;
        }
    }


    render() {
        return (
            <div className="layout">
                <Opciones historia={data[this.state.key].historia}
                    opciones={[data[this.state.key].opciones.a, data[this.state.key].opciones.b]}
                    alSeleccionar={this.onSelectOption}
                    id={data[this.state.key].id} />
                <Recordatorios selection={this.state.option}
                histSelections={this.state.histOptions}/>
            </div>
        )
    }
}
