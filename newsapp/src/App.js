import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Pagelimit from './components/Pagelimit'
export default class App extends Component {
  pageno = 24;
  render() {
    return (
      // <div>
      //   <Navbar />
      //   <News pageSize={20} country="in" category="technology" />
      //   {/* <Pagelimit /> */}
      // </div>
      <div className="container">
        <Router>
          <Navbar />
          {/* <News pageSize={5} country="in" category="general" /> */}
          <Routes>
            <Route exact path='/home' element={<News key="home" pageSize={this.pageno} country="in" category="Science" />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageno} country="in" category="Entertainment" />} />
            <Route exact path='/business' element={<News key="business" pageSize={this.pageno} country="in" category="Business" />} />
            <Route exact path='/general' element={<News key="general" pageSize={this.pageno} country="in" category="General" />} />
            <Route exact path='/health' element={<News key="health" pageSize={this.pageno} country="in" category="Health" />} />
            {/* <Route exact path='/science' element={<News key="science" pageSize={5} country="in" category="science" />} /> */}
            <Route exact path='/sports' element={<News key="sports" pageSize={this.pageno} country="in" category="Sports" />} />
            <Route exact path='/technology' element={<News key="technology" pageSize={this.pageno} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}





{/* */ }