import React from "react";
import { FunnyCards } from "../funnyCards";
import { funInfo } from "../../types/funInfoType";
import classes from './styles.module.css';
type props = {
    data: {
        id: number,
        reporter: string,
        subject: string,
        description: string
    }[],
    delete: (id: number) => boolean,
    redirectToEditForm: (item: funInfo) => void
};
export class Home extends React.Component<props>{
    render() {
        return (
            <>
                <div className="">
                    <h1 className={`h1 ${classes.customH1}`}>فان یاسی</h1>
                    <p className="text-white-50">جایی برای ثبت چیزهای جدید یا مثلا فان</p>
                </div>
                <FunnyCards data={this.props.data} delete={this.props.delete} redirectToEditForm={this.props.redirectToEditForm} />
            </>
        );
    }
}