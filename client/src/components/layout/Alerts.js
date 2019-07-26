import React, { useContext } from 'react'
import AlertContext from '../../context/alerts/alertContext'

const Alerts = () => {
	const alertContext = useContext(AlertContext)
	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map(alert => (
			<div key={alert.id} classNAME={`alert alert-${alert.type}`}>
				<i classNAME="fas fa-info-circle">{alert.msg}</i>
			</div>
		))
	)
}

export default Alerts
