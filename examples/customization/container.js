"use strict";

import React from "react";
import Target from "./target";
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const targets = [{
    name: "Banana"
}, {
    name: "Apple"
}, {
    name: "Papaya"
}, {
    name: "Mango"
}, {
    name: "Orange"
}, {
    name: "Pineapple"
}];

const Container = React.createClass({
    displayName: "Container",
    render() {
        return (
            <table className="table table-bordered">
                <tbody>
                {targets.map((item, i) => (
                    <Target renderTag="tr" name={item.name} key={i}
                        attributes={{className: "my-custom-row-class"}}/>
                ))}
                </tbody>
            </table>
        );
    }
});

export default Container;
