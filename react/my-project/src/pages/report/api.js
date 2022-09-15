export async function postData(title) {
  const options = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({title})
  }
  const response = await fetch('https://reqres.in/api/products', options);
  return response;
}

export async function getData() {
  
  const data = [
		  {
		    company:"1111",
		    country:"222",
		    contact:"99999999999"
		  },
		  {
		    company:"1111",
		    country:"222",
		    contact:"99999999999"
		  },
		  {
		    company:"1111",
		    country:"222",
		    contact:"99999999999"
		  },
		  {
		    company:"1111",
		    country:"222",
		    contact:"99999999999"
		  }
		];

  		return new Promise( (resolve, reject) => {
		  	 setTimeout(() => {
		  	 	resolve(data);
		  	 },1000);
		});

}