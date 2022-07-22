import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CreatableSelect from 'react-select/creatable';
import Mutation from '../source/mutation'

const components = {
    DropdownIndicator: null,
  };
  
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ModalHeroes = ({ open, closeModal, create }) => {

    console.log(create)

    const [selectedOption, setSelectedOption] = useState();
    const [valueData, setValue] = useState();
    const [input, setInput] = useState();
    const [fields, setFields] = useState()

    useEffect(() => {
      // Update the document title using the browser API
    
    });

   const handleChange = ( value, actionMeta) => {
        console.group('Value Changed');
        console.log('Value Changed');
        console.log(value);
        setValue(setValue)
    };

   const  handleInputChange = (inputValue) => {
          setInput({ inputValue });
    };

   const handleKeyDown = (event) => {
    if (!input) return;
    if(event.key === "Enter" || event.key === "Tab") {
        console.log("pogi")
        console.log(input)
         let data = {value: input.inputValue, label: input.inputValue }
         if(valueData) {
          setValue([...valueData, data ])
          setInput(" ");
         } else {
          setValue([data])
          setInput(" ");
         }
    }
  };

  const  handleInputChangeText = (event) => {
      let value = event.target.value
      let id = event.target.id
      console.log(id)
      if(fields) {
        setFields((prev) => ({...prev, [id]: value }))
      } else {
        setFields({[id]: value})
      }
  };

  const submitForm = () => {
    let skills = []
     
    valueData.map(e => {
      skills.push(e.value)
    })

    Mutation.CreateHero({...fields, skills: skills}).then(res => {
      if(!res.error) {
        console.log(res)
        closeModal()
      } 
    })
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
            sx={style}
            component="form"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: 20}}>
           {create ?   "Update Hero" : "Create Hero"} 
          </Typography>

          <TextField id="name" label="Name" variant="standard" onChange={handleInputChangeText} value={fields && fields.name}  sx={{ width: 1 }} style={{marginBottom: 20}} />

          <CreatableSelect
            components={components}
            inputValue={selectedOption}
            isClearable
            isMulti
            menuIsOpen={false}
            onChange={handleChange}
            onInputChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="add skills and enter..."
            value={valueData}
           />

          <TextField
            style={{marginTop: 20}}
            id="description"
            label="Description"
            multiline
            rows={4}
            value={fields && fields.description}
            onChange={handleInputChangeText}
            defaultValue=""
            variant="standard"
            sx={{ width: 1 }}
            />  

           <Button variant="contained" onClick={submitForm} style={{marginTop: 20}}>Save</Button>
           <Button variant="outlined" onClick={closeModal}  style={{marginTop: 20 , marginLeft: 10}}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalHeroes