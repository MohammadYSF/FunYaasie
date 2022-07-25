import React from "react";
import { FunnyCards } from "../funnyCards";
import { FunnyForm } from "../funnyForm";
import { FunnyCard } from "../funnyCard";
type props = {
    data: {
        id: number,
        reporter: string,
        subject: string,
        description: string
    }[]
};
export class Home extends React.Component<props>{
    render() {
        return (
            <>
            {console.log("this.props.data : " , this.props.data)}
                <FunnyCards data={this.props.data} />
            </>
        );
    }
}