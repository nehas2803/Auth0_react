import React, { Component } from 'react'
import auth0 from 'auth0-js';

export default class Auth extends Component {
    constructor(history)
    {
        super(history);
        this.history = history;
        this.auth0 = new auth0.WebAuth(
            {
            domain:process.env.REACT_APP_AUTH0_DOMAIN,
            clientID:process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri:process.env.REACT_APP_AUTH0_CALLBACK,
            responseType:"token id_token",
            scope:'openid profile'
            }
        )}
    login=()=>
    {
        this.auth0.authorize();
    }
    handleAuthentication = ()=>{
        this.auth0.parseHash((err,authResult)=>{
            if(authResult && authResult.accessToken && authResult.idToken){
                this.setSession(authResult)
            }
            else if(err){
                this.history.push('/');
                alert(`Error: ${err.error}. Check the console for further details of error`)
                console.log(err)
            }
        })
    }
    setSession =(authResult)=>{
        console.log(authResult);
        //set the time that the access token will expire
        const expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );

        localStorage.setItem("access_token", authResult.accessToken)
        localStorage.setItem("id_token", authResult.idToken)
        localStorage.setItem("expires In", authResult.expiresIn)
    }
 }

