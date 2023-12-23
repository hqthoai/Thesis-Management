import {Button} from '@mui/material'

function UploadFile({onUpload, onChange}) {

    return (
        <div>
            <input type="file" onChange={onChange} />
            <Button variant="contained" onClick={onUpload}>Upload</Button>
        </div>
    );
}

export default UploadFile;