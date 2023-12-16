import {useEffect, useState} from "react";
import axios from "axios";

function ServerStatus() {
	const [status, setStatus] = useState('loading...');

	useEffect(() => {
		axios.get('http://localhost:8080/ping')
			.then((res) => {
				if (res.status === 200) {
					setStatus("서버와 정상적으로 연결되었습니다.");
				} else {
					setStatus( "서버와 연결되었으나, 응답에 문제가 발생했습니다.");
				}
			})
			.catch((error) => {
				setStatus("서버에 연결할 수 없습니다.");
				console.log(error);
			})
	}, []);
	return (
		<div>
			<p>{status}</p>
		</div>
	)
}


export default ServerStatus;