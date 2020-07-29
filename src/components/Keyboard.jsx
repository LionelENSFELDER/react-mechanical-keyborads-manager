import React from 'react';
import AddKeyboard from './AddKeyboard';

class Keyboard extends React.Component{

    constructor(props){
        super(props);
        this.handleAddKeyboard = this.handleAddKeyboard.bind(this);
    }

    state = {
        keyboards: [
            {id: 1, imageUrl:"https://cutt.ly/8sZxWip", manufacturer: "GMK", model: "Flex", switchMod: "Cherry MX Red", type: "ISO", size: "Full"},
            {id: 2, imageUrl:"https://cutt.ly/8sZxWip", manufacturer: "NovelKeys", model: "Dragon", switchMod: "Cherry MX Red", type: "AINSI", size: "TKL"}
        ]
    }

    handleAddKeyboard(newKb){
        const kbSlice = [...this.state.keyboards];
        kbSlice.push(newKb);
        this.setState({ keyboards: kbSlice });
        console.log(this.state.keyboards);
    }

    handleDelete(id){
        const keyboardsSlice = [...this.state.keyboards];
        const index = keyboardsSlice.findIndex((keyboardsSlice) => keyboardsSlice.id === id)
        keyboardsSlice.splice(index, 1);
        this.setState({ keyboards : keyboardsSlice});
    }

    render(){
        return <div>
            <ul>
                {
                    this.state.keyboards.map((keyboard)=>{
                        return <li key={keyboard.id}>
                            <div id={keyboard.id}>
                                <img src={keyboard.imageUrl} alt="keyboard" width="150" height="100"/>
                                {keyboard.manufacturer} {keyboard.model} | {keyboard.switchMod} | {keyboard.type} | {keyboard.size}<button onClick={()=>{this.handleDelete(keyboard.id)}}>Delete</button>

                            </div>
                        </li>
                    })
                }
            </ul>
            <AddKeyboard onSubmit={this.handleAddKeyboard}/>
        </div>
    }
}

export default Keyboard;