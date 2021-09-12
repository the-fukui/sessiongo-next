import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersUncheckedCreateWithoutSessionsInput } from "../inputs/UsersUncheckedCreateWithoutSessionsInput";
import { UsersUncheckedUpdateWithoutSessionsInput } from "../inputs/UsersUncheckedUpdateWithoutSessionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersUpsertWithoutSessionsInput {
  @TypeGraphQL.Field(_type => UsersUncheckedUpdateWithoutSessionsInput, {
    nullable: false
  })
  update!: UsersUncheckedUpdateWithoutSessionsInput;

  @TypeGraphQL.Field(_type => UsersUncheckedCreateWithoutSessionsInput, {
    nullable: false
  })
  create!: UsersUncheckedCreateWithoutSessionsInput;
}
