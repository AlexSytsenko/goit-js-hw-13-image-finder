import { successNotice, errorNotice } from '../js/notifications';

const axios = require('axios');

const apiKey = "20059079-3862fc9514b48e56c5e47271f";

export default {
    searchQuery: '',
    page: 1,

    fetchPhotos() {
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`;



        return axios.get(url)
            .then(({ data: {hits} }) => {
                
                if (hits.length > 0) {
                    this.incrementPage();
                    return hits;
                } else {
                  errorNotice();  
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        
        // =======================for Fetch
        // return fetch(url)
        //     .then(response => response.json())
        //     .then(({ hits }) => {
        //         if (hits.length > 0) { 
        //         // successNotice();  
        //         this.incrementPage();
        //         return hits;  
        //         }
        //         else {
        //             errorNotice();
        //         }
        //     })
        //     .catch(error => console.log(error));
    },

    resetPage() {
        this.page = 1;
    },

    incrementPage() {
        this.page += 1;
    },

    get query() {
        return this.searchQuery;
    },

    set query(value) {
        this.searchQuery = value;
    },

};