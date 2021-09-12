import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsUncheckedCreateWithoutTagsInput } from "../inputs/SessionsUncheckedCreateWithoutTagsInput";
import { SessionsUncheckedUpdateWithoutTagsInput } from "../inputs/SessionsUncheckedUpdateWithoutTagsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsUpsertWithoutTagsInput {
  @TypeGraphQL.Field(_type => SessionsUncheckedUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: SessionsUncheckedUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => SessionsUncheckedCreateWithoutTagsInput, {
    nullable: false
  })
  create!: SessionsUncheckedCreateWithoutTagsInput;
}
