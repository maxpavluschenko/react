import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Content from './components/Content/Content';
import News from './components/News/News';
import Music from './components/Music/Music';
import Home from "./components/Home/Home";
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
	return (
        <div>
            <Header />
            <div className="wrapper">
            <Navbar />
                <div className="app-wrapper-content">
                    <Route exact path="/" component={Home} />
                    <Route path="/content" render={() => <Content store={props.store} />} />
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                </div>
            </div>
        </div>
	);
};

export default App;
