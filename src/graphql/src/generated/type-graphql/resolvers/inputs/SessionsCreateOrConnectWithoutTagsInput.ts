import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsUncheckedCreateWithoutTagsInput } from "../inputs/SessionsUncheckedCreateWithoutTagsInput";
import { SessionsWhereUniqueInput } from "../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsCreateOrConnectWithoutTagsInput {
  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: false
  })
  where!: SessionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionsUncheckedCreateWithoutTagsInput, {
    nullable: false
  })
  create!: SessionsUncheckedCreateWithoutTagsInput;
}
