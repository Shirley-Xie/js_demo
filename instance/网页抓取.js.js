const co = require("co");
const nodeFetch = require("node-fetch");
const request = require('request');
const FormData = require('form-data');
const jar = request.jar();

function sleep(time)
{
	return new Promise((resolve, reject) => {
		setTimeout(resolve, time);
	});
}

function fetch(url, request)
{
	console.log(url, request);
	return nodeFetch(url, request)
	.then(res => {
		return res.json();
	});
}


function post(url, formData)
{
	return new Promise((resolve, reject) => {
		console.log(url, formData);
		request.post(url, {formData, jar}, (err, httpResponse, body) => {
			resolve(body);
		});

	});
}


function* getLogo(logoUrl)
{
	if(!logoUrl)
	{
		return null;
	}

	const buffer = yield nodeFetch(logoUrl)
  .then(function(res) {
    return res.buffer();
  });

  const formData = {
  	file: {
  		value: buffer,
	    options: {
	      filename: '1.jpg',
	      contentType: 'image/jpeg'
	    }
  	}
  };

  return new Promise((resolve, reject) => {
	  request.post({url: 'http://ditu.i51cy.com/qc/upload/fileload', formData}, function optionalCallback(err, httpResponse, body) {
	 			let result = JSON.parse(body);
	 			resolve(result.webPath);
	  });
  });
}

function* getAll()
{
	const loginResult = yield post("http://ditu.i51cy.com/qc/nodeLogin?format=json", {
		id: 9999,
		password: '12345678'
	});

	for(let i = 1; i < 200; i++)
	{
		let result = yield fetch("https://rong.36kr.com/n/api/search/user?p=" + i);
		if(result.code != 0)
		{
			return;
		}

		let users = result.data.pageData.data;

		for(let user of users)
		{
			// 下载Photo到本地
      let localServerPhoto = yield getLogo(user.logo);
      if(!user || !user.name || !user.logo)
      {
      	console.log(user, "1111");
      	continue;
      }

      // console.log(user.logo);

      try
      {
			// 使用文件上传接口到服务器获取URL
				const postResult = yield post("http://ditu.i51cy.com/qc/user/addContent?format=json", {
					type: '6',
					pId: '9913',
					name: user.name,
					mobileShow: 'true',
					pcShow:'',
					phone:'',
					company:user.orgName,      //投资机构
					title: user.position,       //职位
					logo: localServerPhoto,    //头像
					area: user.industry.join("，"),    //投资领域
					round: user.phase.join("，"),          //投资阶段
					description: user.brief,      //描述
					updateTime: '',
					createTime: '',
					status: '1',
				});
      }
      catch(e)
      {
      	console.log(user, "222222222");
      }
      // console.log(user.name);
		}

		if(users.length != 20)
		{
			break;
		}

		yield sleep(5000);
	}
}

co(getAll);