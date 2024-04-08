// const makeDogPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const getRand = Math.random();
// 			if (getRand < 0.5) {
// 				resolve();
// 			} else {
// 				reject();
// 			}
// 		}, 3000);
// 	});
// };
// makeDogPromise()
// 	.then(() => {
// 		console.log('nice ');
// 	})
// 	.catch(() => {
// 		console.log('error nu');
// 	});

const fakeRequet = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [
					{ id: 1, username: 'audrius' },
					{ id: 2, username: 'aiste' },
				],
				'/about': 'this is about page',
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404 });
			}
		}, 2000);
	});
};

fakeRequet('/users')
	.then((res) => {
		console.log(res.status);
		console.log(...res.data);
		console.log('resolved');
	})
	.catch((res) => {
		console.log('rejected');
		console.log(res.status);
	});
