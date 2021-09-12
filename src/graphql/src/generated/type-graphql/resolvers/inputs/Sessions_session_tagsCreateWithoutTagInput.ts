import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsCreateNestedOneWithoutTagsInput } from "../inputs/SessionsCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => SessionsCreateNestedOneWithoutTagsInput, {
    nullable: false
  })
  session!: SessionsCreateNestedOneWithoutTagsInput;
}
