import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsCreateNestedOneWithoutSessionsInput } from "../inputs/Session_tagsCreateNestedOneWithoutSessionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsCreateWithoutSessionInput {
  @TypeGraphQL.Field(_type => Session_tagsCreateNestedOneWithoutSessionsInput, {
    nullable: false
  })
  tag!: Session_tagsCreateNestedOneWithoutSessionsInput;
}
