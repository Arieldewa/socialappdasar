import { Alert, DatePickerAndroid, Linking } from 'react-native';
import Moment from 'moment';
import config from "./config";
var debug = false;

export default class Helper {

	/*
	*	Do request URL and get response
	*	return @response
	*/
	static getResponse(request_url, params, callback, method, header, body) {
		var authorization = (params && params.authorization) ? params.authorization : '';
		// url = Config.api_url+request_url+'?api_key='+api_key;
		url = config.api_url + request_url;
		if (method) {
			method = method;
			if (method == 'GET' && params) {
				url = url + '?get';
				Object.keys(params).forEach(function (key) {
					url = url + "&&" + key + "=" + params[key];
				});
			}
		} else {
			method = 'POST';
		}

		if (!header) {
			header = {
				'Accept': 'application/json',
				'Authorization': authorization,
				'Content-Type': 'application/json'
			};
		}

		// console.log(header);

		if (!body) {
			body = (method == 'POST') ? JSON.stringify(params) : null;
		}

		var req = {
			method: method,
			headers: header,
			body: body
		};
		// console.log('auth: '+authorization);
		console.log(params);
		console.log(req);
		console.log(url);

		if (!debug) {
			return fetch(url, req)
				.then((response) => {

					//updating user token
					if (params.getNewToken) {
						// console.log("=== Header ======")
						// console.log(response.headers.get('Content-Type'))
						var newToken = response.headers.get('Authorization')
						if (newToken) {
							config.storage.save({
								key: 'userToken',
								data: newToken
							});
							config.userToken = newToken
							// console.log("===========user token updated==========")
							// console.log(config.userToken)
						}
					}

					response.json().then((responseJson) => {
						// console.log(responseJson);
						callback(responseJson);
						return responseJson;
					}).catch((error) => {
						// if(debug) {
						console.log('error');
						console.error(error);
						const responseJson = {
							status: 'error',
							message: 'Unable to connect to internet'
						}
						callback(responseJson);
						return responseJson;
						// }else{
						//     Alert.alert(
						//         'Something went wrong',
						//         'Unable to connect to internet',
						//     );
						// }
					});
				})

		} else {
			var responseJson = {
				status: "success"
			}
			callback(responseJson);
			return responseJson;
		}
	}

	static returnMessage(response) {
		var msg = '';
		if (response.message && typeof response.message != 'string') {
			response.message.forEach(function (d) {
				msg = msg + d + '\n';
			});
		} else {
			msg = response.message;
		}

		return msg;
	}

	
}