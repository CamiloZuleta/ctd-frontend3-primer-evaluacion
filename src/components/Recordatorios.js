import React from 'react'

export default class Recordatorios extends React.Component {
    render() {
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.selection}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {this.props.histSelections.map((val,index) => {
                        if (index>0){
                            return <li>{val}</li>
                        }
                        return "";
                    })}
                </ul>
            </div>
        )
    }
}