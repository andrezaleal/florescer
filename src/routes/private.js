import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../services/auth';

export default function PrivateRoute({ children }) {
	const { signed, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div>
			</div>
		)
	}

	if (!signed) {
		console.log(signed)
		return <Redirect to="/login" />;
	}
	console.log(signed)
	console.log(children);
	return children;
}
