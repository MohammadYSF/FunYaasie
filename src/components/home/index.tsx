import React from "react";
import { FunnyCards } from "../funnyCards";
import { funInfo } from "../../types/funInfoType";
type props = {
    data: {
        id: number,
        reporter: string,
        subject: string,
        description: string
    }[],
    delete:(id:number) => boolean,
    redirectToEditForm:(item:funInfo) => void
};
export class Home extends React.Component<props>{
    render() {
        return (
            <>
               
                <FunnyCards data={this.props.data} delete={this.props.delete} redirectToEditForm={this.props.redirectToEditForm}/>
            </>
        );
    }
}