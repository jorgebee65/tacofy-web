const URL = `http://localhost:8080/tacofy/taquerias`

export default function getTaquerias(){
	return fetch(URL)
	  .then(res => res.json())
}