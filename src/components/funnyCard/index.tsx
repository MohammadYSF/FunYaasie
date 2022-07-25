import React from "react";
import classes from './styles.module.css';
type props = {
    id:number,
    reporter:string,
    subject:string,
    description:string
};
export  class FunnyCard extends React.Component<props> {
    render() {
        return (
            <>
                <div className="card w-100 rounded-0 bg-transparent text-light border border-light mt-3 ">
                    <div className="card-body">
                        <h5 className="card-title"><span className={`${classes.label}`}>گزارش دهنده</span> : {this.props.reporter}</h5>
                        <h5 className="card-subtitle"><span className={`${classes.label}`}>سوژه</span> : {this.props.subject}</h5>
                        <p className="card-text"><span className={`${classes.label}`}>توضیحات</span> :
                            {this.props.description}
                        </p>
                    </div>
                </div>


            </>
        );
    }
}