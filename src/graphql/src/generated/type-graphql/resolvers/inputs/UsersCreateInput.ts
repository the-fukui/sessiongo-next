import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsCreateNestedManyWithoutAuthorInput } from "../inputs/SessionsCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  auth_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => SessionsCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  sessions?: SessionsCreateNestedManyWithoutAuthorInput | undefined;
}
