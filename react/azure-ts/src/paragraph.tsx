import React from 'react';

interface ParaProps {
    passedInText: string;
}

export default class Paragraph extends React.Component<ParaProps> {
    render() {
        return (
            <div className="container">
                <p>{this.props.passedInText}</p>
            </div>
        )
    }
}