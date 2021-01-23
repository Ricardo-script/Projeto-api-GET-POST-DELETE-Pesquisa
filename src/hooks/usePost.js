import { useState } from 'react';
import axios from 'axios';

function usePost(){

    const [postData, setPostData] = useState({
        loading: false,
        dados: undefined,
        erro: undefined,
    });

    function execute({ data }){
        setPostData({
            loading: true,
            dados: undefined,
            erro: undefined
        });

        axios
        .post('http://localhost:3006/posts', data)
        .then(response => {
            setPostData({
                loading: false,
                dados: response.data,
                erro: undefined
            });
        })
        .catch(error => {
            setPostData({
                loading:false,
                dados:undefined,
                erro: error.message
            });
        })
    }

    return{ ...postData, execute }

}

export default usePost;