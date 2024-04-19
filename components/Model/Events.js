import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default class Event {
    static app_url = 'https://api-dev.twenty-one-ai.com/'

    constructor () {
        
    }
    
    static getEvents = async () => {
        return axios.get(this.app_url+'api/getEvent')
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return (error.response.data);
            });
    }
    
   

}