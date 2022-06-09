import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = ({setM}) => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        
        console.log(data);
        setM(null)
       

    
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Title" class="input input-bordered input-primary w-full max-w-xs" {...register("title")} />
                        <textarea type="text" placeholder="Content" class="input input-bordered input-primary w-full max-w-xs" {...register("content")} />
                        <input type="date" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" {...register("date")} />
                        <div class="modal-action ">
                            <input type='submit' for="my-modal-6" class="btn mx-auto" value="Post" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Modal;