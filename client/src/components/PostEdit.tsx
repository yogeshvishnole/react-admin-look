import React from "react";
import { Edit, TextInput, DateInput, SimpleForm } from "react-admin";

const PostEdit: React.FC<any> = (props) => {
   return (
   <Edit title="Edit a Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id"/>
        <TextInput source="title"/>
        <TextInput multiline source="body"/>
        <DateInput label="Published" source="publishedAt"/>
      </SimpleForm>
   </Edit>
      );
};

export default PostEdit;