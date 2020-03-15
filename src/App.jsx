import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'


import Home from './components/Home.jsx'
import Movie from './components/Movie.jsx'
import About from './components/About.jsx'


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <HashRouter>
            <div>
                <h1>这是根组件</h1>
                <hr/>
                <Link to="/home">首页</Link>
                <Link to="/movie">电影</Link>
                <Link to="/about">关于</Link>

                <Route path="/home" component={Home} exact></Route>
                <Route path="/movie" component={Movie}></Route>
                <Route path="/about" component={About}></Route>
            </div>
        </HashRouter>
    }
}