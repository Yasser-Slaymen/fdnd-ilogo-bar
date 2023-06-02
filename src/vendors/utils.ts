interface ClientOptions {
	query: string;
	variables?: object;
	fetch?: typeof fetch;
  }
  
  export async function client({
	query,
	variables,
	fetch = window.fetch // Add default value for fetch parameter
  }: ClientOptions) {
	const response = await fetch(`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8tvaoh24vsd01uq8a5x5q2q/master`, {
	  method: 'POST',
	  body: JSON.stringify({ query, variables })
	});
  
	const { data } = await response.json();
  
	return data;
  }




// export async function client({
// 	query,
// 	variables,
// 	fetch
// }: {
// 	query: string;
// 	variables?: object;
// 	fetch?: any;
// }) {
// 	const response = await fetch(`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8tvaoh24vsd01uq8a5x5q2q/master`, {
// 		method: 'POST',
// 		body: JSON.stringify({ query, variables })
// 	});

// 	const { data } = await response.json();

// 	return data;
// }
