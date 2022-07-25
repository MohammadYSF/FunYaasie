import React from "react";
import { useForm } from 'react-hook-form';
import { FunnyCard } from "../funnyCard";;
type props = {
    data:
        {
            id:number,
            reporter:string
            subject:string,
            description:string,
        }[]
    
}

export class FunnyCards extends React.Component<props> {
    render() {
        return (
            <>
            {this.props.data.map((item) => {
                return <FunnyCard id={item.id} subject = {item.subject} reporter = {item.reporter} description = {item.description}/>
            })}
            </>
        );
    }
}