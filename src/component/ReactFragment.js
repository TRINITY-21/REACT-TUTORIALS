import React from 'react'
import Columns from '../component/Columns'

function ReactFragment() {
	return(<React.Fragment>
			<table>
				<tbody>
					<tr>
						<Columns />
					</tr>
				</tbody>
			</table>
		</React.Fragment>)
}

export default ReactFragment