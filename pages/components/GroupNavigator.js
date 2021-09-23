import React from 'react'
import { List, Image, Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Navigation = ({groupsList}) => {
  return (
    <div>
        <h1 >My Groups</h1>
        <List divided relaxed>
            {groupsList.map((group) => {
                return (
                    <List.Item style = {{margin: "10px", marginLeft: "25px", width: "15%"}}>
                        <Image src = {group.image} avatar style = {{marginTop: "13px", width: "15%", height: "15%"}}/>
                        <List.Content style = {{marginTop: "13px", marginLeft: "5px"}}>
                            <h1 as='a' style = {{fontSize: "130%", color: "#d1ae0f", marginBottom: "5px"}}>{group.name}</h1>
                            <List.Description as='a' style = {{fontSize: "75%"}}>Last Post {group.lastPost} mins ago</List.Description>
                        </List.Content>
                        <Button icon style = {{marginLeft: "35px", marginTop: "17px", float: "right", backgroundColor: "#d1ae0f"}}>
                            <Icon name='arrow right'/>
                        </Button>
                    </List.Item>
                )
            })}
        </List>
  </div>
  );
}

export default Navigation;