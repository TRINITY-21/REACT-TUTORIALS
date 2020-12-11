import React,{useState} from 'react'

const HookArray =()=>{

	const [items, setItems] = useState([])

	const AddItem=()=>{
		setItems(
			[...items, {
				id:items.length,
				value:Math.floor(Math.random()*10)
			}]
		)
	}
	return(
		<div>
				<button onClick={AddItem}>Add Item</button>

			<ul>
			{
				items.map(item => (
				<li key={item.id}>{item.value}</li>
				))
			}
			</ul>
		</div>
		)
}
export default HookArray