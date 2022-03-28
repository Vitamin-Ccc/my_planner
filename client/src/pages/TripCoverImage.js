import React, { useState } from 'react';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
function TripCoverImage() {
    const [files, setFiles] = useState([]);
    const [success, setSuccess] =useState(false)
    const navigate = useNavigate();

    const handleUpdate = (files) =>{
      setFiles(files)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      let data = new FormData()
      if(files[0] && files[0].file) {
        data.append('userAvatar', files[0].file)
      }
      try{
        let res = await axios.put('/api/users/avatar', data)
        console.log('res: ', res)
      }catch(err){
        console.log(err)
      }
      setFiles("");
    }

    return (
        <div className="App">
          <h1 style={{ textAlign: "center"}}>Update Your Porfile Image</h1>
          <Form>
            <FilePond
                files={files}
                onupdatefiles={handleUpdate}
                allowMultiple={false}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            <Form.Field style={{ display: "flex", justifyContent: "center"}}>
            <Button color= "green" onClick={handleSubmit}>Update</Button>
            </Form.Field>
            </Form>
        </div>
    );
}

export default TripCoverImage;