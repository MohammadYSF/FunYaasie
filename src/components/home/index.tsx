import React from "react";
import { FunnyCards } from "../funnyCards";
import { FunnyForm } from "../funnyForm";
import { FunnyCard } from "../funnyCard";
import { FunnyNavbar } from "../funnyNavbar";
type props = {
    data: {
        id: number,
        reporter: string,
        subject: string,
        description: string
    }[],
    delete:(id:number) => boolean
};
export class Home extends React.Component<props>{
    render() {
        return (
            <>
               
                <FunnyCards data={this.props.data} delete={this.props.delete}/>
            </>
        );
    }
}