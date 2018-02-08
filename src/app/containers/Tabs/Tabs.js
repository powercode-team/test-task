import React, { Component } from "react";
import "./Tabs.css";

import { NavLink } from "react-router-dom";
// import gql from "graphql-tag";
// import { graphql, compose } from "react-apollo";

import PostItem from "../../components/PostItem/PostItem";

import { mockData } from "../../../data/mock";

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postsByCategory: []
        };
    }

    componentDidMount() {
        this.setCurrentPostByCategory(this.props.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setCurrentPostByCategory(nextProps.location.pathname);
        }
    }

    setCurrentPostByCategory(route) {
        let posts;

        switch (route) {
            case "/popular-tips":
                posts = mockData.popularTips;
                break;
            case "/verified-locals":
                posts = mockData.verifiedLocals;
                break;
            case "/latest-tips":
                posts = mockData.latestTips;
                break;
            case "/newest-locals":
                posts = mockData.newestLocals;
                break;
            default:
                posts = [];
        }

        this.setState({ postsByCategory: posts });
    }

    render() {
        return (
            <div className="wrapper-tab-container">
                <div className="container">
                    <div className="wrapper-tabs">
                        <NavLink className="tab" to="/popular-tips">
                            <p className="tab-name">Popular tips</p>
                        </NavLink>
                        <NavLink className="tab" to="/verified-locals">
                            <p className="tab-name">Verified locals</p>
                        </NavLink>
                        <NavLink className="tab" to="/latest-tips">
                            <p className="tab-name">Latest tips</p>
                        </NavLink>
                        <NavLink className="tab" to="/newest-locals">
                            <p className="tab-name">Newest locals</p>
                        </NavLink>
                    </div>
                </div>
                <div className="wrapper-tab-content">
                    <div className="row">
                        {this.state.postsByCategory.map((el, i) => (
                            <PostItem key={i} img={el.imgHost} name={el.name} description={el.description} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

// const POSTS_QUERY_BY_CATEGORY = gql`
//     query postsQueryByCategory(category: String!) {
//         Post(category: $category) {
//             name
//             imgUrl
//             description
//         }
//     }
// `;

// const TabsPageWidthGraphQL = graphql(POSTS_QUERY_BY_CATEGORY, {
//     name: "postsQuery"
// })(Tabs);

// export default withRouter(TabsPageWidthGraphQL);

export default Tabs;
