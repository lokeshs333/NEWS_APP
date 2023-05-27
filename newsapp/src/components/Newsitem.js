import React, { Component } from 'react'

export default class Newsitem extends Component {

    render() {
        let { title, description, imgurl, newsurl, author, date, source } = this.props;
        return (

            <div>
                <div className="card" >

                    <h5><span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                        {source}
                    </span></h5>
                    <img src={!imgurl ? "https://i.ytimg.com/vi/OgBCB2lJ51o/maxresdefault.jpg" : imgurl}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By :{author ? author : "Unknown"} <p>On :{new Date(date).toGMTString()}</p></small></p>
                        <a href={newsurl} target="bla
                        " className="btn btn-primary">Read More </a>
                    </div>
                </div>
            </div >
        )
    }
}
