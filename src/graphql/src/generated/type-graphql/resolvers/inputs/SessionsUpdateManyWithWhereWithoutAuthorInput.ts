import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsScalarWhereInput } from "../inputs/SessionsScalarWhereInput";
import { SessionsUncheckedUpdateManyWithoutSessionsInput } from "../inputs/SessionsUncheckedUpdateManyWithoutSessionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SessionsScalarWhereInput, {
    nullable: false
  })
  where!: SessionsScalarWhereInput;

  @TypeGraphQL.Field(_type => SessionsUncheckedUpdateManyWithoutSessionsInput, {
    nullable: false
  })
  data!: SessionsUncheckedUpdateManyWithoutSessionsInput;
}
