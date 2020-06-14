import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import '../Home.css';
import TextField from '@material-ui/core/TextField';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
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
    const [jsonValidation, setJsonValidation] = React.useState({
        valid: true,
        errorMessage: ''
    });

    const onChangeTextJsonInput = (e) => {
        const jsonInputValue = e.target.value;
        setJsonInput(jsonInputValue)

        try {
            const data = JSON.parse(jsonInputValue)
            setJsonValidation({ valid: true, errorMessage: '' })
        } catch (e) {
            if (jsonInputValue.length > 2) {
                setJsonValidation({ valid: false, errorMessage: e.message })
            }
        }

    };

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
            {!jsonValidation.valid ?
                <div className={classes.root}>
                    <Alert severity="error">{jsonValidation.errorMessage}</Alert>
                </div>
                : null
            }
            {(jsonValidation.valid && jsonInput.length > 2)  ?
                <div className={classes.root}>
                    <Alert severity="info">Valid JSON</Alert>
                </div>
                : null
            }


        </Container>
    )
}