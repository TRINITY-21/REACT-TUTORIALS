import React from "react"
// import Greet from './component/Greet'
// import Welcome from './component/Welcome'
// import Message from './component/Message'
// import Counter from './component/Counter'
// import Subscibe from './component/Subscribe'
// import ParentComponent from './component/ParentComponent'
// import UserGreeting from './component/UserGreeting'
// import NameList from './component/NameList'
// import Stylesheets from './component/Stylesheets'
// import Inline from './component/Inline'
// import Form from './component/Form'
// import LifeCycleA from './component/LifeCycleA'
// import ReactFragment from './component/ReactFragment'
// import ParentComp from './component/ParentComp'
 //import Users from './component/Users'
 //import Todo from './component/Todo'
// import RefsDemo from './component/RefsDemo'
// import RefParent from './component/RefParent'
// import Portals from './component/Portals'
// import Hero from './component/Hero'
// import ErrorBoundary from './component/ErrorBoundary'
// import ClickedTwo from './component/ClickedTwo'
// import HoverTwo from './component/HoverTwo'
// import RenderProps from './component/RenderProps'
// import Navbar from './component/Navbar'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './component/Home'
// import About from './component/About'
// import Contact from './component/Contact'
// import PostDetails from './component/PostDetails'
// import ComponentA from './component/ComponentA'
// import {UserProvider} from './component/UserContext'
	// import Navbar from './component/Http/Navbar'
	// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
	//  import Home from './component/Http/Home'
	//  import About from './component/Http/About'
	//  import PostsDetails from './component/Http/PostsDetails'
	//  import Registration from './component/Http/Registration'
	//import LifeCycle from './component/LifeCycle'
	// import LifeCycleMouse from './component/LifeCycleMouse'
	// import CountTimeInterval from './component/CountTimeInterval'


	// import HookCounter from './hooks/HookCounter'
	// import HookName from './hooks/HookName'
	// import HookArray from './hooks/HookArray'
	// import UseEffectCounter from './hooks/UseEffectCounter'
	// import UseEffectMouse from './hooks/UseEffectMouse'
	// import UseEffectCleanUp from './hooks/UseEffectCleanUp'
	// import HookTimeCounter from './hooks/HookTimeCounter'
	//import ComponentA from './hooks/ComponentA'
	// import UseReducers from './hooks/UseReducers'
	// import MultipleReducers from './hooks/MultipleReducers'
	// import ReducerComponentA from './hooks/ReducerComponentA'
	// import DataFetching from './hooks/DataFetching'
	// import ReducerDataFetching from './hooks/ReducerDataFetching'
	// import CustomCounter from './hooks/CustomCounter'

	//import './appStyles.css'
	//import styles from './appStyles.module.css'

	//export const UserContext = React.createContext()

	//export const ChannelContext = React.createContext()


	//  import CakeContainer from './React-Redux/CakeContainer'
	//  import IceContainer from './React-Redux/CakeContainer'
	// import HooksContainer from './React-Redux/HooksContainer'
	// import {Provider} from 'react-redux'
	// import store from './Redux/store'

	// import ProfileContainer from './React-Redux/ProfileContainer'
	// import {Provider} from 'react-redux'
	// import store from './Redux/store'


	// import CakeContainer from './components/CakeContainer'
	// import IceContainer from './components/IceContainer'
	// import OwnContainer from './components/OwnContainer'
	// import UsersContainer from './components/UsersContainer'
	// //import store from './reacts/store'
	// import {Provider} from 'react-redux'
	// import {createStore, applyMiddleware} from 'redux'
	// import thunk from 'redux-thunk'
	// import rootReducer from './reacts/store'
	// //import store from './Users/store'
	// import logger from 'redux-logger'

	import Books from './componentB/books';
	import {createStore} from 'redux'
	import {Provider} from 'react-redux';
	import reducer from './componentB/reducer';

class App extends React.Component{


	render(){

			// const store = createStore(rootReducer, applyMiddleware(thunk))
			const store = createStore(reducer);

		return(
	

	// <Router>

	// 	<Navbar/>
	// 	<Switch>
	// 		<Route path='/' exact component={Home}/>
	// 		<Route path='/about' component={About}/>
	// 		<Route path='/Registration' component={Registration}/>
	// 		<Route path='/:post_id' component={PostsDetails}/>

	// 	</Switch>
	// </Router>
					<Provider store={store}>
					<div>
					<Books/>
					
					</div>
					</Provider>
			);

		
		

}
}

export default App

