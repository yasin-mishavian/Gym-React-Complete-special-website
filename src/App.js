import React, { Component } from 'react'
import Header from "./components/Header/Header";
import Description from './components/Descriptions/Description'
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Trainers from './components/Trainers/Trainers';
import Highlight from './components/Highlights/Highlight';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import Contact from './components/Contact/Contact';
import "./App.scss";

class App extends Component {

  constructor() {
    super()
    this.state = { 
      loading: true , 
      MyComponents : []
     }
  }

  async componentDidMount() {
    const Components = await (
      <div>
        <Header/>
        <Description/>
        <Services/>
        <Gallery/>
        <Trainers/>
        <Highlight/>
        <Contact/>
        <Footer/>
      </div>
    )

    this.setState({ MyComponents : Components , loading: false})
    }
    
  render() {
    return (
      <>
        {
          this.state.loading ? (<Loading/>) : (
            <div>
              {this.state.MyComponents}
            </div>
          )
        }
      </>
    )
  }
}

export default App



