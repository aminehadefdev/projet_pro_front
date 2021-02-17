import React,{useState} from 'react'
import {BrowserRouter as Router, Redirect, Link} from 'react-router-dom'

import axios from 'axios'
import qs from 'qs'

import { Form } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';


function SearchBar(){
    const [searche, setSearche] = useState('')
    const [redirect, setRedirect] = useState(false)

    function SerachMentore(){
        var data = qs.stringify({
        'token': localStorage.getItem('token')
        });
        var config = {
          method: 'get',
          url: `http://localhost:8000/user/search?job=${searche}&token=${localStorage.getItem('token')}`,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data : data
        };
  
        axios(config)
        .then(function (response) {
          console.log(response.data.data)
          localStorage.setItem('searche', qs.stringify(response.data.data))
          setRedirect(true)
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    return (
        <div className="container-input">
        <Form.Control
            placeholder="Search"
            value={searche}
            onChange={(event)=>{
              setSearche(event.currentTarget.value)
            }}
        />
        <button className="searchBtn" onClick={()=>{
            SerachMentore()
        }}>
          <FontAwesomeIcon className="iconeSearch" icon={faSearch} />
        </button>
        {redirect === true ? <Redirect exact to="/search" />:null}
      </div>
    )
}

export default SearchBar