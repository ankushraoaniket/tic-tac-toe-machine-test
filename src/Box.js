import React from 'react'
import { Button } from "react-bootstrap";

const Box = (props) => <Button style={{ width: "16%", height: "100%" }} onClick={props.onClick}>
    {props.value}
</Button>

export default Box