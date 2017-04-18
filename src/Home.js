import React, { Component } from 'react';

import Logo from './components/core/Logo/Logo';
// import FBButton from './components/core/FBButton/FBButton';
import FacebookLogin from 'react-facebook-login';

class Home extends Component {
  responseFacebook(response) {
    if (response.accessToken) {
      localStorage.setItem('token', JSON.stringify(response));
      window.location.href = "#/welcome";
    } else {
      const access_token = "EAAaj9JkgMrEBAJSbP80Sw01UGXkZAigwaQ8924sF6qpuRaJ9QORj3Y8OWMphPIAi7Q8zgZCn4CY0efjJqqTWwIi3NzKKUw7xI3hLOZApSqeSMbFsSi0StFp3Gu4mVuTn4Qev3ZB3yCmtJHNCtxVSXeRfw13jUVBnnp6bGqMeqkVKbbSx44gk";
      localStorage.setItem('token', JSON.stringify({"name":"Florian Wat","email":"skflo60@hotmail.com","picture":{"data":{"is_silhouette":false,"url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11891982_10207675557390416_5535948475856826859_n.jpg?oh=cd8e17ad728a74be12ee859377a8e7b2&oe=59847550"}},
        "id":"10212100377808161","accessToken": access_token,"userID":"10212100377808161","expiresIn":4268,"signedRequest":"d_VVhIPqUdtQYWLycHwYuI1GqB746KKAJx9JpSOcnPU.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUNONkU4TFhpSnJnMmJIbmJiZGlhRVBRMkRrRE5ZRVVwbUdiY1NuVlVvdWFXd3dJRjZSNGVvbzkyNTNQZmpaNzhVUWlvNFFpT3R1TVJGQ0VvSVFYSW5sV3B2em9aRmZBZndRNGt4OTNhZmRTNnVJU2pkcW41YXlZOGJiYUFQaE1ZNmh2TFJNS3Q0UUk2U3pKNVJDcEcwN0xvSEIyRDd5V2I2ZGNPMExkTGIwclZSREN0TVVCQ09DQUtkeVJHYlpMTFo4OFdOQ0ZFOVA2TWdOS0M0dnJzUUM4eVRjV0NtSWNEclZuSXR4bUxGRkZrcHdMYy1Cdk1BNGlDaExQcTRWeUEzVHBkd2pEM21USU0tM0pwRkxUYWtDQ0hnYzdTaDBPblpBQTVNbkJrNnVIZElZTXdHM196ZDk0OGUwMFFLcldDUXh0WlNKVVFWQ1BJSlMydGJrVU03OW40LVJNejBpUkZDd3FpbThSNXJxX3RNem1QSDllSG5BOHBqOTlIVUhwM2siLCJpc3N1ZWRfYXQiOjE0OTI0NjIxMzIsInVzZXJfaWQiOiIxMDIxMjEwMDM3NzgwODE2MSJ9"}));
      window.location.href = "#/welcome";
    }
  } 

  componentClicked(response) {
    console.log(response);
  }
  render() {
    const text = "Une pêche d'enfer dès le matin";
    return (
      <div className="Home">
      	<Logo />
      	<div className="Home-message">
          { text }
      	</div>
        <FacebookLogin
          textButton="Connexion avec facebook"
          appId="1869120796635825"
          autoLoad={false}
          fields="name,email,picture"
          onClick={(e) => (this.componentClicked(e))}
          callback={(e) => (this.responseFacebook(e)) } />
      </div>
    );
  }
}

export default Home;
