import React from 'react';
import Top from "../components/title";
export default React.createClass({
    getDefaultProps(){
        return {
            title:"首页"
        } 
    },
    render:function(){
        return (
            <div className="home">
                <Top title={this.props.title}/>
                11111111111111
            </div>
        )
    }
})