import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownArea from './components/MarkdownArea';
import MarkdownDisplay from './components/MarkdownDisplay';

class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            markdownText: require('../default.md')
        };
    }

    changeMarkdownText(text) {
        this.setState({
            markdownText: text
        });
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-6">
                    <MarkdownArea markdownText={this.state.markdownText} changeMarkdownText={this.changeMarkdownText.bind(this)}/>
                </div>
                <div class="col-md-6">
                    <MarkdownDisplay markdownText={this.state.markdownText}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));