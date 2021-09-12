import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsCreateOrConnectWithoutTagsInput } from "../inputs/SessionsCreateOrConnectWithoutTagsInput";
import { SessionsUncheckedCreateWithoutTagsInput } from "../inputs/SessionsUncheckedCreateWithoutTagsInput";
import { SessionsWhereUniqueInput } from "../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsCreateNestedOneWithoutTagsInput {
  @TypeGraphQL.Field(_type => SessionsUncheckedCreateWithoutTagsInput, {
    nullable: true
  })
  create?: SessionsUncheckedCreateWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SessionsCreateOrConnectWithoutTagsInput, {
    nullable: true
  })
  connectOrCreate?: SessionsCreateOrConnectWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: true
  })
  connect?: SessionsWhereUniqueInput | undefined;
}
