import React from 'react';
import { API } from './config';
import Loader from "../Loader/Loader";
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

const withDataFetcher = (Component, resource) => {
    class DataFetcher extends React.Component {

        state = {
            data: null,
            hasError: false
        };

        componentDidMount() {
            setTimeout(()=>{
                API.get(resource)
                    .then((data)=>{
                        this.setState({
                            data: data.data
                        });
                    })
                    .catch((error)=>{
                        this.setState({
                            hasError: true
                        });
                    })
            },2500);
        }

        render() {
            return (
                <React.Fragment>
                    {this.state.hasError && <Redirect to="something_went_wrong"/>}
                    {this.state.data ? (
                        <Component {...this.props} data={this.state.data}/>
                    ):(
                        <Loader/>
                    )}
                </React.Fragment>
            )
        }
    }
    return DataFetcher
};

export default withDataFetcher