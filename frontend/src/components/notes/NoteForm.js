import { Formik } from 'formik';
import * as Yup from 'yup';
import { NewNoteObject } from './Note';

function NoteForm(props) {
    const {
        hasCancel,
        cancelButtonText,
        onCancel,
        submitButtonText,
        initialTitle,
        initialContent,
        onNoteFormSubmit,
    } = props;

    function formSubmit(formData, { resetForm }) {
        const { title, content } = formData;
        //console.debug(`NoteForm/formSubmit; form-data again, title: ${title}, content: ${content}`);
        const formNote = { formNote: NewNoteObject(title, content) };
        console.debug('NoteForm/formSubmit; note (object):', formNote);
        onNoteFormSubmit(formNote);
        // clear inputs ??
        resetForm();
    }

    return (
        <div className="p-2">
            <Formik
                initialValues={{
                    title: initialTitle,
                    content: initialContent,
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
                {({ values, errors, isValid, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-rows-3">
                                <div className="grid grid-rows-2">
                                    <div className="grid grid-cols-3">
                                        <label className="m-2 p-2 text-right" htmlFor="title">
                                            title
                                        </label>
                                        <input
                                            className="m-2 p-2"
                                            name="title"
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            placeholder="enter 'title' here"
                                        />
                                    </div>

                                    <div className="text-center text-teal-600 font-semibold underline">
                                        {errors.title ? <span> {errors.title} </span> : null}
                                    </div>
                                </div>

                                <div>
                                    <div className="grid grid-cols-3">
                                        <label className="m-2 p-2 text-right" htmlFor="content">
                                            content
                                        </label>
                                        <textarea
                                            className="m-2 p-2 col-span-2 max-w-max"
                                            id="content"
                                            value={values.content}
                                            onChange={handleChange}
                                            placeholder="enter 'content' here..."
                                        />
                                    </div>

                                    <div className="text-center text-teal-600 font-semibold underline">
                                        {errors.content ? (
                                            <span> {errors.content} </span>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        {hasCancel ? (
                                            <div
                                                className="m-2 p-2 rounded-xl shadow-xl bg-sky-400"
                                                onClick={onCancel}>
                                                {cancelButtonText}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div>
                                        {isValid ? (
                                            <div
                                                className="m-2 p-2 border-2 rounded-xl shadow-xl w-full font-semibold"
                                                type="submit">
                                                {submitButtonText}
                                            </div>
                                        ) : (
                                            <div
                                                disabled
                                                className="m-2 p-2 border-2 border-dotted rounded-xl shadow-xl w-full font-light"
                                                type="submit">
                                                ...
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default NoteForm;
