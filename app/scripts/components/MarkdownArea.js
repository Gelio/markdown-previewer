import React from 'react';

export default class MarkdownArea extends React.Component {
    handleInput(e) {
        this.props.changeMarkdownText(e.target.value);
    }

    render() {
        return (
            <textarea class="markdown-input" defaultValue={this.props.markdownText} onChange={this.handleInput.bind(this)}>
            </textarea>
        );
    }
}