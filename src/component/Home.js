import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import '../Home.css';
import TextField from '@material-ui/core/TextField';



export default function Home() {

    const [jsonInput, setJsonInput] = React.useState('');

    return (
        <Container className="main" maxWidth="sm">
            <Typography variant="h3" gutterBottom>
                JSON to CSV
                <div className="json-Text-field">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="JSON"
                        className="json-text-textarea"
                        multiline
                        rows={10}
                        value={jsonInput}
                        onChange={(e) => setJsonInput(e.target.value)}
                        variant="outlined"
                    />
                </div>
            </Typography>
        </Container>
    )
}