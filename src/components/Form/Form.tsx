import React, { useState, type PropsWithChildren } from 'react';
import styles from './Form.module.css';


interface FormProps {
    onSubmit?: (e: React.FormEvent) => void;
    onReset?: (e: React.FormEvent) => void;
}


const Form: React.FC<FormProps & PropsWithChildren> = ({
    onSubmit = () => {console.log('Form submit')},
    onReset = () => {console.log('Form submit')},
    children
}) => {
    return (
        <form className={styles.form} onSubmit={onSubmit} onReset={onReset}>{children}</form>
    )
}


const FormGroup: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.form_group}>{children}</div>
    )
}


const SubmitBtn: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <button className={styles.submit_btn} type='submit'>{children}</button>
    )
}


const ResetBtn: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <button className={styles.reset_btn} type='reset'>{children}</button>
    )
}


interface InputFileProps {
    accept?: string;
    isMultiple?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const InputFile: React.FC<InputFileProps> = ({ accept = '', isMultiple = false, onChange = () => {}}) => {
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        const selectedFiles = e.target.files;
        if (!selectedFiles) {
            return;
        }

        const fileArray = Array.from(selectedFiles);
        setFiles(fileArray);
    }

    const handleDeleteButton = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        setFiles(prev => prev.filter((_, i) => i !== index));
    }
    
    return (
        <div className={styles.form_input_file_row}>
            <label className={styles.form_input_file}>
                <input 
                    onChange={handleFileChange}
                    type='file' 
                    {...(accept && { accept })}
                    {...(isMultiple && {multiple: true})}
                />
                <p>Choose files</p>
            </label>
            <div className={styles.form_input_file_list}>
                {files.map((file, index) => (
                    <div key={`${file.name}-${index}`} className={styles.form_input_file_list_item}>
                        {file.type.startsWith('image/') && (
                            <img 
                                src={URL.createObjectURL(file)} 
                                alt={file.name}
                                className={styles.form_input_file_list_item_img}
                                onLoad={() => URL.revokeObjectURL(file.name)}
                            />
                        )}                        
                        <span className={styles.form_input_file_list_name}>{file.name}</span>
                        
                        <button 
                            onClick={(e) => {handleDeleteButton(e, index)}}
                            className={styles.form_input_file_list_remove}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Form;
export { FormGroup, SubmitBtn, ResetBtn, InputFile }
