import { decorate, observable } from "mobx";
import axios from 'axios';

const pageState = {
    page: 0,
    loading: false
}

decorate(pageState, {
    page: observable,
    loading: observable
})

// Response can either be clean or contaminated
const apiState = {
    response: "",
    allergens: [],
}

decorate(apiState, {
    response: observable,
    allergens: observable,
})

export const globalState = {
    pageState: pageState,
    apiState: apiState
}

export async function check_allergens(img){
    globalState.pageState.loading = true
    const formData = new FormData();
    const json = JSON.stringify(globalState.apiState.allergens);
    const blob = new Blob([json], {
        type: 'application/json'
      });
    formData.append('file', img)
    formData.append('json', blob)
    let resp = await axios.post('http://127.0.0.1:5000/evaluate')
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    globalState.pageState.loading = false
    return resp
}