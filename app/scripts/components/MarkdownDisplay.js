import React from 'react';
import marked from 'marked';

export default class MarkdownDisplay extends React.Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: marked(this.props.markdownText)}} class="markdown-preview"></div>
        );
    }
}