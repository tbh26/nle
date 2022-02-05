import { Formik } from 'formik';
import * as Yup from 'yup';

function NewNote(props) {
    function formSubmit(formData) {
        // e.preventDefault(); //// already done by formik, I guess
        const { title, content } = formData;
        console.debug(`form-data; title: ${title}, content: ${content}`);
        props.onNewNote({ newNote: { title, content } });
    }

    return (
        <div className="p-2">
            <header>new note</header>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('title required')
                        .min(3, 'title is minimal 3 chars'),
                    content: Yup.string()
                        .required('content required')
                        .min(1, 'content is minimal 1 char...'),
                })}
                onSubmit={formSubmit}>
                {({ values, errors, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-rows-3">
                                <div className="grid grid-rows-2">
                                    <div className="grid grid-cols-3">
                                        <label className="m-2 p-2 text-right" htmlFor="title">
                                            note title
                                        </label>
                                        <input
                                            className="m-2 p-2"
                                            name="title"
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            placeholder="title placeholder"
                                        />
                                    </div>

                                    <div className="text-center text-teal-600 font-semibold underline">
                                        {errors.title ? <span> {errors.title} </span> : null}
                                    </div>
                                </div>

                                <div>
                                    <div className="grid grid-cols-3">
                                        <label className="m-2 p-2 text-right" htmlFor="content">
                                            note content
                                        </label>
                                        <textarea
                                            className="m-2 p-2 col-span-2 max-w-max"
                                            id="content"
                                            value={values.content}
                                            onChange={handleChange}
                                            placeholder="bla bla.."
                                        />
                                    </div>

                                    <div className="text-center text-teal-600 font-semibold underline">
                                        {errors.content ? (
                                            <span> {errors.content} </span>
                                        ) : null}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="m-2 p-2 border-2 rounded-xl shadow-xl w-full">
                                        submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default NewNote;
