import React from "react";
import { useNavigate } from "react-router-dom";
import { funInfo } from "../../types/funInfoType";
import classes from './styles.module.css';
type props = {
    id: number,
    reporter: string,
    subject: string,
    description: string,
    // edit: (id: number) => void,
    delete: (id: number) => boolean,
    redirectToEditForm: (item: funInfo) => void
};
export function FunnyCard(props: props) {
    const navigate = useNavigate();
    return (
        <>
            <div className={`card w-75 mx-auto rounded-0 bg-transparent text-light border border-light mt-5 border-0 ${classes.customCard}`}>
                <div className="card-body">
                    <h5 className="card-title"><span className={`${classes.label}`}>گزارش دهنده</span> : {props.reporter}</h5>
                    <h5 className="card-subtitle"><span className={`${classes.label}`}>سوژه</span> : {props.subject}</h5>
                    <p className="card-text text-white-50"><span className={`${classes.label}`}>توضیحات</span> :
                        {props.description}
                    </p>
                    <div>
                        <a type="button" className="mx-2 text-decoration-none text-danger" onClick={() => props.delete(props.id)}>حذف</a>
                        <a type="button" className="mx-2 text-decoration-none text-info"
                            onClick={() => {
                                props.redirectToEditForm({
                                    id: props.id,
                                    description: props.description,
                                    reporter: props.reporter,
                                    subject: props.subject

                                });
                                navigate("/funnyform");

                            }}>ویرایش</a>
                    </div>
                </div>
            </div>


        </>

    );
}
