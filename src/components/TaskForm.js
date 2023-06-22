import React from 'react'

const TaskForm = ({addTaskCallBack}) => {
    const[formFields, setFormFields] = React.useState({
        title:'',
    });

    const handleChange = evt => setFormFields({...formFields,[evt.target.name]: evt.target.value});

    const handleOnSubmit=(event)=> {
        event.preventDefault()
        addTaskCallBack(formFields)
        setFormFields({
            title:''
        })
    };

    return (
        <form onSubmit = {handleOnSubmit}>
            <section>
                <h2>Add a New Task!</h2>
                <div className='new_task_fields'>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input
                            name='title'
                            value={formFields.title}
                            onChange={handleChange}
                            ></input>
                    </div>
                    <button className='button submit_new_task'>Submit</button>
                </div>
            </section>
        </form>
    )
}

export default TaskForm