import React from "react";
import { Create, TextInput, DateInput, SimpleForm } from "react-admin";

const PostCreate: React.FC<any> = (props) => {
   return (
   <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="title"/>
        <TextInput multiline source="body"/>
        <DateInput label="Published" source="publishedAt"/>
      </SimpleForm>
   </Create>
      );
};

export default PostCreate;
