import React from 'react';


class AddKeyboard extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            imageUrl: "https://cutt.ly/8sZxWip",
            manufacturer: "Unknow manufacturer", 
            model: "Unknow model", 
            switchMod: "Unknow switch", 
            type: "Unknow type", 
            size: "Unknow size"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        let target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
          });
        console.log(this.state);
    }

    handleSubmit(){
        console.log("handleSubmit !");

        const id = new Date().getTime();
        const imageUrl = this.state.imageUrl;
        const manufacturer = this.state.manufacturer;
        const model = this.state.model;
        const switchMod = this.state.switchMod;
        const type = this.state.type;
        const size = this.state.size;

        const newKeyboard = {id, imageUrl, manufacturer, model, switchMod, type, size};
        this.props.onSubmit(newKeyboard);
    }

    render(){

        //const {onSubmit} = this.props;

        return <div>
            <h1>Add a keyboard</h1>
            <form onSubmit={()=>this.handleSubmit()}>

            <input type="text" name="manufacturer" placeholder="Enter manufacturer" onChange={this.handleInputChange}></input>
            <input type="text" name="model" placeholder="Enter model name" onChange={this.handleInputChange}></input>

            <label htmlFor="switchMod">Choose a switch:</label>
            <select name="switchMod" id="switch" onChange={this.handleInputChange}>
                <option value="">--Please choose an option--</option>
                <option value="Cherry MX Brown">Cherry MX Brown</option>
                <option value="Cherry MX Red">Cherry MX Red</option>
            </select>

            <label htmlFor="type">Choose a type:</label>
            <select name="type" id="type" onChange={this.handleInputChange}>
                <option value="">--Please choose an option--</option>
                <option value="ISO">ISO</option>
                <option value="AINSI">AINSI</option>
            </select>

            <label htmlFor="size">Choose a size:</label>
            <select name="size" id="size" onChange={this.handleInputChange}>
                <option value="">--Please choose an option--</option>
                <option value="Full">Full (100%)</option>
                <option value="TKL">TKL (60%)</option>
            </select>

            </form>
            <button onClick={()=>this.handleSubmit()}>Add a keyboard</button>
        </div>
    }

}

export default AddKeyboard;