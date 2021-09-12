import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersUncheckedCreateWithoutSessionsInput } from "../inputs/UsersUncheckedCreateWithoutSessionsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersCreateOrConnectWithoutSessionsInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersUncheckedCreateWithoutSessionsInput, {
    nullable: false
  })
  create!: UsersUncheckedCreateWithoutSessionsInput;
}
