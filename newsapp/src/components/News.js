
import Newsitem from './Newsitem'
import React, { Component } from 'react'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }
    articles = []
    //render se phle run hoga
    // state and lifecycle
    // https://reactjs.org/docs/state-and-lifecycle.html
    constructor() {
        super();
        console.log("hello constructor called");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    //video no 27 yha ham api se fetch kar rhe he 
    //ye render ke bad run hoga simply
    async updatenews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bcc212de013246f1bfd874055c1abe45&page=${this.state.page}&pageSize=${this.props.pageSize} `;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(data);
        this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false })

    }
    async componentDidMount() {
        this.updatenews();
    }
    handleonpreclick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updatenews();

    }
    handleonnextclick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updatenews();
    }
    render() {
        return (
            <>
                <div>
                    {/* <p className="text-danger my-5"><h1>THE__MONKEY__NEWS</h1></p> */}
                </div>
                <div>


                    {/* previously we were using when we were using next or previous butt to have a feature like infinite scorolling automativacally we will use another concept we have install a pakage hare first name is react infinite scroll component */}
                    {/* {this.state.loading && <Spinner />} */}

                    <center><h3>TOP_____<a className='text-primary'>{this.props.category}</a>____NEWS</h3></center>
                    <div className='container my-4 d-flex justify-content-between '>
                        {/* hero also the same reason */}
                        {/* <div className="row">
                            {
                                !this.state.loading && this.state.articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <Newsitem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })
                            }
                        </div> */}
                        {/* new you can comment off this for the previous feature */}
                        <div className="row">
                            {
                                this.state.articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <Newsitem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })
                            }
                        </div>

                    </div>
                    <div className="container d-flex justify-content-between ">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-danger  " onClick={this.handleonpreclick}>&larr;Previous page</button>
                        <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-success " onClick={this.handleonnextclick}>Next page&rarr;</button>
                    </div >
                </div >
            </>
        )

    }
}





// if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20))