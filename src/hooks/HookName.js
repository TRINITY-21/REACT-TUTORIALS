import React,{useState} from 'react'

const HookName=()=>{

const [name,setName] = useState({firstName:'', lastName:''})

const AddName=(event)=>{
	setName(
			{...name,
				[event.target.name]:event.target.value
			}
		)
}
	return(

				<form>
					<input type='text' name="firstName" value={name.firstName} onChange={AddName}/>
					<input type='text' name="lastName" value={name.lastName} onChange={AddName}/>
				

				<h2>firstName: {name.firstName}</h2>
				<h2>lastName: {name.lastName}</h2>

				</form>
		)


	
}

export default HookName