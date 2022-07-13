import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class CkeditorTest extends Component {
    state = {
        data: ""
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <h2>Using CKEditor 5 build in React</h2>
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.data}
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                            this.setState({
                                data: data
                            })
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>
                <div>
                    <h1>Output</h1>
                    {this.state.data}
                </div>
            </React.Fragment>

        );
    }
}

