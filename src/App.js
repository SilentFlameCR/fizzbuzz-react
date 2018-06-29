import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 

class App extends React.Component {
  state = {
      counter: 1,
      fizzbuzz: "",
  }
  
  Fizzbuzz = (num) => {
      if(num % 3 === 0 && num % 5 === 0) {
          this.setState({
              fizzbuzz: 'FizzBuzz'
          })
      } else if(num % 3 === 0) {
          this.setState({
              fizzbuzz: 'Fizz'
          })
      } else if(num % 5 === 0) {
          this.setState({
              fizzbuzz: 'Buzz'
          })
      } else {
          this.setState({
              fizzbuzz: ''
          })
      }
  }
  
  decrease = () => {
      if(this.state.counter > 1) {
          this.setState({
              counter: --this.state.counter
          });
          this.Fizzbuzz(this.state.counter);
      }
  }
  
  increase = () => {
      
      this.setState({
          counter: ++this.state.counter
      });
      this.Fizzbuzz(this.state.counter);
      
      
  }
    
  render() {
    return (
      <div className="App">
       <div className="container">
            <div className="row rules">
                <div className="col-12">
                    <h1 className="title text-center">Fizzbuzz <em>now with React</em></h1>
                    <p>Your classic children's game of FizzBuzz. Count up from 1 every number divisible by 3 is replaced by Fizz, divisible by 5 is replaced by Buzz and divisible by 3 && 5 is replaced by FizzBuzz.</p>
                </div>

            </div>
            
            <div className="result">
                 
                   <h1 className="text-center">
                       {this.state.fizzbuzz || this.state.counter}
                   </h1> 
                
            </div>

            <div className="row buttons">
                <button className="reduce" onClick={this.decrease}>-</button>
                <button className="increase" onClick={this.increase}>+</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
