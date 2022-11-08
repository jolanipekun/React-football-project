import React, {Component} from 'react';
import BootList from './BootList';
import SearchBox from './SearchBox';
import {boots} from './boots';
import Message from './Message'



class App extends Component{
    constructor () {
        super()
        this.state = {
            boots: boots,
            searchField: ''
        }
    }

    onSearchChange =  (e) => {
        this.setState({ searchField: e.target.value})
    }

    render (){
        const filteredBoots = this.state.boots.filter(boot =>{
            return boot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='tc'><strong>Welcome To Our Adidas Boot Collections</strong></h1>
                <p><strong>Here here our collections of boot, click <a href='# '>here</a> to order one</strong></p>
                <Message test={{ name: 'Lin Lanying'}}/>
                <SearchBox searchChange = {this.onSearchChange}/>
                <BootList boots = {filteredBoots}/>
            </div>
            
        );
    }
    
}

export default App;