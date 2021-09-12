import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutSessionsInput } from "../inputs/UsersCreateOrConnectWithoutSessionsInput";
import { UsersUncheckedCreateWithoutSessionsInput } from "../inputs/UsersUncheckedCreateWithoutSessionsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersCreateNestedOneWithoutSessionsInput {
  @TypeGraphQL.Field(_type => UsersUncheckedCreateWithoutSessionsInput, {
    nullable: true
  })
  create?: UsersUncheckedCreateWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutSessionsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
