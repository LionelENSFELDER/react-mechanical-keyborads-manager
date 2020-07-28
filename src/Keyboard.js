import React from 'react';

class Keyboard extends React.Component{
    state = {
        keyboards: [
            {id: 1, imageUrl:"https://bit.ly/30RNxEc", manufacturer: "GMK", model: "Flex", switchType: "MX Red", type: "ISO", size: "Full"},
            {id: 2, imageUrl:"https://bit.ly/303Wb30", manufacturer: "NovelKeys", model: "Dragon", switchType: "MX Red", type: "AINSI", size: "TKL"}
        ],
        imageUrl: "https://cutt.ly/5sDrj3V",
        manufacturer: "", 
        model: "", 
        switchType: "", 
        type: "", 
        size: ""
    }

    handleSubmit(){
        console.log(this.state.keyboards);
        const keyboardsSlice =  this.state.keyboards.slice();

        const id = new Date().getTime();
        const imageUrl = this.state.imageUrl;
        const manufacturer = this.state.manufacturer;
        const model = this.state.model;
        const switchType = this.state.switchType;
        const type = this.state.type;
        const size = this.state.size;

        const newKeyboard = {id, imageUrl, manufacturer, model, switchType, type, size};

        keyboardsSlice.push(newKeyboard);
        this.setState({ keyboards: keyboardsSlice })
    }

    handleDelete(id){
        const keyboardsSlice = this.state.keyboards.slice();
        const index = keyboardsSlice.findIndex((keyboardsSlice) => keyboardsSlice.id === id)
        keyboardsSlice.splice(index, 1);
        this.setState({ keyboards : keyboardsSlice});
    }

    handleChange(event){
        let target = event.target;
        let value = target.value;
        let name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    render(){
        return <div>
            <ul>
                {
                    this.state.keyboards.map((keyboard)=>{
                        return <li>
                            <div>
                                <img src={keyboard.imageUrl} alt="keyboard" width="150" height="100"/>
                                {keyboard.manufacturer} {keyboard.model} | {keyboard.switchType} | {keyboard.type} | {keyboard.size}<button onClick={()=>{this.handleDelete(keyboard.id)}}>Delete</button>

                            </div>
                        </li>
                    })
                }
            </ul>
            <form onSubmit={this.handleSubmit}>

                <input type="text" name="manufacturer" placeholder="Enter manufacturer" onChange={this.handleChange.bind(this)}></input>
                <input type="text" name="model" placeholder="Enter model name" onChange={this.handleChange.bind(this)}></input>

                <label htmlFor="switch">Choose a switch:</label>
                <select name="switch" id="switch" onChange={this.handleChange.bind(this)}>
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Cherry MX Brown</option>
                    <option value="cat">Cherry MX Red</option>
                </select>

                <label htmlFor="type">Choose a type:</label>
                <select name="type" id="type" onChange={this.handleChange.bind(this)}>
                    <option value="">--Please choose an option--</option>
                    <option value="dog">ISO</option>
                    <option value="cat">AINSI</option>
                </select>

                <label htmlFor="size">Choose a size:</label>
                <select name="size" id="size" onChange={this.handleChange.bind(this)}>
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Full (100%)</option>
                    <option value="cat">TKL (60%)</option>
                </select>

            </form>
            <button onClick={this.handleSubmit.bind(this)}>Add a keyboard</button>
        </div>
    }
}

export default Keyboard;