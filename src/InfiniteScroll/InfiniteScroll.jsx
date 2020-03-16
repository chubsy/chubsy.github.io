import React, { Component } from "react";
import fetch from 'isomorphic-fetch';

class InfiniteScroll extends Component {
  constructor(props) {
    this.state = {
      data: [],
      per: 3,
      page: 1,
      scroll: false,
      total_pages: null,
    };
  }

  componentWillMount() {
      this.loadUser();

      this.scrollListener = window.addEventListener("scroll", e => {
        this.handleScroll(e);
      });
    }

  loadUser = () => {
    const {per, page, date} = this.state;
    const url = 'www.google.com';
    fetch(url)
      .then(response => response.json())
      .then(response =>
        this.setState({
            data: [...data, ...response.data],
            scroll: false,
            total_pages:  response.data.total_pages
        })
      );
    };

    loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadUser
    );
  };

  handleScroll = () => {
    var lastLi = document.querySelector("ul.container > li:last-child");
    // var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    // var pageOffset = window.pageYOffset + window.innerHeight;
    if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    // if (pageOffset > lastLiOffset) {
         this.loadMore();
    }
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(data => (
            <li key={data.id}>
              <div>
                <div>
                  <img src={data.avatar} />
                </div>
                <div>{data.first_name}</div>
                <div>{data.last_name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }


export default InfiniteScroll;
