import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsCreateOrConnectWithoutSessionsInput } from "../inputs/Session_tagsCreateOrConnectWithoutSessionsInput";
import { Session_tagsUncheckedCreateWithoutSessionsInput } from "../inputs/Session_tagsUncheckedCreateWithoutSessionsInput";
import { Session_tagsWhereUniqueInput } from "../inputs/Session_tagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsCreateNestedOneWithoutSessionsInput {
  @TypeGraphQL.Field(_type => Session_tagsUncheckedCreateWithoutSessionsInput, {
    nullable: true
  })
  create?: Session_tagsUncheckedCreateWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsCreateOrConnectWithoutSessionsInput, {
    nullable: true
  })
  connectOrCreate?: Session_tagsCreateOrConnectWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsWhereUniqueInput, {
    nullable: true
  })
  connect?: Session_tagsWhereUniqueInput | undefined;
}
