import React from "react";
import { funInfo } from "../../types/funInfoType";
import { FunnyCard } from "../funnyCard";;
type props = {
    data:
    {
        id: number,
        reporter: string
        subject: string,
        description: string,
    }[],
    // edit: (id: number) => void,
    delete: (id: number) => boolean,
    redirectToEditForm: (item: funInfo) => void

}

export class FunnyCards extends React.Component<props> {
    render() {
        return (
            <>
                {this.props.data.map((item) => {
                    return <FunnyCard redirectToEditForm={this.props.redirectToEditForm} delete={this.props.delete} /*edit={this.props.edit}*/ id={item.id} subject={item.subject} reporter={item.reporter} description={item.description} />
                })}
            </>
        );
    }
}