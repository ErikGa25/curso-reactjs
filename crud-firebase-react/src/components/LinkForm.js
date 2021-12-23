import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import {toast} from 'react-toastify';

const LinkForm = (props) => {

    const initialStateValues = {
        url: '',
        name: '',
        description: ''
    }

    const [values, setValues] = useState(initialStateValues);

    const validURL = (str) => {
        var pattern = new RegExp(
          "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
          "i"
        ); // fragment locator
        return !!pattern.test(str);
      };

    const handleSubmit = e => {
        e.preventDefault();

        if(!validURL(values.url)){
            return toast('Invalid URL', {
                type: 'warning',
                autoClose: 1000
            });
        }
        props.addOrEdit(values);
        // copia del estado inicial
        setValues({...initialStateValues});
    }

    const getLinkById = async id => {
        const doc = await db.collection('links').doc(id).get();
        setValues({...doc.data()});
    }

    useEffect(() => {
        if(props.currentId === '') {
            setValues({...initialStateValues});
        } else {
            getLinkById(props.currentId);
        }
    }, [props.currentId])

    const handleInputChange = e => {
        const { name, value } = e.target;
        // copiamos el objetos y actualizamos el valor de las propiedades
        setValues({...values, [name]: value});
    }

    return (
        <form className='card card-body border-primary' onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://someurl.xyz"
                    value={values.url}
                    name="url"
                    onChange={handleInputChange}
                />
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Website name"
                    value={values.name}
                    name="name"
                    onChange={handleInputChange}
                />
            </div>
            <br/>
            <div className="form-group">
                <textarea 
                    name='description' 
                    rows='3' 
                    className='form-control' 
                    placeholder='Write a description'
                    onChange={handleInputChange}
                    value={values.description}></textarea>
            </div>
            <br/>
            <button className='btn btn-primary btn-block'>
                {props.currentId === '' ? 'Save' : 'Update'}
            </button>
        </form>
    );
}

export default LinkForm;