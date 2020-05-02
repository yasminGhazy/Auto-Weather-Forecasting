import React, { Component } from 'react';
import "./sidebar.scss";
export default class sidebar extends React.Component {

    render() {
        return (
            <aside>
                <ul>
                    <li>
                        <i className="fa fa-fw fa-twitter" />
                    </li>
                    <li>
                        <i className="fa fa-fw fa-facebook" />
                    </li>
                    <li>
                        <i className="fa fa-fw fa-instagram" />
                    </li>
                    <li>
                        <i className="fa fa-fw fa-linkedin" />
                    </li>
                </ul>
            </aside>
        );
    };
}



