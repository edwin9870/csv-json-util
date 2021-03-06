import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import '../Home.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import JSON5 from 'json5';
import MessageStatus from './MessageStatus';
import { JsonToTable } from "react-json-to-table";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);




export default function Home() {

    const classes = useStyles();
    const [jsonInput, setJsonInput] = React.useState('');
    const [jsonData, setJsonData] = React.useState(null);
    const [jsonValidation, setJsonValidation] = React.useState({
        valid: true,
        message: ''
    });

    const onChangeTextJsonInput = (e) => {
        const jsonInputValue = e.target.value;
        setJsonInput(jsonInputValue)
    };

    useEffect(() => {
        try {
            const data = JSON5.parse(jsonInput)
            setJsonValidation({ valid: true, message: 'Valid JSON' })
            setJsonData(data)
        } catch (e) {
            if (jsonInput.length > 2) {
                setJsonValidation({ valid: false, message: e.message })
            } else {
                setJsonValidation({ valid: false, message: '' })
            }
        }
    }, [jsonInput]);

    return (
        <Container className="main" maxWidth="sm">
            <Typography variant="h3" gutterBottom>JSON to CSV</Typography>
            <div className="json-Text-field">
                <TextField
                    id="outlined-multiline-flexible"
                    label="JSON"
                    className="json-text-textarea"
                    multiline
                    rows={10}
                    value={jsonInput}
                    onChange={onChangeTextJsonInput}
                    variant="outlined"
                />
            </div><br />
            <MessageStatus message={jsonValidation.message} severity={jsonValidation.valid ? 'info' : 'error'} />
            {(jsonValidation.valid && jsonInput.length > 2 ) && <JsonToTable json={jsonData} />}
        </Container>
    )
}