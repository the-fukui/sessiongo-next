import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsCreateNestedOneWithoutSessionsInput } from "../inputs/Session_tagsCreateNestedOneWithoutSessionsInput";
import { SessionsCreateNestedOneWithoutTagsInput } from "../inputs/SessionsCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsCreateInput {
  @TypeGraphQL.Field(_type => SessionsCreateNestedOneWithoutTagsInput, {
    nullable: false
  })
  session!: SessionsCreateNestedOneWithoutTagsInput;

  @TypeGraphQL.Field(_type => Session_tagsCreateNestedOneWithoutSessionsInput, {
    nullable: false
  })
  tag!: Session_tagsCreateNestedOneWithoutSessionsInput;
}
