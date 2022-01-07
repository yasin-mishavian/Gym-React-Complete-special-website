import './components/assets/fonts/styles.css'
import HeaderNav from "./components/Header_Footer/Header_Nav";
import Description from './components/Descriptions/Description'
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Trainers from './components/Trainers/Trainers';
import Highlight from './components/Highlights/Highlight';
import Footer from './components/Header_Footer/Footer';
import React, { Component } from 'react'
import Loading from './components/Loading/Loading';
import Contact from './components/Contact/Contact';


class App extends Component {

  constructor() {
    super()
    this.state = { loading: true }
  }

  componentDidMount() {
      setTimeout(() => {
        this.setState({loading: false})
      }, 3000);
    }
    
  render() {
    return (
      <>
        {
        this.state.loading ? (<Loading/>) : ([
          <HeaderNav/>,
          <Description/>,
          <Services/>,
          <Gallery/>,
          <Trainers/>,
          <Highlight/>,
          <Contact/>,
          <Footer/>])
        }
      </>
    )
  }
}

export default App



