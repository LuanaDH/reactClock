import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            timer: new Date().toLocaleTimeString() //iniciei um nome parametro timer, e criei um obj mandando pegar a hr
        }
    }
    componentDidMount(){ //função assincrona
        let interval_id = setInterval(()=>{  
            // this.state.timer = new Date().toLocaleTimeString()   DEssa forma não atualiza automatico
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
        }, 1000)

            this.setState({
                ...this.state,
                interval_id: interval_id
            })
    }
    
    componentWillUnmount(){ // para destruir a função acima
        clearInterval(this.state.interval_id);
    }

    render(){
        return (
            <div>
                {this.state.timer}
            </div>
        )
    }
}