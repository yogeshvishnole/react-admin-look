import React from "react";
import {
   List,
   Datagrid,
   DateField,
   TextField,
   EditButton,
   DeleteButton,
} from "react-admin";

const PostList: React.FC<any> = (props) => {
   return (
      <List {...props}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="publishedAt" />
            <EditButton basePath="/posts" />
            <DeleteButton basePath="/psots" />
         </Datagrid>
      </List>
   );
};
export default PostList;
