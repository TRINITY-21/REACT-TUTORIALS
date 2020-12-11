import React from 'react'
import RegComp from '../component/RegComp'
import PureComp from '../component/PureComp'
import MemoComp from '../component/MemoComp'

class ParentComp extends React.Component{
	constructor(){
		super()
		this.state = {

			name: 'trinity'
		}
	}

	componentDidMount(){
		setInterval(()=>{
			this.setState({
				name:'trinity'
			})
		},2000)
	}

	render(){
		console.log('************Parent component**************')

		return(<div>

			<MemoComp name={this.state.name}/>
			
			</div>)
	}
}

export default ParentComp