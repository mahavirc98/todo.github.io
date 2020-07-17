import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            item:"",
            todoItems:[],
            tocart:[]
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.delete = this.delete.bind(this);
        this.cart = this.cart.bind(this);
        this.rcart = this.rcart.bind(this);
    }
    onChangeHandler(event){
        var inputVal = event.target.value;
        this.setState({
            item:inputVal
        })

    }
    addData(){
        var inputVal = this.state.item;
        var itemInstance = this.state.todoItems;
        itemInstance.push(inputVal);
        this.setState({
            todoItems:itemInstance,
            item:""
            
        })
        //console.log(this.state.todoItems);
 

    }
    delete(event){
        var id = event.target.id;
        var itemInstance = this.state.todoItems;
        itemInstance.splice(id,1);
        this.setState({
            todoItems:itemInstance
            
        })


    }
    cart(event){
        var name = event.target.id;
        //console.log(name);
        var itemInstance = this.state.tocart;
        itemInstance.push(name);
        this.setState({
            tocart:itemInstance,
            
            
        })
        //console.log(this.state.tocart);


    }
    rcart(event){
        var id = event.target.id;
        var itemInstance = this.state.tocart;
        itemInstance.splice(id,1);
        this.setState({
            tocart:itemInstance
            
        })
    }
    render(){
        var itemList = this.state.todoItems.map((e,i)=>
            <li key={i}>{e} <button onClick={this.delete} id={i}>del</button> <button onClick={this.cart} id = {e}>add_to_cart</button></li>
        )
        var cartList = this.state.tocart.map((e,i)=>
            <li key = {i}>{e}  <button onClick={this.rcart} id = {i}>Remove</button> </li>
        )
        return(
            <div>
                <div className='header'></div>
                <div className='body'>
                    <ul>{itemList}</ul>

                    <h3>My Cart</h3>
                    <ul>{cartList}</ul>
                </div>
                <div className='footer'>
                    Add New Item: <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                    {/* <p>{this.state.item}</p> */}
                    <button onClick={this.addData}>Add</button>
                </div>
            </div>

        );
    }
}
export default Todo;